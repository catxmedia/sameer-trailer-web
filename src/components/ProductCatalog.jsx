import React, { useState } from 'react';
import { productCategories, productsData } from '../data/productsData';

export default function ProductCatalog({ onSelectProduct, onOpenRfqForProduct }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = productsData.filter(product => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.overview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Heavy Commercial Fleet</span>
          <h2 className="section-title">Explore <span>35+ Custom Variants</span></h2>
          <p className="section-desc">
            From high-tensile side wall trailers to 170-bar hydro tippers and food-grade stainless tankers.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="catalog-tabs">
          {productCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div style={{ maxWidth: '450px', margin: '0 auto 2.5rem' }}>
          <input
            type="text"
            placeholder="🔍 Search trailer, tipper, bulker, tanker model..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input"
            style={{ width: '100%', textAlign: 'center' }}
          />
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-img-wrap">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="product-img" 
                  loading="lazy"
                />
                {product.tag && <span className="product-tag">{product.tag}</span>}
              </div>

              <div className="product-body">
                <h3 className="product-title">{product.title}</h3>
                <div className="product-sub">{product.subtitle}</div>
                <p className="product-overview">{product.overview}</p>

                <div className="highlights-chips">
                  {product.highlights.map((h, i) => (
                    <span key={i} className="chip">⚡ {h}</span>
                  ))}
                </div>

                <div className="product-actions">
                  <button 
                    onClick={() => onSelectProduct(product)} 
                    className="btn btn-secondary"
                  >
                    🔍 View Specs
                  </button>
                  <button 
                    onClick={() => onOpenRfqForProduct(product)} 
                    className="btn btn-primary"
                  >
                    💬 Get Price
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
