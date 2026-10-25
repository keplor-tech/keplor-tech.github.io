'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useReducedMotion, useScroll, useTransform } from 'framer-motion';

export function PredictiveArc() {
  const reduced = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  const scrollY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (reduced) {
      setWebglSupported(false);
      return;
    }

    const gl = canvas.getContext('webgl', { alpha: true, antialias: true });
    if (!gl) {
      setWebglSupported(false);
      return;
    }

    // Cap device pixel ratio for performance
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    gl.viewport(0, 0, canvas.width, canvas.height);

    // Vertex shader — simple full-screen quad
    const vsSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment shader — sweeping violet/cyan luminous horizon arc with hot core
    const fsSource = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform vec2 u_pointer;
      uniform float u_time;
      uniform float u_scroll;
      uniform float u_pixel;

      // Simple hash
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }

      // Noise
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
          mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
          f.y
        );
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        uv.x *= u_resolution.x / u_resolution.y;

        // Pointer distance field
        vec2 p = uv - u_pointer;
        float d = length(p);

        // Time-based autonomous wave
        float t = u_time * 0.5;
        float wave = sin(uv.x * 6.0 + t) * 0.5 + 0.5;
        float arcY = 0.5 + wave * 0.12 + sin(uv.x * 3.0 + t * 0.7) * 0.06;

        // Scroll shifts arc position vertically
        arcY += u_scroll * 0.15;

        // Main arc — sweeping horizon
        float arc = smoothstep(0.025, 0.0, abs(uv.y - arcY));
        arc *= smoothstep(0.0, 0.02, abs(uv.y - arcY));

        // Hot core at pointer proximity
        float core = exp(-d * 12.0);
        core = pow(core, 2.0);

        // Pixel lattice detail (subtle quantized effect)
        float lattice = floor(uv.x * u_pixel) / u_pixel;
        float latticeY = floor(uv.y * u_pixel) / u_pixel;
        float pixelDetail = sin(lattice * 50.0 + t) * sin(latticeY * 50.0 + t) * 0.03;

        // Colors: brand purple foundation, violet/cyan arc, magenta highlights
        vec3 deepPurple = vec3(0.212, 0.0, 0.427);   // #36006D
        vec3 violet = vec3(0.545, 0.533, 0.969);     // #8B5CF6-ish
        vec3 cyan = vec3(0.133, 0.827, 0.933);       // #22D3EE-ish
        vec3 magenta = vec3(0.933, 0.282, 0.933);    // magenta highlight

        vec3 color = deepPurple;

        // Arc glow
        color += arc * vec3(0.4, 0.3, 0.9) * 1.5;
        color += arc * cyan * 0.8;

        // Core glow near pointer
        color += core * vec3(1.0, 0.9, 1.0) * 2.0;
        color += core * magenta * 0.6;

        // Subtle pixel lattice
        color += pixelDetail * vec3(0.3, 0.2, 0.5);

        // Vignette — darker at edges
        float vignette = 1.0 - length(uv - 0.5) * 0.8;
        color *= vignette;

        // Alpha — subtle on near-black canvas
        float alpha = 0.5 + arc * 0.3 + core * 0.4;
        alpha = clamp(alpha, 0.0, 0.85);

        gl_FragColor = vec4(color, alpha);
      }
    `;

    // Compile shaders
    const compile = (type: number, source: string): WebGLShader | null => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compile(gl.VERTEX_SHADER, vsSource);
    const fragmentShader = compile(gl.FRAGMENT_SHADER, fsSource);

    if (!vertexShader || !fragmentShader) {
      if (vertexShader) gl.deleteShader(vertexShader);
      if (fragmentShader) gl.deleteShader(fragmentShader);
      setWebglSupported(false);
      return;
    }

    const program = gl.createProgram();
    if (!program) {
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      setWebglSupported(false);
      return;
    }
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      setWebglSupported(false);
      return;
    }

    gl.useProgram(program);

    const positionLoc = gl.getAttribLocation(program, 'position');
    const resolutionLoc = gl.getUniformLocation(program, 'u_resolution');
    const pointerLoc = gl.getUniformLocation(program, 'u_pointer');
    const timeLoc = gl.getUniformLocation(program, 'u_time');
    const scrollLoc = gl.getUniformLocation(program, 'u_scroll');
    const pixelLoc = gl.getUniformLocation(program, 'u_pixel');

    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    // Pointer state with spring damping
    let pointerX = 0;
    let pointerY = 0;
    let targetX = 0;
    let targetY = 0;
    const damping = 0.12;

    let startTime = performance.now();
    let rafId = 0;
    let paused = false;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetX = (e.clientX - rect.left) / rect.width;
      targetY = (e.clientY - rect.top) / rect.height;
    };

    const handleMouseLeave = () => {
      targetX = 0.5;
      targetY = 0.5;
    };

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const handleVisibilityChange = () => {
      paused = document.hidden;
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      paused = entries[0].intersectionRatio <= 0;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0 });
    observer.observe(canvas);

    const loop = (now: number) => {
      if (paused) {
        rafId = requestAnimationFrame(loop);
        return;
      }

      const elapsed = (now - startTime) / 1000;

      // Spring-damped pointer smoothing
      pointerX += (targetX - pointerX) * damping;
      pointerY += (targetY - pointerY) * damping;

      gl.uniform2f(resolutionLoc, canvas.width, canvas.height);
      gl.uniform2f(pointerLoc, pointerX, pointerY);
      gl.uniform1f(timeLoc, elapsed);
      gl.uniform1f(scrollLoc, scrollY.get());
      gl.uniform1f(pixelLoc, 64.0);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
      if (program) gl.deleteProgram(program);
      if (vertexShader) gl.deleteShader(vertexShader);
      if (fragmentShader) gl.deleteShader(fragmentShader);
      if (buffer) gl.deleteBuffer(buffer);
    };
  }, [reduced, scrollY]);

  useEffect(() => {
    if (!mounted || reduced) return;
    const cleanup = init();
    return () => cleanup?.();
  }, [mounted, reduced, init]);

  return (
    <div className="predictive-arc-wrapper" style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {webglSupported && mounted && !reduced ? (
        <canvas ref={canvasRef} className="predictive-arc" aria-hidden="true" />
      ) : (
        <div className="predictive-arc-fallback" aria-hidden="true" />
      )}
    </div>
  );
}
