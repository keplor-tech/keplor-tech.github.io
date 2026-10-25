'use client';

import Link from 'next/link';
import { PageHero } from '@/components/keplor/PageBlocks';
import { Reveal } from '@/components/keplor/Reveal';

export default function LoginPage() {
  return (
    <>
      <PageHero
        eyebrow="Workspace access"
        title="There is no public workspace <span class='accent'>login.</span>"
        body="Keplor does not operate a public SaaS dashboard through this site. This compatibility page keeps the previous route honest and available."
      />
      <section className="section">
        <Reveal>
          <div>
            <p className="belief-copy">If you are working with Keplor on an active engagement, your team will provide access directly. For anything else, the best starting point is a conversation.</p>
            <Link className="button button--primary" href="/contact" data-cursor="EXPLORE">Contact Keplor <span>↗</span></Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
