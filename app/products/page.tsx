import Link from 'next/link';
import { PageHero } from '@/components/keplor/PageBlocks';
import { Reveal } from '@/components/keplor/Reveal';
import products from '@/lib/content/products';
import ProductCard from '@/components/products/ProductCard';

export const metadata = {
  title: 'Products — Keplor',
  description: 'Illustrative product concepts from Keplor. Concept previews for design demonstration.',
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Illustrative product concepts"
        body="Concept previews created for design demonstration. These are fictional product concepts, not confirmed commercially released products."
      />
      <section className="section">
        <div className="section-top">
          <Reveal>
            <div>
              <div className="section-label">01 / Concepts</div>
              <h2 className="section-title">Exploring what we could <span className="accent">build together.</span></h2>
              <p className="section-intro">The products below are illustrative concepts created for visual and content completeness. They are not confirmed commercially released products.</p>
            </div>
          </Reveal>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <Reveal key={product.id} delay={0.05}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="belief">
          <Reveal>
            <div>
              <p className="belief-copy">Product data is kept in <code>lib/content/products.ts</code> and can be replaced without rewriting layout components. Concepts will be updated as real products are developed and verified.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
