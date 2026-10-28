"use client";

import { motion, useTransform, useMotionValue, type MotionValue } from "framer-motion";
import { useReducedMotion } from "@/lib/motion";

export function HeroLede({ children, className = "", scrollYProgress, ...props }: { children: React.ReactNode; className?: string; scrollYProgress?: MotionValue<number>; [key: string]: unknown }) {
  const reducedMotion = useReducedMotion();
  const defaultProgress = useMotionValue(0);
  const progress = scrollYProgress ?? defaultProgress;
  const ledeY = useTransform(
    progress,
    [0, 0.3, 0.7, 1.0],
    [0, -20, -50, -80]
  );
  const ledeOpacity = useTransform(
    progress,
    [0, 0.3, 0.7, 1.0],
    [1, 0.9, 0.4, 0]
  );

  return (
    <motion.p
      className={`hero-lede ${className}`}
      style={{
        y: reducedMotion ? 0 : ledeY,
        opacity: reducedMotion ? 1 : ledeOpacity,
      }}
      {...props}
    >
      {children}
    </motion.p>
  );
}
