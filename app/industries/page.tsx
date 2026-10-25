'use client';

import { PageHero, industries } from '@/components/keplor/PageBlocks';
import { Reveal } from '@/components/keplor/Reveal';

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Context changes the <span class='accent'>system.</span>"
        body="Keplor explores practical applications across sectors, with the constraints, evidence, and responsibilities of each domain kept in view."
      />
      <section className="section">
        <div className="industry-list">
          {industries.map(([name, note], index) => (
            <Reveal key={name} delay={index * 0.04}>
              <a className="industry" href="/contact" data-cursor="OPEN">
                <span>{name}<span className="note">{note}</span></span>
                <span>↗</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
