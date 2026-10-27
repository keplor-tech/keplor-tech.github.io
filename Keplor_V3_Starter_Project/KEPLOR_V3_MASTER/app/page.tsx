"use client";

import Link from "next/link";
import { useEffect } from "react";
import PredictiveArc from "@/components/PredictiveArc";
import {
  Eyebrow,
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
  // Trigger reveal animations on mount (fallback for non-motion sections)
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal, .stagger-children');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return <>
    <PageProgress />
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-visual"><PredictiveArc /></div>
      <div className="hero-copy">
        <HeroEyebrow>AI · Software · Research</HeroEyebrow>
        <HeroHeadline id="hero-heading">
          Intelligent<br />
          systems.<br />
          <em>Thoughtfully</em> built.
        </HeroHeadline>
        <HeroLede className="hero-lede">
          We bring AI, machine learning, and custom software together to help turn complex challenges into useful, scalable digital systems.
        </HeroLede>
        <HeroActions />
        <p className="hero-note">A considered approach to intelligent technology</p>
      </div>
    </section>
    <SectionReveal className="reveal">
      <PositioningSection />
    </SectionReveal>
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
  </>;
}
