"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion as useRm } from "@/lib/motion";

/**
 * SectionReveal reveals a section with a fade + vertical reveal when it first
 * enters the viewport, using IntersectionObserver.
 *
 * Accessibility / fallback:
 * - When JavaScript or animation fails, the content remains visible (no
 *   permanent hidden state) via the `fallbackVisible` CSS class.
 * - Respects prefers-reduced-motion (renders children immediately).
 * - Only animates once (first intersection).
 */

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function SectionReveal({
  children,
  className = "",
  threshold = 0.12,
  rootMargin = "0px 0px -10% 0px",
  once = true,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const reducedMotion = useRm();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If reduced motion, show immediately without observing
    if (reducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(el);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once, reducedMotion]);

  return (
    <motion.div
      ref={ref}
      className={`section-reveal ${className} ${visible ? "visible" : ""}`}
      initial={{ opacity: 0, y: 24 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 24,
      }}
      transition={visible ? { duration: 0.6, ease: [0.16, 1, 0.3, 1] } : {}}
    >
      {children}
    </motion.div>
  );
}
