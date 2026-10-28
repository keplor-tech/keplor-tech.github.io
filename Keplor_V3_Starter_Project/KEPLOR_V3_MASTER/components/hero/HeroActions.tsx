"use client";

import Link from "next/link";
import { motion, useTransform, useMotionValue, type MotionValue } from "framer-motion";
import { useReducedMotion } from "@/lib/motion";

export function HeroActions({ className = "", scrollYProgress, ...props }: { className?: string; scrollYProgress?: MotionValue<number>; [key: string]: unknown }) {
  const reducedMotion = useReducedMotion();
  const defaultProgress = useMotionValue(0);
  const progress = scrollYProgress ?? defaultProgress;

  const actionsY = useTransform(
    progress,
    [0, 0.3, 0.7, 1.0],
    [0, -20, -60, -100]
  );
  const actionsOpacity = useTransform(
    progress,
    [0, 0.3, 0.7, 1.0],
    [1, 0.9, 0.3, 0]
  );
  const item1Y = useTransform(progress, [0, 0.3, 0.7, 1.0], [0, -10, -30, -50]);
  const item1Opacity = useTransform(progress, [0, 0.3, 0.7, 1.0], [1, 0.95, 0.4, 0]);
  const item2Y = useTransform(progress, [0, 0.3, 0.7, 1.0], [0, -10, -30, -50]);
  const item2Opacity = useTransform(progress, [0, 0.3, 0.7, 1.0], [1, 0.95, 0.4, 0]);

  return (
    <motion.div
      className={`hero-actions ${className}`}
      style={{
        y: reducedMotion ? 0 : actionsY,
        opacity: reducedMotion ? 1 : actionsOpacity,
      }}
      {...props}
    >
      <motion.div
        className="hero-action-item"
        style={{
          y: reducedMotion ? 0 : item1Y,
          opacity: reducedMotion ? 1 : item1Opacity,
        }}
      >
        <Link className="button lg" href="/contact/">
          Discuss a project <span aria-hidden="true">→</span>
        </Link>
      </motion.div>
      <motion.div
        className="hero-action-item"
        style={{
          y: reducedMotion ? 0 : item2Y,
          opacity: reducedMotion ? 1 : item2Opacity,
        }}
      >
        <Link className="button secondary lg" href="/services/">
          Explore our services <span aria-hidden="true">→</span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
