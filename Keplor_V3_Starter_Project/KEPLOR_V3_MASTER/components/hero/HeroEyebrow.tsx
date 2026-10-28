"use client";

import { motion, useTransform, useMotionValue, type MotionValue } from "framer-motion";
import { useReducedMotion } from "@/lib/motion";

export function HeroEyebrow({ children, className = "", scrollYProgress, ...props }: { children: React.ReactNode; className?: string; scrollYProgress?: MotionValue<number>; [key: string]: unknown }) {
  const reducedMotion = useReducedMotion();
  const defaultProgress = useMotionValue(0);
  const progress = scrollYProgress ?? defaultProgress;
  const eyebrowY = useTransform(
    progress,
    [0, 0.3, 0.7, 1.0],
    [0, -20, -40, -60]
  );
  const eyebrowOpacity = useTransform(
    progress,
    [0, 0.3, 0.7, 1.0],
    [1, 0.9, 0.5, 0]
  );

  return (
    <motion.div
      className={`eyebrow ${className}`}
      style={{
        y: reducedMotion ? 0 : eyebrowY,
        opacity: reducedMotion ? 1 : eyebrowOpacity,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
