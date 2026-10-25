'use client';

import Link from 'next/link';
import { PageHero } from '@/components/keplor/PageBlocks';
import { Reveal } from '@/components/keplor/Reveal';

const principles = [
  ['Understand first', 'Every engagement begins with the business problem, not the technology.'],
  ['Evidence over claims', 'We describe what a system can do based on validation, not aspiration.'],
  ['Built around you', 'No two organisations work the same way; no two Keplor systems are templated.'],
  ['Long-term thinking', 'We design systems that can be maintained, improved, and trusted over time.'],
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Working principles"
        title="No invented quotes. Just how we <span class='accent'>work.</span>"
        body="We do not publish testimonials, ratings, or client logos that we cannot verify. Instead, here is the standard we hold ourselves to on every engagement."
      />
      <section className="section">
        <div className="industry-list">
          {principles.map(([title, text], index) => (
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
        <div className="mission-vision">
          <Reveal>
            <div>
              <h3>Worked with Keplor?</h3>
              <p>If we have worked together and you would like to share your experience publicly, contact us — testimonials appear here only with explicit written permission.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <h3>Start a project</h3>
              <p>The best way to evaluate Keplor is a direct conversation about your problem. <Link className="text-link" href="/contact">Start a conversation <span>↗</span></Link></p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
