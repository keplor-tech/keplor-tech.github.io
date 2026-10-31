import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Sections";
import careers from "@/lib/content/careers";

export const metadata: Metadata = {
  title: "Careers",
  description: "Sample role listings from Keplor. Illustrative content for design demonstration.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="CAREERS"
        title="Make room for better questions."
        description="We value curiosity, careful thinking, and the craft of building useful technology."
      />
      <section className="page-content" aria-labelledby="careers-heading">
        <div className="container">
          <div className="section-head">
            <div className="section-index">
              <span>01</span>
              <span>OPPORTUNITIES</span>
            </div>
            <div>
              <h2 id="careers-heading" className="section-title">
                Sample <em>role listings</em>.
              </h2>
              <p className="section-intro">
                The roles below are illustrative listings created for design demonstration.
                They are not confirmed vacancies. We’ll publish real opportunities when available.
              </p>
            </div>
          </div>
          <div className="careers-grid">
            {careers.map((role) => (
              <article key={role.id} className="career-card">
                <span className="career-label">{role.label}</span>
                <h3>{role.title}</h3>
                <div className="career-meta">
                  <span>{role.department}</span>
                  <span>{role.level}</span>
                  <span>{role.location}</span>
                </div>
                <h4>Responsibilities</h4>
                <ul>
                  {role.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
                <h4>Skills</h4>
                <ul className="career-skills">
                  {role.skills.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
                <Link
                  href="/contact/"
                  className="career-cta"
                >
                  Enquire about this role <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
