"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { products } from "../../../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const [size, setSize] = useState("M");
  const [added, setAdded] = useState(false);

  if (!product) {
    return <section className="section not-found"><h1>Product not found</h1><Link href="/collections" className="primary-btn">Back to Collections</Link></section>;
  }

  return (
    <section className="section product-page">
      <Link href="/collections" className="back-link">← Back to Collections</Link>
      <div className="detail-grid">
        <div className="detail-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.image} alt={product.name} />
        </div>
        <div className="detail-info">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="detail-price">₱{product.price.toLocaleString("en-PH")}</p>
          <p className="detail-description">{product.description}</p>
          <div className="size-section">
            <h3>Select Size</h3>
            <div className="size-options">{["S", "M", "L", "XL"].map((item) => <button key={item} className={size === item ? "size active" : "size"} onClick={() => { setSize(item); setAdded(false); }}>{item}</button>)}</div>
          </div>
          <button className="primary-btn add-btn" onClick={() => setAdded(true)}>{added ? "Added to Demo Bag ✓" : "Add to Bag"}</button>
          {added && <p className="success-message" role="status">{product.name} (Size {size}) was selected. This is a demo, so no order has been placed.</p>}
          <div className="product-features"><p>✦ Modern everyday fashion</p><p>✦ Designed for versatile styling</p><p>✦ MaroonMode collection</p></div>
        </div>
      </div>
    </section>
  );
}
