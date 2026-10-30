export type QualityTier = "high" | "medium" | "low" | "static";

export interface QualityTierConfig {
  particles: number;
  dpr: number;
  bloom: boolean;
  depth: boolean;
}

export const QUALITY_TIERS: Record<QualityTier, QualityTierConfig> = {
  high: { particles: 20000, dpr: 2, bloom: true, depth: true },
  medium: { particles: 8000, dpr: 1.5, bloom: false, depth: true },
  low: { particles: 3000, dpr: 1.25, bloom: false, depth: false },
  static: { particles: 0, dpr: 1, bloom: false, depth: false },
};

export function selectQualityTier(
  preferReducedMotion: boolean,
  webglAvailable: boolean,
  lowMemory: boolean,
): QualityTier {
  if (preferReducedMotion || !webglAvailable) return "static";
  if (lowMemory) return "low";
  if (typeof window !== "undefined" && window.innerWidth < 768) return "medium";
  return "high";
}

export function clampDPR(dpr: number, max: number): number {
  return Math.min(Math.max(dpr, 1), max);
}
