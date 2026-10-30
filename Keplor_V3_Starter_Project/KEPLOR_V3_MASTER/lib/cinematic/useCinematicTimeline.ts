"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

interface UseCinematicTimelineProps {
  containerRef: React.RefObject<HTMLDivElement>;
  onProgressChange?: (progress: number) => void;
  onStageChange?: (stage: number, localProgress: number) => void;
}

export function useCinematicTimeline({
  containerRef,
  onProgressChange,
  onStageChange,
}: UseCinematicTimelineProps) {
  const [isReady, setIsReady] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);
  const tickerRef = useRef<(() => void) | null>(null);

  const progressRef = useRef(0);
  const stageRef = useRef(0);
  const localProgressRef = useRef(0);
  const reducedMotion = useReducedMotion();

  const notify = useCallback(() => {
    onProgressChange?.(progressRef.current);
    onStageChange?.(stageRef.current, localProgressRef.current);
  }, [onProgressChange, onStageChange]);

  useEffect(() => {
    if (reducedMotion) {
      setIsReady(true);
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // Create Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.075,
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
    lenisRef.current = lenis;

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Kill any existing ScrollTriggers on unmount/re-run
    const cleanup = () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf(container);
      if (tickerRef.current !== null) {
        gsap.ticker.remove(tickerRef.current);
        tickerRef.current = null;
      }
      lenis.destroy();
      lenisRef.current = null;
    };

    // The cinematic scene is 500vh tall, pinned in the viewport
    const sceneHeight = "500vh";

    // Create the master timeline: progress 0 -> 1 across the pinned scroll range
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `+=${sceneHeight}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress; // 0 -> 1
          progressRef.current = progress;

          // Compute stage (0-4) and local progress within stage
          const stage = Math.min(Math.floor(progress * 5), 4);
          const localProgress = (progress * 5) % 1;

          stageRef.current = stage;
          localProgressRef.current = localProgress;

          notify();
        },
        onRefresh: () => {
          // Recompute on resize
          const progress = ScrollTrigger.getAll().find((st) => st.trigger === container)?.progress ?? 0;
          progressRef.current = progress;
          notify();
        },
      },
    });

    // No-op timeline — progress is driven entirely by ScrollTrigger's scrub
    timeline.to({}, { duration: 0 });

    // Sync Lenis with ScrollTrigger: Lenis drives scroll, ScrollTrigger reads it
    function lenisScrollHandler() {
      ScrollTrigger.update();
    }
    lenis.on("scroll", lenisScrollHandler);

    // Drive Lenis from GSAP ticker (single frame-scheduling model)
    function gsapTick() {
      lenis.raf(performance.now());
    }
    gsap.ticker.add(gsapTick);
    tickerRef.current = gsapTick;

    setIsReady(true);

    return () => {
      lenis.off("scroll", lenisScrollHandler);
      cleanup();
    };
  }, [containerRef, notify, reducedMotion]);

  return { isReady, progress: progressRef.current, stage: stageRef.current, localProgress: localProgressRef.current };
}
