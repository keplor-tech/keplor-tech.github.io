'use client';

import { PageHero, services } from '@/components/keplor/PageBlocks';
import { Reveal } from '@/components/keplor/Reveal';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="From idea to <span className='accent'>intelligent systems.</span>"
        body="A bespoke design to support your business needs."
      />
      <section className="section">
        <div className="services">
          {services.map(([no, title, text], index) => (
            <Reveal key={title} delay={index * 0.06}>
              <article className="service" data-cursor="EXPLORE">
                <div className="service-no">{no}</div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a className="arrow" href="/contact" aria-label={`Discuss ${title}`}>↗</a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
