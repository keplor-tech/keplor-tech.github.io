'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Ambient() {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { scrollYProgress } = useScroll();

  const cyanY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const violetY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const blueY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const magentaY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const cyanScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const violetScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const blueScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const magentaScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const cyanOpacity = useTransform(scrollYProgress, [0, 1], [0.22, 0.14]);
  const violetOpacity = useTransform(scrollYProgress, [0, 1], [0.18, 0.10]);
  const blueOpacity = useTransform(scrollYProgress, [0, 1], [0.14, 0.08]);
  const magentaOpacity = useTransform(scrollYProgress, [0, 1], [0.12, 0.06]);

  return (
    <div className="ambient" aria-hidden="true">
      <motion.div
        className="ambient__glow ambient__glow--cyan"
        style={mounted && !reduced ? { y: cyanY, scale: cyanScale, opacity: cyanOpacity } : undefined}
      />
      <motion.div
        className="ambient__glow ambient__glow--violet"
        style={mounted && !reduced ? { y: violetY, scale: violetScale, opacity: violetOpacity } : undefined}
      />
      <motion.div
        className="ambient__glow ambient__glow--blue"
        style={mounted && !reduced ? { y: blueY, scale: blueScale, opacity: blueOpacity } : undefined}
      />
      <motion.div
        className="ambient__glow ambient__glow--magenta"
        style={mounted && !reduced ? { y: magentaY, scale: magentaScale, opacity: magentaOpacity } : undefined}
      />
    </div>
  );
}
