'use client';

import { PageHero } from '@/components/keplor/PageBlocks';
import { Reveal } from '@/components/keplor/Reveal';
import { ContactComposer } from '@/components/keplor/ContactComposer';

export default function FormsPage() {
  return (
    <>
      <PageHero
        eyebrow="Forms"
        title="Prepare a useful <span class='accent'>introduction.</span>"
        body="This compatibility route uses the same honest copy-only contact flow. No form submission or ticket is claimed."
      />
      <section className="section">
        <Reveal>
          <ContactComposer />
        </Reveal>
      </section>
    </>
  );
}
