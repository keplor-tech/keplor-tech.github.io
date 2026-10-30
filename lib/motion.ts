"use client";

import { useEffect, useState } from "react";
import type { Transition, Variants } from "framer-motion";

/**
 * Central motion vocabulary for Keplor V3.
 *
 * All durations/easings mirror the CSS custom properties defined in
 * app/globals.css so the motion system stays in sync with the design tokens.
 * Framer Motion cannot read CSS variables at definition time, so we mirror the
 * token values here. When prefers-reduced-motion is active, durations collapse
 * to near-zero via the useReducedMotion hook.
 */

// ---------------------------------------------------------------------------
// Duration / easing values (mirror app/globals.css tokens)
// ---------------------------------------------------------------------------

export const DURATION = {
  fast: 0.15,
  base: 0.25,
  slow: 0.4,
  slower: 0.6,
} as const;

export const EASE = {
  out: [0.16, 1, 0.3, 1],
  spring: [0.34, 1.56, 0.64, 1],
  inOut: [0.4, 0, 0.2, 1],
} as const;

// ---------------------------------------------------------------------------
// Transition objects
// ---------------------------------------------------------------------------

export const transition = {
  fade: { duration: DURATION.base, ease: EASE.out },
  fadeUp: { duration: DURATION.slow, ease: EASE.out },
  fadeDown: { duration: DURATION.slow, ease: EASE.out },
  stagger: { duration: DURATION.base, ease: EASE.out },
  spring: { type: "spring", stiffness: 300, damping: 30 },
} as const;

export const spring = {
  type: "spring",
  stiffness: 400,
  damping: 28,
  mass: 0.8,
} as const;

// ---------------------------------------------------------------------------
// Variants
// ---------------------------------------------------------------------------

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transition.fade },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: transition.fadeUp },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: transition.fadeDown },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.12,
      ...transition.stagger,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE.out },
  },
};

// ---------------------------------------------------------------------------
// useReducedMotion hook
// ---------------------------------------------------------------------------

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(media.matches);
    const handler = () => setReduced(media.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return reduced;
}

// ---------------------------------------------------------------------------
// motionConfig for MotionConfig provider
// ---------------------------------------------------------------------------

export function motionConfig(reducedMotion: boolean) {
  return {
    transition: {
      duration: reducedMotion ? 0.001 : DURATION.base,
      ease: EASE.out,
    },
    layoutTransition: reducedMotion
      ? { duration: 0.001 }
      : { duration: DURATION.base, ease: EASE.inOut },
  };
}
