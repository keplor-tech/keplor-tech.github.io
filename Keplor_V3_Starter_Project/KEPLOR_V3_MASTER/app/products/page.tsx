import { PageHero } from "@/components/Sections";
import products from "@/lib/content/products";
import ProductCard from "@/components/products/ProductCard";

export const metadata = {
  title: "Products — Keplor",
  description: "Illustrative product concepts from Keplor. Concept previews for design demonstration.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        label="PRODUCTS"
        title="Illustrative product concepts"
        description="Concept previews created for design demonstration. These are fictional product concepts, not confirmed commercially released products."
      />
      <section className="products-grid" aria-labelledby="products-heading">
        <div className="container">
          <div className="section-head">
            <div className="section-index">
              <span>01</span>
              <span>CONCEPTS</span>
            </div>
            <div>
              <h2 id="products-heading" className="section-title">
                Exploring what we could <em>build together</em>.
              </h2>
              <p className="section-intro">
                The products below are illustrative concepts created for visual and content
                completeness. They are not confirmed commercially released products.
              </p>
            </div>
          </div>
          <div className="product-list">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <section className="products-note">
        <div className="container">
          <p>
            Product data is kept in <code>lib/content/products.ts</code> and can be replaced
            without rewriting layout components. Concepts will be updated as real products
            are developed and verified.
          </p>
        </div>
      </section>
    </>
  );
}
