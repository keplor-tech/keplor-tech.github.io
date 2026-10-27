"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion as useRm } from "@/lib/motion";
/**
 * StaggerSection reveals its children with consistent staggered timing when the
 * section enters the viewport.
 *
 * Accessibility / fallback:
 * - Content remains visible when JS/animation fails (fallback visible state).
 * - Respects prefers-reduced-motion.
 * - Only animates once on first intersection.
 */

interface StaggerSectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  delayChildren?: number;
  staggerChildren?: number;
}

export function StaggerSection({
  children,
  className = "",
  threshold = 0.12,
  rootMargin = "0px 0px -10% 0px",
  delayChildren = 0.08,
  staggerChildren = 0.12,
}: StaggerSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const reducedMotion = useRm();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, reducedMotion]);

  const childArray = React.Children.toArray(children);

  return (
    <motion.div
      ref={ref}
      className={`stagger-section ${className} ${visible ? "visible" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: reducedMotion ? 0 : 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {childArray.map((child, i) => {
        const key = React.isValidElement(child) ? child.key : null;
        return (
          <motion.div
            key={key ?? i}
            className="stagger-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: visible || reducedMotion ? 1 : 0,
              y: (visible || reducedMotion) ? 0 : 20,
            }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: reducedMotion ? 0 : delayChildren + i * staggerChildren,
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
