'use client';

import Link from 'next/link';
import { PageHero } from '@/components/keplor/PageBlocks';
import { Reveal } from '@/components/keplor/Reveal';

export default function DashboardPage() {
  return (
    <>
      <PageHero
        eyebrow="Workspace"
        title="No fabricated dashboard <span class='accent'>data.</span>"
        body="This compatibility route is retained, but there is no connected dashboard or usage data behind it."
      />
      <section className="section">
        <Reveal>
          <div>
            <p className="belief-copy">Keplor does not present simulated metrics or placeholder analytics. When you work with us, any dashboard or reporting layer is built against your real data and requirements.</p>
            <Link className="button button--primary" href="/contact" data-cursor="EXPLORE">Discuss a project <span>↗</span></Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
