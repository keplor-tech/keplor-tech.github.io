import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Sections";
import blogPosts from "@/lib/content/blog-posts";

export const metadata: Metadata = {
  title: "Field Notes — Keplor",
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
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-post">
                <span className="blog-category">{post.category}</span>
                <span className="blog-label">{post.label}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="blog-tag">{tag}</span>
                  ))}
                </div>
                <span className="blog-read-time">{post.readTime}</span>
                <Link href={`/blog/${post.id}/`} className="blog-link">
                  Read article <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
