"use client";

import { useEffect, useState, useCallback, useRef } from "react";

/**
 * Continuous scroll progress hook for the Keplor cinematic particle system.
 * Maps document scroll position to a normalized 0-1 progress value that
 * drives the five-stage particle formation timeline.
 */

export interface ScrollProgressState {
  /** Normalized progress from 0 (top of page) to 1 (bottom of page) */
  progress: number;
  /** Current stage index (0-4) based on progress */
  stage: number;
  /** Progress within current stage (0-1) */
  localProgress: number;
  /** Whether we're at the very top (hero) */
  isAtHero: boolean;
}

/**
 * Section definitions for the five-stage timeline.
 * Each section maps to a stage in the particle formation.
 */
export interface SectionDefinition {
  id: string;
  stage: number;
  /** Optional offset from section top (in pixels) */
  offsetTop?: number;
  /** Optional offset from section bottom (in pixels) */
  offsetBottom?: number;
}

/**
 * Default section mapping for the homepage.
 * Stages:
 * 0 - Portal (Hero)
 * 1 - Neural Helix (Services)
 * 2 - Wave Horizon (Industries)
 * 3 - Gravitational Vortex (Approach)
 * 4 - Orbital Formation (About/Contact)
 */
export const DEFAULT_SECTIONS: SectionDefinition[] = [
  { id: "home", stage: 0 },
  { id: "services", stage: 1 },
  { id: "industries", stage: 2 },
  { id: "approach", stage: 3 },
  { id: "about", stage: 4 },
  { id: "contact", stage: 4 },
];

/**
 * Calculate continuous scroll progress based on actual section positions.
 * This provides smooth interpolation between stages rather than discrete jumps.
 */
export function calculateScrollProgress(
  sections: SectionDefinition[],
  scrollY: number,
  viewportHeight: number,
  documentHeight: number
): ScrollProgressState {
  // Get section positions
  const sectionPositions = sections.map((section) => {
    const element = document.getElementById(section.id);
    if (!element) return null;
    
    const rect = element.getBoundingClientRect();
    const top = rect.top + scrollY + (section.offsetTop || 0);
    const bottom = rect.bottom + scrollY - (section.offsetBottom || 0);
    
    return {
      ...section,
      top,
      bottom,
      height: bottom - top,
    };
  }).filter((s): s is NonNullable<typeof s> => s !== null);

  if (sectionPositions.length === 0) {
    return { progress: 0, stage: 0, localProgress: 0, isAtHero: true };
  }

  // Calculate total scrollable distance (from first section top to last section bottom)
  const firstSection = sectionPositions[0];
  const lastSection = sectionPositions[sectionPositions.length - 1];
  const totalScrollDistance = lastSection.bottom - firstSection.top;
  
  // Normalize scroll position
  const normalizedScroll = Math.max(0, Math.min(1, (scrollY - firstSection.top) / totalScrollDistance));
  
  // Find current stage based on which section we're in
  let currentStage = 0;
  let localProgress = 0;
  let isAtHero = false;

  // Check if we're at the hero (before first section midpoint)
  const heroMidpoint = firstSection.top + firstSection.height * 0.5;
  if (scrollY <= heroMidpoint) {
    isAtHero = true;
    currentStage = 0;
    localProgress = Math.max(0, Math.min(1, (scrollY - firstSection.top) / (firstSection.height * 0.5)));
  } else {
    // Find which section we're currently in
    for (let i = 0; i < sectionPositions.length - 1; i++) {
      const current = sectionPositions[i];
      const next = sectionPositions[i + 1];
      
      // Transition midpoint between sections
      const transitionPoint = (current.bottom + next.top) / 2;
      
      if (scrollY <= transitionPoint) {
        currentStage = current.stage;
        // Local progress within this section's influence
        const sectionStart = i === 0 ? heroMidpoint : (sectionPositions[i - 1].bottom + current.top) / 2;
        const sectionEnd = transitionPoint;
        localProgress = Math.max(0, Math.min(1, (scrollY - sectionStart) / (sectionEnd - sectionStart)));
        break;
      }
      
      // If we're past all transitions, we're in the last section
      if (i === sectionPositions.length - 2) {
        currentStage = next.stage;
        const sectionStart = transitionPoint;
        const sectionEnd = lastSection.bottom;
        localProgress = Math.max(0, Math.min(1, (scrollY - sectionStart) / (sectionEnd - sectionStart)));
      }
    }
  }

  // Clamp stage to valid range
  currentStage = Math.max(0, Math.min(4, currentStage));

  return {
    progress: normalizedScroll,
    stage: currentStage,
    localProgress,
    isAtHero,
  };
}

/**
 * Hook for continuous scroll progress that updates on every scroll frame.
 * Uses requestAnimationFrame for smooth updates.
 */
export function useContinuousScrollProgress(
  sections: SectionDefinition[] = DEFAULT_SECTIONS
): ScrollProgressState {
  const [state, setState] = useState<ScrollProgressState>({
    progress: 0,
    stage: 0,
    localProgress: 0,
    isAtHero: true,
  });

  const rafRef = useRef<number | null>(null);
  const sectionsRef = useRef(sections);
  sectionsRef.current = sections;

  const updateProgress = useCallback(() => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    const newState = calculateScrollProgress(
      sectionsRef.current,
      scrollY,
      viewportHeight,
      documentHeight
    );
    
    setState(newState);
    rafRef.current = requestAnimationFrame(updateProgress);
  }, []);

  useEffect(() => {
    // Initial calculation
    updateProgress();
    
    // Start RAF loop for continuous updates
    rafRef.current = requestAnimationFrame(updateProgress);
    
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateProgress]);

  return state;
}

