import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../ProductCard/ProductCard';
import { getFeaturedProducts } from '../../data/products';
import './FeaturedSection.css';

const FeaturedSection = () => {
  const featuredProducts = getFeaturedProducts().slice(0, 5);

  return (
    <section className="featured-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header-wrap">
          <div>
            <span className="feature-eyebrow">FEATURED PRODUCTS</span>
            <h2 className="feature-section-title">Our Bestsellers</h2>
            <p className="feature-section-subtitle">
              Our most loved Ayurvedic essentials crafted with pure herbs for everyday rituals.
            </p>
          </div>

        </div>

        {/* Product Grid */}
        <div className="featured-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

          <Link to="/shop" className="feature-link-button">
            <span>View All Products</span>
            <ArrowRight size={15} />
          </Link>

      </div>
    </section>
  );
};

export default FeaturedSection;
