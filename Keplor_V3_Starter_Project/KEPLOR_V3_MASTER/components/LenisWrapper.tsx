"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useAnimationFrame } from "framer-motion";
import { useReducedMotion } from "@/lib/motion";

/**
 * LenisWrapper provides smooth scrolling via Lenis while integrating with
 * Framer Motion's animation frame loop so the two don't compete.
 *
 * Accessibility / semantics preserved:
 * - Native scroll events still fire (anchor navigation, keyboard nav, URL hashes)
 * - Reduced motion disables smoothing entirely
 * - Sticky header and mobile touch scrolling continue to work
 */

export default function LenisWrapper({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const reducedMotion = useReducedMotion();

  // Drive Lenis on Framer Motion's animation frame (single rAF loop)
  useAnimationFrame((time, delta) => {
    if (lenisRef.current && !reducedMotion) {
      lenisRef.current.raf(time * 1000);
    }
  });

  useEffect(() => {
    if (reducedMotion) {
      // When reduced motion is preferred, disable Lenis smoothing and rely on
      // native scrolling. Do not instantiate Lenis at all.
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.075,
      smoothWheel: true,
      syncTouch: false, // preserve native touch scrolling on mobile
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reducedMotion]);

  // Scroll to a hash target when the URL hash changes (anchor navigation)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const target = document.querySelector(hash);
      if (target && lenisRef.current) {
        lenisRef.current.scrollTo(target, { offset: -80, duration: 1 });
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return <div className="lenis-wrapper" data-lenis={reducedMotion ? "reduced" : "smooth"}>
    {children}
  </div>;
}
