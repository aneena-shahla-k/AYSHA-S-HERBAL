import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { PRODUCTS, CATEGORIES } from '../../data/products';
import './Shop.css';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All';
  const searchParam = searchParams.get('search') || '';

  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [searchQuery, setSearchQuery] = useState(searchParam);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    if (searchParams.get('category')) {
      setActiveCategory(searchParams.get('category'));
    }
    if (searchParams.get('search')) {
      setSearchQuery(searchParams.get('search'));
    }
  }, [searchParams]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    const newParams = new URLSearchParams(searchParams);
    if (cat === 'All') {
      newParams.delete('category');
    } else {
      newParams.set('category', cat);
    }
    setSearchParams(newParams);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name-az') return a.name.localeCompare(b.name);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="shop-page animate-fade-in">
      
      {/* Top Banner */}
      <div className="page-banner">
        <div className="container">
          <span className="shop-eyebrow">AYURVEDIC CATALOG</span>
          <h2 className='shop-head'>Explore Our Collection</h2>
          <p className='shop-para'>
            Pure herbal soaps, nourishing creams, revitalizing oils, and natural wellness essentials.
          </p>
        </div>
      </div>

      <div className="container shop-container">
        
        {/* Category Filters Bar */}
        <div className="shop-categories-scroll">
          <div className="shop-categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Toolbar (Search & Sort) */}
        <div className="shop-toolbar">
          <div className="shop-search-box">
            <Search size={18} className="search-box-icon" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="clear-search-btn"
              >
                Clear
              </button>
            )}
          </div>

          <div className="shop-sort-box">
            <SlidersHorizontal size={16} />
            <span className="sort-label">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-az">A - Z</option>
            </select>
          </div>
        </div>

        {/* Products Results Header */}
        <div className="shop-results-meta">
          <span>
            Showing <strong>{filteredProducts.length}</strong> products
            {activeCategory !== 'All' && ` in "${activeCategory}"`}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="shop-empty">
            <Filter size={48} strokeWidth={1} />
            <h3>No products found</h3>
            <p>Try clearing your category filter or search query.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
                setSearchParams({});
              }}
              className="btn-primary"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="shop-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>

    </div>
  );
};

export default Shop;
