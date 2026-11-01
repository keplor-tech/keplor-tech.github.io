'use client';

import { PageHero } from '@/components/keplor/PageBlocks';
import { Reveal } from '@/components/keplor/Reveal';
import careers from '@/lib/content/careers';

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Work on meaningful <span className='accent'>systems.</span>"
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
              {[
                ['AI & Machine Learning', 'Predictive analytics, NLP, computer vision, recommendation systems, and intelligent automation.'],
                ['Custom Software', 'Web, mobile, and enterprise applications shaped around specific business requirements.'],
                ['Cloud Solutions', 'Cloud infrastructure and applications, including scalable, hybrid, and multi-cloud architectures.'],
                ['Research & Analytics', 'Data science, visualization, reporting, real-time and batch processing, and research-driven models.'],
              ].map(([title, text]) => (
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
      <section className="section">
        <div className="section-top">
          <Reveal>
            <div>
              <div className="section-label">02 / Sample roles</div>
              <h2 className="section-title">Illustrative roles we <span className="accent">might hire for.</span></h2>
              <p className="section-intro">The roles below are sample listings created for design completeness. They are not confirmed vacancies. All content is clearly identified as sample listings.</p>
            </div>
          </Reveal>
        </div>
        <div className="careers-grid">
          {careers.map((role) => (
            <Reveal key={role.id} delay={0.05}>
              <article className="career-card">
                <div className="career-header">
                  <span className="career-label">{role.label}</span>
                  <h2>{role.title}</h2>
                </div>
                <div className="career-meta">
                  <span><strong>Department:</strong> {role.department}</span>
                  <span><strong>Level:</strong> {role.level}</span>
                  <span><strong>Location:</strong> {role.location}</span>
                </div>
                <div className="career-responsibilities">
                  <h3>Responsibilities</h3>
                  <ul>
                    {role.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
                <div className="career-skills">
                  <h3>Skills</h3>
                  <ul>
                    {role.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <p className="career-disclaimer">{role.label} — not a confirmed vacancy</p>
                <div className="career-action">
                  <a href="/contact" className="button button--ghost">Make an enquiry</a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
