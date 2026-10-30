"use client";

import { useState } from "react";
import products from "@/lib/content/products";

export type ProductCardProps = {
  product: (typeof products)[number];
};

export default function ProductCard({ product }: ProductCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="product-card" data-status={product.status}>
      <div className="product-header">
        <span className="product-status">{product.statusLabel}</span>
        <h2>{product.name}</h2>
        <p className="product-positioning">{product.positioning}</p>
      </div>
      <p className="product-description">{product.description}</p>
      <div className="product-meta">
        <span className="product-audience">{product.audience}</span>
      </div>
      <div className="product-features">
        <h3>Key features</h3>
        <ul>
          {product.features.map((feature) => (
            <li key={feature.title}>
              <strong>{feature.title}.</strong> {feature.description}
            </li>
          ))}
        </ul>
      </div>
      <div className="product-use-case">
        <h3>Example use case</h3>
        <p>{product.useCase}</p>
      </div>
      <button
        className="product-toggle"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
      >
        {expanded ? "Show less" : "Show details"}
      </button>
    </article>
  );
}
