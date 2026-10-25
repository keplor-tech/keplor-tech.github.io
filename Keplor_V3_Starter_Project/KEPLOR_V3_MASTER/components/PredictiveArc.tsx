 "use client";
import { useEffect, useRef } from "react";

export default function PredictiveArc() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0, width = 0, height = 0, dpr = 1, start = performance.now(), visible = true;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width); height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const draw = (now: number) => {
      if (!visible) return;
      const t = reduceMotion.matches ? 0 : (now - start) * 0.00025;
      ctx.clearRect(0, 0, width, height);
      const cx = width * .54, cy = height * .56, rx = width * .47, ry = height * .47;
      const step = width < 520 ? 10 : 8;
      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const nx = (x - cx) / rx, ny = (y - cy) / ry;
          const radius = Math.sqrt(nx * nx + ny * ny);
          const angle = Math.atan2(ny, nx);
          const arc = Math.abs(radius - .79);
          const opening = ny > .45 && nx > -.45 && nx < .45;
          if (arc > .13 || opening) continue;
          const wave = Math.sin(x * .012 + y * .009 + t * 3) * .5 + Math.cos(y * .018 - t * 2) * .5;
          const concentration = Math.max(0, 1 - arc / .13);
          const angular = .52 + .48 * Math.sin(angle * 2.4 + t * 2);
          const alpha = Math.max(0, concentration * (.12 + .48 * (wave + 1) / 2) * angular);
          if (alpha < .035) continue;
          const size = 1.2 + alpha * (width < 520 ? 2.3 : 3.1);
          const hue = 257 + Math.sin(x * .004 + t) * 12;
          ctx.fillStyle = `hsla(${hue}, 88%, ${60 + alpha * 23}%, ${alpha})`;
          ctx.fillRect(x, y, size, size);
        }
      }
      // Soft light around the arc, kept transparent so the site background remains continuous.
      const glow = ctx.createRadialGradient(cx, cy * .82, 5, cx, cy * .82, Math.max(width, height) * .5);
      glow.addColorStop(0, "rgba(84, 35, 155, 0.09)");
      glow.addColorStop(1, "rgba(84, 35, 155, 0)");
      ctx.fillStyle = glow; ctx.fillRect(0, 0, width, height);
      if (!reduceMotion.matches) raf = requestAnimationFrame(draw);
    };
    const observer = new IntersectionObserver(entries => {
      visible = entries[0]?.isIntersecting ?? true;
      if (visible) { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); }
      else cancelAnimationFrame(raf);
    }, { threshold: 0.01 });
    observer.observe(canvas);
    const onMotionChange = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); };
    reduceMotion.addEventListener?.("change", onMotionChange);
    resize(); raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf); observer.disconnect(); window.removeEventListener("resize", resize);
      reduceMotion.removeEventListener?.("change", onMotionChange);
    };
  }, []);
  return <canvas className="arc-canvas" ref={canvasRef} aria-hidden="true" />;
}
