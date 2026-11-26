import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`} className="product-card">
      <div className="product-image">
        {/* Sample fashion images are served remotely from Unsplash. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="view-tag">View Details ↗</span>
      </div>
      <div className="product-info">
        <span className="category-label">{product.category}</span>
        <h3>{product.name}</h3>
        <p>₱{product.price.toLocaleString("en-PH")}</p>
      </div>
    </Link>
  );
}
