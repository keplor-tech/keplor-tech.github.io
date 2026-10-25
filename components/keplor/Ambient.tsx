'use client';

import { motion, useReducedMotion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

// Shared pointer state across the window
let pointerX = 0;
let pointerY = 0;
const pointerListeners = new Set<(nx: number, ny: number) => void>();

export function useSharedPointer() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const update = (nx: number, ny: number) => {
      x.set(nx);
      y.set(ny);
    };
    pointerListeners.add(update);

    const handleMove = (e: MouseEvent) => {
      pointerX = e.clientX / window.innerWidth;
      pointerY = e.clientY / window.innerHeight;
      pointerListeners.forEach((fn) => fn(pointerX, pointerY));
    };

    const handleLeave = () => {
      pointerX = 0.5;
      pointerY = 0.5;
      pointerListeners.forEach((fn) => fn(pointerX, pointerY));
    };

    window.addEventListener('pointermove', handleMove, { passive: true });
    window.addEventListener('mouseleave', handleLeave);

    return () => {
      pointerListeners.delete(update);
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('mouseleave', handleLeave);
    };
  }, [x, y]);

  return { x, y };
}

export function Ambient() {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { scrollYProgress } = useScroll();
  const { x: pointerX, y: pointerY } = useSharedPointer();

  // Pointer-driven spring transforms (different damping per layer for depth separation)
  const pointerXSpring = useSpring(pointerX, { stiffness: 120, damping: 22 });
  const pointerYSpring = useSpring(pointerY, { stiffness: 120, damping: 22 });

  // Scroll-driven transforms
  const scrollCyanY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const scrollVioletY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const scrollBlueY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const scrollMagentaY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const scrollCyanScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const scrollVioletScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const scrollBlueScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const scrollMagentaScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const scrollCyanOpacity = useTransform(scrollYProgress, [0, 1], [0.22, 0.14]);
  const scrollVioletOpacity = useTransform(scrollYProgress, [0, 1], [0.18, 0.10]);
  const scrollBlueOpacity = useTransform(scrollYProgress, [0, 1], [0.14, 0.08]);
  const scrollMagentaOpacity = useTransform(scrollYProgress, [0, 1], [0.12, 0.06]);

  // Pointer-driven offsets (applied as x for horizontal pointer separation)
  const pointerCyanX = useTransform(pointerXSpring, [0, 1], [-15, 15]);
  const pointerVioletX = useTransform(pointerXSpring, [0, 1], [-25, 25]);
  const pointerBlueX = useTransform(pointerXSpring, [0, 1], [-10, 10]);
  const pointerMagentaX = useTransform(pointerXSpring, [0, 1], [-30, 30]);

  const pointerCyanY = useTransform(pointerYSpring, [0, 1], [-15, 15]);
  const pointerVioletY = useTransform(pointerYSpring, [0, 1], [-20, 20]);
  const pointerBlueY = useTransform(pointerYSpring, [0, 1], [-10, 10]);
  const pointerMagentaY = useTransform(pointerYSpring, [0, 1], [-25, 25]);

  return (
    <div className="ambient" aria-hidden="true">
      <motion.div
        className="ambient__glow ambient__glow--cyan"
        style={mounted && !reduced ? { x: pointerCyanX, y: scrollCyanY, scale: scrollCyanScale, opacity: scrollCyanOpacity } : undefined}
      />
      <motion.div
        className="ambient__glow ambient__glow--violet"
        style={mounted && !reduced ? { x: pointerVioletX, y: scrollVioletY, scale: scrollVioletScale, opacity: scrollVioletOpacity } : undefined}
      />
      <motion.div
        className="ambient__glow ambient__glow--blue"
        style={mounted && !reduced ? { x: pointerBlueX, y: scrollBlueY, scale: scrollBlueScale, opacity: scrollBlueOpacity } : undefined}
      />
      <motion.div
        className="ambient__glow ambient__glow--magenta"
        style={mounted && !reduced ? { x: pointerMagentaX, y: scrollMagentaY, scale: scrollMagentaScale, opacity: scrollMagentaOpacity } : undefined}
      />
    </div>
  );
}
