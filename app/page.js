import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">MAROONMODE / COLLECTION 2026</p>
          <h1>WEAR YOUR<br /><span>CONFIDENCE.</span></h1>
          <p className="hero-description">Redefine your style with bold essentials and effortless fashion. Discover pieces made to stand out.</p>
          <Link href="/collections" className="primary-btn">Shop the Collection <span>↗</span></Link>
        </div>
        <div className="hero-bottom"><span>01 / 03 — THE NEW EDIT</span><span>STYLE WITHOUT LIMITS</span></div>
      </section>
      <section className="section intro-section">
        <p className="eyebrow">BE DIFFERENT. BE BOLD.</p>
        <h2>NOT JUST FASHION.<br /><span>IT&apos;S AN ATTITUDE.</span></h2>
        <p>MaroonMode brings modern style together with everyday comfort. Explore the pieces that define your look.</p>
      </section>
      <section className="section">
        <div className="section-heading"><div><p className="eyebrow">HANDPICKED FOR YOU</p><h2>FEATURED PIECES</h2></div><Link href="/collections" className="text-link">View All Products ↗</Link></div>
        <div className="product-grid">{products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>
      <section className="promo-banner">
        <p className="eyebrow">THE MAROONMODE EDIT</p>
        <h2>YOUR STYLE. YOUR RULES.</h2>
        <p>Discover fashion that makes every day a statement.</p>
        <Link href="/collections" className="primary-btn">Explore Now ↗</Link>
      </section>
    </>
  );
}
