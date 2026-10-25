'use client';

import { PageHero } from '@/components/keplor/PageBlocks';
import { Reveal } from '@/components/keplor/Reveal';

const areas = [
  ['AI & Machine Learning', 'Predictive analytics, NLP, computer vision, recommendation systems, and intelligent automation.'],
  ['Custom Software', 'Web, mobile, and enterprise applications shaped around specific business requirements.'],
  ['Cloud Solutions', 'Cloud infrastructure and applications, including scalable, hybrid, and multi-cloud architectures.'],
  ['Research & Analytics', 'Data science, visualization, reporting, real-time and batch processing, and research-driven models.'],
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Work on meaningful <span class='accent'>systems.</span>"
        body="Keplor builds AI/ML and software solutions for real business problems. We are not publishing confirmed openings right now."
      />
      <section className="section">
        <div className="belief">
          <Reveal>
            <div>
              <div className="section-label">What we work on</div>
              <p className="belief-copy">People at Keplor work across the full lifecycle of intelligent systems — from understanding a business problem to designing, building, and improving the software and models that address it.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="industry-list">
              {areas.map(([title, text]) => (
                <div className="step" key={title}>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="mission-vision">
          <Reveal>
            <div>
              <h3>Openings</h3>
              <p>No vacancies are listed at present. When roles open, they will be published here first — we do not invent positions or collect applications for jobs that do not exist.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <h3>Genuine inquiries</h3>
              <p>If you believe your skills align strongly with the work above, you are welcome to introduce yourself through the contact page. Every message is read.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
