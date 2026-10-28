"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, type MotionValue } from "framer-motion";
import { useReducedMotion } from "@/lib/motion";
import PredictiveArc from "@/components/PredictiveArc";
import {
  ClosingCTA,
  ServiceList,
  PositioningSection,
  ServicePillarsSection,
  CapabilitiesSection,
  ProcessSection,
  IndustriesSection,
  EngagementSection,
  FieldNotesSection
} from "@/components/Sections";
import {
  HeroEyebrow,
  HeroHeadline,
  HeroLede,
  HeroActions
} from "@/components/hero";
import { SectionReveal, StaggerSection } from "@/components/reveal";
import { PageProgress } from "@/components/scroll";

export default function HomePage() {
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const ambientRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Measure hero section geometry once on mount to establish scroll target
  const heroGeometry = useRef<{ top: number; height: number } | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    heroGeometry.current = {
      top: rect.top + window.pageYOffset,
      height: hero.offsetHeight,
    };
  }, []);

  const isBrowser = typeof window !== "undefined";
  const heroTop = useMotionValue(heroGeometry.current?.top ?? 0);
  const heroRange = useMotionValue(
    heroGeometry.current?.height ?? (isBrowser ? window.innerHeight : 0)
  );

  // Hero scroll progress: 0.0 at top of hero, 1.0 at bottom of hero
  const heroProgress = useTransform(
    scrollY,
    (scroll: number) => {
      const top = heroGeometry.current?.top ?? 0;
      const range = heroGeometry.current?.height ?? (isBrowser ? window.innerHeight : 0);
      return range ? (scroll - top) / range : 0;
    }
  ) as MotionValue<number>;

  // Ambient lighting: shift from violet/cyan hero atmosphere toward indigo Section 2 atmosphere
  const ambientViolet = useTransform(
    heroProgress,
    [0, 0.3, 0.7, 1.0],
    ["rgba(54, 0, 109, 0.18)", "rgba(54, 0, 109, 0.12)", "rgba(27, 20, 53, 0.18)", "rgba(27, 20, 53, 0.30)"]
  );
  const ambientIndigo = useTransform(
    heroProgress,
    [0, 0.3, 0.7, 1.0],
    ["rgba(27, 20, 53, 0.15)", "rgba(27, 20, 53, 0.18)", "rgba(27, 20, 53, 0.22)", "rgba(27, 20, 53, 0.35)"]
  );
  const ambientCyan = useTransform(
    heroProgress,
    [0, 0.3, 0.7, 1.0],
    ["rgba(54, 0, 109, 0.08)", "rgba(54, 0, 109, 0.05)", "rgba(27, 20, 53, 0.10)", "rgba(27, 20, 53, 0.15)"]
  );

  // Apply ambient lighting CSS custom properties via MotionValue subscription
  // (motion.div style prop doesn't support CSS variables directly)
  useEffect(() => {
    const el = ambientRef.current;
    if (!el) return undefined;
    const unsubViolet = ambientViolet.on("change", (v: string) => {
      el.style.setProperty("--ambient-light-violet", v);
    });
    const unsubIndigo = ambientIndigo.on("change", (v: string) => {
      el.style.setProperty("--ambient-light-indigo", v);
    });
    const unsubCyan = ambientCyan.on("change", (v: string) => {
      el.style.setProperty("--ambient-light-cyan", v);
    });
    return () => {
      unsubViolet();
      unsubIndigo();
      unsubCyan();
    };
  }, [ambientViolet, ambientIndigo, ambientCyan]);

  const sectionOpacity = useTransform(heroProgress, [0, 0.3, 0.7, 1.0], [0, 0, 1, 1]);
  const sectionY = useTransform(heroProgress, [0, 0.3, 0.7, 1.0], [24, 24, 0, 0]);

  return (
    <>
      <PageProgress />
      <section className="hero" ref={heroRef} aria-labelledby="hero-heading">
        <motion.div
          ref={ambientRef}
          className="ambient-light-overlay"
        />
        <div className="hero-visual">
          <PredictiveArc brightnessProgress={heroProgress} />
        </div>
        <div className="hero-copy">
          <HeroEyebrow scrollYProgress={heroProgress}>
            AI · Software · Research
          </HeroEyebrow>
          <HeroHeadline id="hero-heading" scrollYProgress={heroProgress}>
            Intelligent<br />
            systems.<br />
            <em>Thoughtfully</em> built.
          </HeroHeadline>
          <HeroLede className="hero-lede" scrollYProgress={heroProgress}>
            We bring AI, machine learning, and custom software together to help turn complex challenges into useful, scalable digital systems.
          </HeroLede>
          <HeroActions scrollYProgress={heroProgress} />
          <p className="hero-note">A considered approach to intelligent technology</p>
        </div>
      </section>
      {reducedMotion ? (
        <PositioningSection />
      ) : (
        <motion.section
          className="section"
          aria-labelledby="positioning-heading"
          style={{
            opacity: sectionOpacity,
            y: sectionY,
          }}
        >
          <PositioningSection />
        </motion.section>
      )}
      <SectionReveal className="reveal">
        <ServicePillarsSection />
      </SectionReveal>
      <SectionReveal className="reveal">
        <CapabilitiesSection />
      </SectionReveal>
      <SectionReveal className="reveal">
        <ProcessSection />
      </SectionReveal>
      <SectionReveal className="reveal">
        <IndustriesSection />
      </SectionReveal>
      <SectionReveal className="reveal">
        <EngagementSection />
      </SectionReveal>
      <SectionReveal className="reveal">
        <FieldNotesSection />
      </SectionReveal>
      <SectionReveal className="reveal">
        <ClosingCTA />
      </SectionReveal>
    </>
  );
}
