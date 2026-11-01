'use client';

import { PageHero } from '@/components/keplor/PageBlocks';
import { Reveal } from '@/components/keplor/Reveal';

const notes = [
  ['Editorial', 'Working with data honestly', 'A working note on the gap between dashboards and decisions — and how teams can close it with disciplined analysis.'],
  ['Editorial', 'Where AI/ML actually earns its keep', 'Practical areas where machine learning delivers measurable value, and where simpler tooling is the better answer.'],
  ['Editorial', 'Shipping software that survives contact with reality', 'Notes on discovery, design, and delivery — and why iteration beats grand plans.'],
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Notes"
        title="Ideas, research and builds from <span className='accent'>Keplor.</span>"
        body="Original editorial notes on responsible AI/ML, software delivery, and the realities of working with data."
      />
      <section className="section">
        <div className="blog-list">
          {notes.map(([category, title, excerpt], index) => (
            <Reveal key={title} delay={index * 0.06}>
              <article className="blog-item" data-cursor="OPEN">
                <div className="blog-meta">
                  <span className="blog-category">{category}</span>
                  <span className="blog-note">Original editorial content — not a publication archive</span>
                </div>
                <h3>{title}</h3>
                <p>{excerpt}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
