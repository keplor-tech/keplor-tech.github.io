'use client';

import { PageHero } from '@/components/keplor/PageBlocks';
import { Reveal } from '@/components/keplor/Reveal';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Keplor"
        title="Technology with purpose. <span class='accent'>Built for what's next.</span>"
        body="Keplor helps businesses use AI/ML and custom software to work more effectively, make better decisions, and create room for innovation and growth."
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
              <p>To help businesses use AI/ML and custom software to work more effectively, make better decisions, and create room for innovation and growth.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <h3>Our vision</h3>
              <p>A future where organizations can use intelligent, scalable, data-informed technology to adapt and make progress.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
