'use client';

import Link from 'next/link';
import { PageHero } from '@/components/keplor/PageBlocks';
import { Reveal } from '@/components/keplor/Reveal';

export default function SignupPage() {
  return (
    <>
      <PageHero
        eyebrow="Workspace access"
        title="There is no public account <span class='accent'>sign-up.</span>"
        body="Keplor does not claim a self-serve product or simulated account creation. For a project discussion, visit Contact."
      />
      <section className="section">
        <Reveal>
          <div>
            <p className="belief-copy">Keplor works as a solutions partner rather than a self-serve platform. If that sounds like the right fit for your problem, we would like to hear about it.</p>
            <Link className="button button--primary" href="/contact" data-cursor="EXPLORE">Start a conversation <span>↗</span></Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
