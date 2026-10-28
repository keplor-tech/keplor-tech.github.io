"use client";

import { motion, useTransform, useMotionValue, type MotionValue } from "framer-motion";
import { useReducedMotion } from "@/lib/motion";

export function HeroHeadline({ children, className = "", scrollYProgress, ...props }: { children: React.ReactNode; className?: string; scrollYProgress?: MotionValue<number>; [key: string]: unknown }) {
  const reducedMotion = useReducedMotion();
  const defaultProgress = useMotionValue(0);
  const progress = scrollYProgress ?? defaultProgress;
  const headlineY = useTransform(
    progress,
    [0, 0.3, 0.7, 1.0],
    [0, -60, -180, -280]
  );
  const headlineOpacity = useTransform(
    progress,
    [0, 0.3, 0.7, 1.0],
    [1, 0.85, 0.15, 0]
  );

  return (
    <motion.h1
      className={`hero-headline ${className}`}
      style={{
        y: reducedMotion ? 0 : headlineY,
        opacity: reducedMotion ? 1 : headlineOpacity,
      }}
      {...props}
    >
      {children}
    </motion.h1>
  );
}
