'use client';

import { PageHero } from '@/components/keplor/PageBlocks';
import { Reveal } from '@/components/keplor/Reveal';
import { ContactComposer } from '@/components/keplor/ContactComposer';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build what's <span class='accent'>next.</span>"
        body="Have a challenge to solve, a workflow to improve, or an idea to explore? Tell us what you're working on."
      />
      <section className="section contact">
        <div className="contact-grid">
          <Reveal>
            <div>
              <div className="section-label">Start the conversation</div>
              <p className="contact-copy">Use the message composer to prepare an introduction. Copy it into your preferred email or messaging channel and send it to us.</p>
              <div className="contact-details">
                <span>Project enquiries</span>
                <span>Replies from the Keplor team</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <ContactComposer />
          </Reveal>
        </div>
      </section>
    </>
  );
}
