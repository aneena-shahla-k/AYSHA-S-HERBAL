import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Check } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart, cart } = useCart();

  const isInCart = cart.some(item => item.id === product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.slug}`} className="product-card__link">
        
        {/* Card Header & Image */}
        <div className="product-card__image-container">
          {product.bestseller && (
            <span className="product-card__badge">Bestseller</span>
          )}
          <img
            src={product.image}
            alt={product.name}
            className="product-card__image"
            loading="lazy"
          />
        </div>

        {/* Card Info */}
        <div className="product-card__body">
          <span className="product-card__category">{product.category}</span>
          <h3 className="product-card__title">{product.name}</h3>
          
          <div className="product-card__footer">
            <span className="product-card__price">₹{product.price.toFixed(2)}</span>
            
            <button
              onClick={handleAddToCart}
              className={`product-card__add-btn ${isInCart ? 'in-cart' : ''}`}
              aria-label={`Add ${product.name} to basket`}
              title={isInCart ? "In Basket" : "Add to Basket"}
            >
              {isInCart ? <Check size={16} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
            </button>
          </div>
        </div>

      </Link>
    </div>
  );
};

export default ProductCard;
