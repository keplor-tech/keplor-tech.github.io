"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import blogPosts from "@/lib/content/blog-posts";

const categories = ["All", ...new Set(blogPosts.map((post) => post.category))];

export default function BlogIndex() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return blogPosts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const searchable = [post.title, post.category, post.excerpt, ...post.tags].join(" ").toLowerCase();
      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [category, query]);

  return (
    <div className="blog-index">
      <div className="blog-controls" role="search">
        <div className="blog-filters" aria-label="Filter by category">
          {categories.map((item) => (
            <button
              type="button"
              className={`blog-filter${category === item ? " blog-filter--active" : ""}`}
              key={item}
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="blog-search">
          <span className="sr-only">Search articles</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles..."
          />
          <span aria-hidden="true">⌕</span>
        </label>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="blog-grid">
          {filteredPosts.map((post) => (
            <article key={post.id} className="blog-post">
              <span className="blog-category">{post.category}</span>
              <span className="blog-label">{post.label}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-tags">
                {post.tags.map((tag) => <span className="blog-tag" key={tag}>{tag}</span>)}
              </div>
              <span className="blog-read-time">{post.readTime}</span>
              <Link href={`/blog/${post.id}/`} className="blog-link">
                Read article <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state" role="status">
          <h2>No notes match that search.</h2>
          <p>Try a different phrase or return to all categories.</p>
        </div>
      )}
    </div>
  );
}
