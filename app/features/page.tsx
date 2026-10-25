'use client';

import Link from 'next/link';
import { PageHero, services } from '@/components/keplor/PageBlocks';
import { Reveal } from '@/components/keplor/Reveal';

const capabilities = [
  ['Capability', 'What it means in practice'],
  ['Intelligent workflows', 'Automation and decision support designed around how your teams actually operate.'],
  ['Data-informed systems', 'Software that turns the data you already have into useful, trustworthy output.'],
  ['Scalable architecture', 'Systems designed to grow with your needs rather than against them.'],
  ['Practical delivery', 'Discovery, design, development, integration, and iteration — in that order.'],
];

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
              <div className="section-label">How we work</div>
              <h2 className="section-title">Capabilities shaped around <span className="accent">your</span> context.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="section-intro">Every engagement starts with the problem, the available data, and the people involved — then the right mix of AI/ML, software, cloud, and analytics follows.</p>
          </Reveal>
        </div>
        <div className="industry-list">
          {capabilities.slice(1).map(([title, text], index) => (
            <Reveal key={title} delay={index * 0.05}>
              <div className="step">
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
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
