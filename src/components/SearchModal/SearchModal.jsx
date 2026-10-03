import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { PRODUCTS } from '../../data/products';
import './SearchModal.css';

const SearchModal = () => {
  const { isSearchOpen, setIsSearchOpen } = useCart();
  const [query, setQuery] = useState('');

  if (!isSearchOpen) return null;

  const filteredProducts = query.trim() === ''
    ? []
    : PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="search-modal-backdrop" onClick={() => setIsSearchOpen(false)}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        
        {/* Search Input Header */}
        <div className="search-modal__input-wrap">
          <Search size={22} className="search-icon" />
          <input
            type="text"
            placeholder="Search soaps, creams, oils, face wash..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          {query && (
            <button className="clear-btn" onClick={() => setQuery('')}>
              <X size={16} />
            </button>
          )}
          <button className="close-btn" onClick={() => setIsSearchOpen(false)}>
            Close
          </button>
        </div>

        {/* Results */}
        <div className="search-modal__results">
          {query.trim() === '' ? (
            <div className="search-modal__suggestions">
              <span className="suggestion-label">Popular Searches:</span>
              <div className="suggestion-tags">
                {["Nalpamaradi", "Goat Milk Soap", "Hair Care Oil", "Beetroot Tinted", "Brightening Cream"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="suggestion-tag"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="search-modal__no-results">
              No products found matching "<strong>{query}</strong>".
            </div>
          ) : (
            <div className="search-modal__grid">
              {filteredProducts.slice(0, 6).map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.slug}`}
                  onClick={() => setIsSearchOpen(false)}
                  className="search-product-item"
                >
                  <img src={product.image} alt={product.name} />
                  <div className="search-product-info">
                    <span className="cat">{product.category}</span>
                    <h4 className="title">{product.name}</h4>
                    <span className="price">₹{product.price.toFixed(2)}</span>
                  </div>
                  <ArrowRight size={16} className="arrow" />
                </Link>
              ))}

              {filteredProducts.length > 6 && (
                <Link
                  to={`/shop?search=${encodeURIComponent(query)}`}
                  onClick={() => setIsSearchOpen(false)}
                  className="view-all-search-btn"
                >
                  View all {filteredProducts.length} results in Shop →
                </Link>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default SearchModal;
