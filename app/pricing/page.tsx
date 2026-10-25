'use client';

import Link from 'next/link';
import { PageHero } from '@/components/keplor/PageBlocks';
import { Reveal } from '@/components/keplor/Reveal';

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Engagements"
        title="No public price list. No one-size-fits-all <span class='accent'>promise.</span>"
        body="Scope, data, risk, and delivery needs shape the right engagement. Keplor does not publish pricing tiers, plans, or trial claims."
      />
      <section className="section">
        <div className="belief">
          <Reveal>
            <div>
              <div className="section-label">Why no public pricing</div>
              <p className="belief-copy">Every Keplor engagement is shaped around a specific problem, dataset, and organisation. Publishing fixed tiers would mean pricing work we have not yet scoped — so we do not.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <p className="belief-copy">The honest path is a direct conversation about what you need and what it would take to build it well.</p>
              <Link className="button button--primary" href="/contact" data-cursor="EXPLORE">Start a conversation <span>↗</span></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
