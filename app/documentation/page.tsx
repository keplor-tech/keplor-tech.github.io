'use client';

import Link from 'next/link';
import { PageHero } from '@/components/keplor/PageBlocks';
import { Reveal } from '@/components/keplor/Reveal';

export default function DocumentationPage() {
  return (
    <>
      <PageHero
        eyebrow="Documentation"
        title="Documentation starts with a real <span class='accent'>system.</span>"
        body="There is no public product API or developer portal connected to this site. Project documentation is created in context with the people who use and maintain each system."
      />
      <section className="section">
        <div className="belief">
          <Reveal>
            <div>
              <div className="section-label">What we provide</div>
              <p className="belief-copy">For every engagement, documentation is produced alongside the system itself — architecture decisions, integration guides, and operational notes written for the people who will actually use them.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <p className="belief-copy">For a conversation about an architecture, integration, or research question, reach out directly.</p>
              <Link className="button button--primary" href="/contact" data-cursor="EXPLORE">Contact Keplor <span>↗</span></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
