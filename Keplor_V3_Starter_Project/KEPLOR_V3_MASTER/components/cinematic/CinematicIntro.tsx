"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useReducedMotion } from "@/lib/motion";
import { useCinematicTimeline } from "@/lib/cinematic/useCinematicTimeline";
import { MasterParticleScene } from "@/components/cinematic/particle/MasterParticleScene";
import { StaticPortal } from "@/components/cinematic/fallback/StaticPortal";
import { selectQualityTier, type QualityTier } from "@/lib/cinematic/quality-tiers";

const STAGE_LABELS = [
  { id: 0, label: "01 / SIGNAL", hint: "Keplor energy portal" },
  { id: 1, label: "02 / SYSTEMS", hint: "Neural helix forming" },
  { id: 2, label: "03 / SCALE", hint: "Horizon wave terrain" },
  { id: 3, label: "04 / MOMENTUM", hint: "Gravitational vortex" },
  { id: 4, label: "05 / CONTACT", hint: "Orbital formation" },
];

interface CinematicIntroProps {
  tier?: QualityTier;
}

export function CinematicIntro({ tier = "high" }: CinematicIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [webglFailed, setWebglFailed] = useState(false);
  const [tierResolved, setTierResolved] = useState<QualityTier>("static");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
  const [localProgress, setLocalProgress] = useState(0);

  const handleWebGLError = useCallback(() => {
    setWebglFailed(true);
  }, []);

  const { isReady } = useCinematicTimeline({
    containerRef,
    onProgressChange: (p) => {
      setScrollProgress(p);
    },
    onStageChange: (s, lp) => {
      setCurrentStage(s);
      setLocalProgress(lp);
    },
  });

  // Resolve quality tier on mount
  useEffect(() => {
    if (reducedMotion) {
      setTierResolved("static");
      return;
    }
    // Check WebGL availability
    const canvas = document.createElement("canvas");
    const webgl = !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
    const lowMemory =
      typeof window !== "undefined" &&
      (navigator as any).deviceMemory &&
      (navigator as any).deviceMemory < 4;
    setTierResolved(selectQualityTier(false, webgl, lowMemory));
  }, [reducedMotion]);

  const useWebGL = !reducedMotion && !webglFailed && tierResolved !== "static";

  return (
    <section
      ref={containerRef}
      className="cinematic-intro"
      aria-label="Cinematic introduction"
      data-stage={currentStage}
      data-progress={scrollProgress.toFixed(2)}
    >
      {/* Reduced motion / WebGL fallback: static portal in natural flow */}
      {(!useWebGL || !isReady) && (
        <div className="cinematic-fallback">
          <StaticPortal className="fallback-canvas" />
        </div>
      )}

      {/* WebGL scene */}
      {useWebGL && isReady && (
        <div className="cinematic-scene">
          <MasterParticleScene
            tier={tierResolved}
            scrollProgress={scrollProgress}
            stage={currentStage}
            localProgress={localProgress}
            onWebGLError={handleWebGLError}
          />
        </div>
      )}

      {/* Stage copy and CTA layer */}
      <div className="cinematic-copy">
        {STAGE_LABELS.map((s) => (
          <div
            key={s.id}
            className={`stage-label ${currentStage === s.id ? "active" : ""}`}
            data-stage={s.id}
            aria-hidden={currentStage !== s.id}
          >
            <span className="stage-number">{s.label}</span>
            <span className="stage-hint">{s.hint}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
