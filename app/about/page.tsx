'use client';

import { PageHero } from '@/components/keplor/PageBlocks';
import { Reveal } from '@/components/keplor/Reveal';
import caseStudies from '@/lib/content/case-studies';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Keplor"
        title="A technology company building <span className='accent'>practical intelligence.</span>"
        body="The design, build and support of intelligent systems that solve real business problems."
      />
      <section className="section">
        <div className="belief">
          <Reveal>
            <div>
              <div className="section-label">Our philosophy</div>
              <div className="philosophy-grid">
                <div className="philosophy-card">
                  <h3>Practical</h3>
                  <p>We focus on problems first and technology that fits them.</p>
                </div>
                <div className="philosophy-card">
                  <h3>Responsible</h3>
                  <p>Buildable, safe, and maintainable systems.</p>
                </div>
                <div className="philosophy-card">
                  <h3>Long-term</h3>
                  <p>Complete solutions that last.</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <p className="belief-copy">Keplor is an independent AI/ML and software-solutions company. We combine technical thinking with a practical understanding of business needs — turning ideas into intelligent, scalable, and data-driven solutions.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <p className="belief-copy">We work across the full lifecycle: understanding the problem, designing the right approach, building the system, and improving it as needs evolve.</p>
            </div>
          </Reveal>
        </div>
        <div className="mission-vision">
          <Reveal>
            <div>
              <h3>Our mission</h3>
              <p>To help businesses use AI/ML and custom software to work more effectively, make better decisions, and create room for innovation and growth.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div>
              <h3>Our vision</h3>
              <p>A future where organizations can use intelligent, scalable, data-informed technology to adapt and make progress.</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="section-top">
          <Reveal>
            <div>
              <div className="section-label">03 / Illustrative work</div>
              <h2 className="section-title">Case studies — <span className="accent">illustrative scenarios.</span></h2>
              <p className="section-intro">The following case studies are fictional project scenarios created for visual and content demonstration. They are not genuine Keplor client engagements. No client identities, verified metrics, or operational results are implied.</p>
            </div>
          </Reveal>
        </div>
        <div className="case-studies">
          {caseStudies.map((study) => (
            <Reveal key={study.id} delay={0.05}>
              <article className="case-study-card">
                <div className="case-study-meta">
                  <span className="case-study-label">{study.label}</span>
                  <h2>{study.title}</h2>
                  <span className="case-study-context">{study.context}</span>
                </div>
                <div className="case-study-problem">
                  <h3>Problem</h3>
                  <p>{study.problem}</p>
                </div>
                <div className="case-study-approach">
                  <h3>Proposed approach</h3>
                  <p>{study.approach}</p>
                </div>
                <div className="case-study-solution">
                  <h3>Solution concept</h3>
                  <p>{study.solution}</p>
                </div>
                <div className="case-study-outcome">
                  <h3>Intended outcome</h3>
                  <p>{study.outcome}</p>
                </div>
                <div className="case-study-themes">
                  {study.themes.map((theme) => (
                    <span className="theme-tag" key={theme}>{theme}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
