'use client';

import { PageHero } from '@/components/keplor/PageBlocks';
import { Reveal } from '@/components/keplor/Reveal';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Keplor"
        title="Technology with purpose. <span class='accent'>Built for what's next.</span>"
        body="Keplor delivers AI/ML and software solutions designed to help businesses navigate complexity, work more effectively, and build for the future."
      />
      <section className="section">
        <div className="belief">
          <Reveal>
            <div>
              <div className="section-label">Who we are</div>
              <p className="belief-copy">Keplor is an independent AI/ML and software-solutions company. We combine technical thinking with a practical understanding of business needs — turning ideas into intelligent, scalable, and data-driven solutions.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <p className="belief-copy">We work across the full lifecycle: understanding the problem, designing the right approach, building the system, and improving it as needs evolve.</p>
            </div>
          </Reveal>
        </div>
        <div className="mission-vision">
          <Reveal>
            <div>
              <h3>Our mission</h3>
              <p>To empower businesses across sectors through AI/ML technologies and custom software solutions that drive innovation, efficiency, and growth.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <h3>Our vision</h3>
              <p>To deliver AI/ML-driven software solutions that help businesses navigate the digital future with intelligent, scalable, and data-driven strategies.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
