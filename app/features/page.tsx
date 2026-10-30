'use client';

import Link from 'next/link';
import { PageHero, services } from '@/components/keplor/PageBlocks';
import { Reveal } from '@/components/keplor/Reveal';

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Service capabilities, not a product <span class='accent'>checklist.</span>"
        body="Keplor is a solutions company. The items below describe what we can discuss, design, and deliver with you — not self-serve software products available for purchase today."
      />
      <section className="section">
        <div className="section-top">
          <Reveal>
            <div>
              <div className="section-label">Core services</div>
              <h2 className="section-title">Four areas, one <span className="accent">conversation.</span></h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="section-intro">These are the service pillars Keplor is built on. Each is explored in depth on the services page.</p>
          </Reveal>
        </div>
        <div className="services">
          {services.map(([no, title, text], index) => (
            <Reveal key={title} delay={index * 0.06}>
              <article className="service" data-cursor="EXPLORE">
                <div className="service-no">{no}</div>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link className="arrow" href="/services" aria-label={`Learn about ${title}`}>↗</Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
