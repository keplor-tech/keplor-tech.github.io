'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import * as THREE from 'three';

const VERT = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

// Original luminous horizon arc: violet/cyan ring segment with a hot core,
// volumetric deep-purple fill and a subtle quantized pixel-lattice shimmer.
const FRAG = `
precision highp float;

varying vec2 vUv;
uniform vec2  u_res;
uniform float u_time;
uniform vec2  u_pointer;
uniform float u_intensity;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453123); }

void main(){
  vec2 uv = vUv;
  vec2 p  = uv - 0.5;
  p.x *= u_res.x / u_res.y;

  float t = u_time;

  // Arc geometry: ring segment with autonomous breathing + pointer influence
  float r     = length(p);
  float angle = atan(p.y, p.x);

  float breathe     = 0.012 * sin(t * 0.6);
  float pointerPull = 0.02 * (u_pointer.y - 0.5) * smoothstep(0.6, 0.0, r);
  float radius      = 0.34 + breathe + pointerPull;

  float band    = abs(r - radius);
  float arcMask = smoothstep(0.045, 0.0, band);

  // Sweeping arc, upper-right dominant (horizon feel)
  float sweep = smoothstep(-2.6, -0.6, angle) * smoothstep(2.9, 1.2, angle);
  float arc   = arcMask * mix(0.35, 1.0, sweep);

  // Hot core drifting subtly with pointer
  vec2 coreC = vec2(0.03 * sin(t*0.4), 0.02 * cos(t*0.5)) + (u_pointer - 0.5) * 0.06;
  float core = exp(-length(p - coreC) * 5.5);

  // Volumetric inner fill (deep brand purple)
  float fill = smoothstep(radius, 0.0, r) * 0.55;

  // Pixel-lattice shimmer along the arc
  vec2  cell    = floor(uv * u_res.y / 6.0);
  float lattice = step(0.82, hash(cell + floor(t*2.0))) * arcMask * 0.35;

  // Palette
  vec3 deepPurple = vec3(0.212, 0.000, 0.427);  // #36006D
  vec3 violet     = vec3(0.545, 0.365, 0.965);  // #8B5CF6
  vec3 cyan       = vec3(0.133, 0.827, 0.933);  // #22D3EE
  vec3 magenta    = vec3(0.933, 0.282, 0.933);

  vec3 col = vec3(0.0);
  col += fill * mix(deepPurple, violet * 0.55, smoothstep(0.0, radius, r));
  col += arc * violet * 1.15;
  col += arc * sweep * cyan * 0.85;
  col += core * vec3(0.95, 0.85, 1.0) * 1.6;
  col += core * core * magenta * 0.8;
  col += lattice * cyan * 0.6;
  col += smoothstep(0.16, 0.0, band) * violet * 0.22;

  col *= u_intensity;

  float alpha = clamp(max(max(col.r, col.g), col.b) * 1.4, 0.0, 0.9);
  gl_FragColor = vec4(col, alpha);
}
`;

export function PredictiveArc({ intensityRef }: { intensityRef?: React.MutableRefObject<number> }) {
  const reduced = useReducedMotion();
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (reduced) return;
    const mount = mountRef.current;
    if (!mount) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: 'low-power' });
    } catch {
      mount.dataset.mode = 'fallback';
      return;
    }

    const DPR_CAP = 1.75;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, DPR_CAP));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0, 1);

    const uniforms = {
      u_res:       { value: new THREE.Vector2(1, 1) },
      u_time:      { value: 0 },
      u_pointer:   { value: new THREE.Vector2(0.5, 0.5) },
      u_intensity: { value: 0 },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms,
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material);
    scene.add(mesh);

    const resize = () => {
      const w = mount.clientWidth || 1;
      const h = mount.clientHeight || 1;
      renderer.setSize(w, h, false);
      uniforms.u_res.value.set(w * renderer.getPixelRatio(), h * renderer.getPixelRatio());
    };
    resize();

    // Shared pointer state, spring-damped
    const px = { cur: 0.5, tgt: 0.5 };
    const py = { cur: 0.5, tgt: 0.5 };

    const onMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      if (rect.width === 0) return;
      px.tgt = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
      py.tgt = Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height));
    };
    const onLeave = () => { px.tgt = 0.5; py.tgt = 0.5; };

    // Pause when offscreen or tab hidden
    let visible = true;
    let inTab = !document.hidden;
    const io = new IntersectionObserver((entries) => { visible = entries[0]?.isIntersecting ?? true; }, { threshold: 0 });
    io.observe(mount);
    const onVis = () => { inTab = !document.hidden; };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVis);

    mount.dataset.mode = 'webgl';

    let raf = 0;
    let fade = 0;
    const clock = new THREE.Clock();

    const frame = () => {
      raf = requestAnimationFrame(frame);
      if (!visible || !inTab) return;

      px.cur += (px.tgt - px.cur) * 0.055;
      py.cur += (py.tgt - py.cur) * 0.055;
      fade = Math.min(1, fade + 0.012);

      const targetIntensity = intensityRef ? intensityRef.current : 1;
      uniforms.u_intensity.value += (fade * targetIntensity - uniforms.u_intensity.value) * 0.08;
      uniforms.u_time.value = clock.getElapsedTime();
      uniforms.u_pointer.value.set(px.cur, 1 - py.cur);

      renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVis);
      mesh.geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, [reduced, intensityRef]);

  if (reduced) {
    return <div className="hero-arc-fallback" aria-hidden="true" />;
  }

  return <div ref={mountRef} className="hero-arc-canvas" aria-hidden="true" data-mode="pending" />;
}
