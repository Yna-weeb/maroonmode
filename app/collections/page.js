"use client";

import { useState } from "react";
import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";

export default function Collections() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const categories = ["All", "Tops", "Outerwear", "Footwear"];
  const filteredProducts = products.filter((product) =>
    (category === "All" || product.category === category) &&
    product.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <>
      <section className="page-banner"><p className="eyebrow">CURATED FOR YOUR STYLE</p><h1>THE COLLECTION</h1><p>Find your next favorite piece.</p></section>
      <section className="section">
        <div className="collection-toolbar">
          <div className="filter-buttons">
            {categories.map((item) => <button key={item} className={category === item ? "filter active" : "filter"} onClick={() => setCategory(item)}>{item}</button>)}
          </div>
          <input className="search-input" type="search" placeholder="Search for products..." aria-label="Search products" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <p className="result-count">Showing {filteredProducts.length} products</p>
        {filteredProducts.length > 0 ? <div className="product-grid">{filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <p className="empty-message">No products found. Try another search or category.</p>}
      </section>
    </>
  );
}
