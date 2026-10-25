'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion, useScroll, useTransform } from 'framer-motion';

const VERT = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

// Original luminous horizon arc: violet/cyan ring segment with a hot core,
// soft volumetric falloff and a subtle quantized pixel-lattice shimmer.
const FRAG = `
precision highp float;

uniform vec2  u_res;
uniform float u_time;
uniform vec2  u_pointer;   // 0..1 within the canvas
uniform float u_scroll;    // 0..1 page progress
uniform float u_fade;      // entrance fade 0..1

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453123); }

float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  f = f*f*(3.0-2.0*f);
  return mix(mix(hash(i), hash(i+vec2(1,0)), f.x),
             mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
}

void main(){
  vec2 uv = gl_FragCoord.xy / u_res.xy;          // 0..1
  vec2 p  = uv - 0.5;                            // centered
  p.x *= u_res.x / u_res.y;                      // keep circle round

  float t = u_time;

  // --- Arc geometry: a ring segment (horizon arc) ---
  float r     = length(p);
  float angle = atan(p.y, p.x);

  // Gentle autonomous breathing + pointer influence on radius
  float breathe  = 0.012 * sin(t * 0.6);
  float pointerPull = 0.02 * (u_pointer.y - 0.5) * smoothstep(0.6, 0.0, r);
  float radius   = 0.34 + breathe + pointerPull;

  // Arc band: thin luminous ring, brighter on the upper sweep
  float band     = abs(r - radius);
  float arcMask  = smoothstep(0.045, 0.0, band);

  // Restrict to a sweeping arc (upper-right dominant, like a horizon)
  float sweep    = smoothstep(-2.6, -0.6, angle) * smoothstep(2.9, 1.2, angle);
  float arc      = arcMask * mix(0.35, 1.0, sweep);

  // --- Hot core: soft inner glow, drifts subtly with pointer ---
  vec2 coreC = vec2(0.03 * sin(t*0.4), 0.02 * cos(t*0.5)) + (u_pointer - 0.5) * 0.06;
  float core = exp(-length(p - coreC) * 5.5);

  // --- Volumetric inner fill (deep brand purple) ---
  float fill = smoothstep(radius, 0.0, r) * 0.55;

  // --- Pixel lattice shimmer along the arc ---
  vec2  cell   = floor(uv * u_res.y / 6.0);
  float lattice= step(0.82, hash(cell + floor(t*2.0))) * arcMask * 0.35;

  // --- Palette ---
  vec3 deepPurple = vec3(0.212, 0.000, 0.427);  // #36006D
  vec3 violet     = vec3(0.545, 0.365, 0.965);  // #8B5CF6
  vec3 cyan       = vec3(0.133, 0.827, 0.933);  // #22D3EE
  vec3 magenta    = vec3(0.933, 0.282, 0.933);

  vec3 col = vec3(0.0);

  // Inner fill: deep purple rising toward violet at the rim
  col += fill * mix(deepPurple, violet * 0.55, smoothstep(0.0, radius, r));

  // Arc: violet base with cyan on the bright sweep
  col += arc * violet * 1.15;
  col += arc * sweep * cyan * 0.85;

  // Hot core: white-violet with a magenta kiss
  col += core * vec3(0.95, 0.85, 1.0) * 1.6;
  col += core * core * magenta * 0.8;

  // Lattice sparkle
  col += lattice * cyan * 0.6;

  // Soft outer bloom around the arc
  col += smoothstep(0.16, 0.0, band) * violet * 0.22;

  // Scroll: gently sink + dim the whole form
  col *= 1.0 - u_scroll * 0.35;
  col *= u_fade;

  float alpha = clamp(max(max(col.r, col.g), col.b) * 1.4, 0.0, 0.9);
  gl_FragColor = vec4(col, alpha);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string): WebGLShader | null {
  const sh = gl.createShader(type);
  if (!sh) return null;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    console.error('[PredictiveArc] shader error:', gl.getShaderInfoLog(sh));
    gl.deleteShader(sh);
    return null;
  }
  return sh;
}

export function PredictiveArc() {
  const reduced = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mode, setMode] = useState<'pending' | 'webgl' | 'fallback'>('pending');
  const { scrollYProgress } = useScroll();
  const scrollRef = useRef(0);

  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => { scrollRef.current = v; });
    return () => unsub();
  }, [scrollYProgress]);

  useEffect(() => {
    if (reduced) { setMode('fallback'); return; }
    if (mode !== 'pending') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { alpha: true, antialias: false, premultipliedAlpha: false });
    if (!gl) { setMode('fallback'); return; }

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) { setMode('fallback'); return; }

    const prog = gl.createProgram();
    if (!prog) { setMode('fallback'); return; }
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error('[PredictiveArc] link error:', gl.getProgramInfoLog(prog));
      setMode('fallback');
      return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes      = gl.getUniformLocation(prog, 'u_res');
    const uTime     = gl.getUniformLocation(prog, 'u_time');
    const uPointer  = gl.getUniformLocation(prog, 'u_pointer');
    const uScroll   = gl.getUniformLocation(prog, 'u_scroll');
    const uFade     = gl.getUniformLocation(prog, 'u_fade');

    const DPR_CAP = 1.75;
    let raf = 0;
    let running = false;
    let visible = true;
    let inPage = !document.hidden;
    let fade = 0;

    const px = { cur: 0.5, tgt: 0.5 };
    const py = { cur: 0.5, tgt: 0.5 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);
      canvas.width  = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0) return;
      px.tgt = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
      py.tgt = Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height));
    };
    const onLeave = () => { px.tgt = 0.5; py.tgt = 0.5; };
    const onVis = () => { inPage = !document.hidden; };
    const onResize = () => resize();

    const io = new IntersectionObserver(
      (entries) => { visible = entries[0]?.isIntersecting ?? true; },
      { threshold: 0 }
    );
    io.observe(canvas);

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVis);
    resize();

    setMode('webgl');

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!visible || !inPage) return;          // paused: skip draw, keep loop cheap

      // spring-damped pointer (fluid inertia)
      px.cur += (px.tgt - px.cur) * 0.055;
      py.cur += (py.tgt - py.cur) * 0.055;

      // slow cinematic entrance fade
      fade = Math.min(1, fade + 0.012);

      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, now / 1000);
      gl.uniform2f(uPointer, px.cur, 1 - py.cur);
      gl.uniform1f(uScroll, scrollRef.current);
      gl.uniform1f(uFade, fade);

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    running = true;
    raf = requestAnimationFrame(frame);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVis);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  return (
    <div className="hero-arc" aria-hidden="true">
      {mode !== 'fallback' ? (
        <canvas ref={canvasRef} />
      ) : (
        <div className="hero-arc-fallback" />
      )}
    </div>
  );
}
