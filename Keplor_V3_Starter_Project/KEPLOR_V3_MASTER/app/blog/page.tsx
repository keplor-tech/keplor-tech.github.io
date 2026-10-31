import type { Metadata } from "next";
import { PageHero } from "@/components/Sections";
import BlogIndex from "@/components/BlogIndex";

export const metadata: Metadata = {
  title: "Field Notes",
  description: "Notes on AI, software, research, and the decisions that turn emerging technology into useful systems.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="FIELD NOTES"
        title="Thinking in public, with care."
        description="Notes on AI, software, research, and the decisions that turn emerging technology into useful systems."
      />
      <section className="page-content" aria-labelledby="blog-heading">
        <div className="container">
          <div className="section-head">
            <div className="section-index">
              <span>01</span>
              <span>JOURNAL</span>
            </div>
            <div>
              <h2 id="blog-heading" className="section-title">
                Notes on <em>useful technology</em>.
              </h2>
              <p className="section-intro">
                The articles below are preview content created for design demonstration.
                They will be replaced with real, reviewed pieces when available.
              </p>
            </div>
          </div>
          <BlogIndex />
        </div>
      </section>
    </>
  );
}
