import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Truck, Leaf } from 'lucide-react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { getProductBySlug, PRODUCTS } from '../../data/products';
import { useCart } from '../../context/CartContext';
import './ProductDetails.css';

const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useCart();
  
  const product = getProductBySlug(slug);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return (
      <div className="container product-not-found">
        <h2>Product Not Found</h2>
        <p>The Ayurvedic product you are looking for does not exist or has been moved.</p>
        <Link to="/shop" className="btn-primary">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    setIsCartOpen(false);
    navigate('/checkout');
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="product-details-page animate-fade-in">
      
      {/* Breadcrumb Navigation */}
      <div className="product-breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="sep">/</span>
          <Link to="/shop">Shop</Link>
          <span className="sep">/</span>
          <Link to={`/shop?category=${encodeURIComponent(product.category)}`}>
            {product.category}
          </Link>
          <span className="sep">/</span>
          <span className="current">{product.name}</span>
        </div>
      </div>

      <div className="container product-details-container">
        <div className="product-details-grid">
          
          {/* Left: Product Image Gallery */}
          <div className="product-gallery">
            <div className="product-gallery__main">
              {product.bestseller && (
                <span className="product-gallery__badge">Bestseller</span>
              )}
              <img src={product.image} alt={product.name} />
            </div>
            
            <div className="product-gallery__guarantee">
              <div className="guarantee-item">
                <Leaf size={18} />
                <span>100% Herbal & Pure</span>
              </div>
              <div className="guarantee-item">
                <Truck size={18} />
                <span>Free Shipping over ₹500</span>
              </div>
              <div className="guarantee-item">
                <ShieldCheck size={18} />
                <span>Authentic Ayurveda</span>
              </div>
            </div>
          </div>

          {/* Right: Product Info & Actions */}
          <div className="product-info-col">
            
            <span className="eyebrow">{product.category}</span>
            <h1 className="product-info__title">{product.name}</h1>

            {/* Rating Stars */}
            <div className="product-info__rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.floor(product.rating || 5) ? "#eab308" : "none"}
                    color="#eab308"
                  />
                ))}
              </div>
              <span className="rating-score">{product.rating || 4.9}</span>
              <span className="rating-count">({product.reviewCount || 45} customer reviews)</span>
            </div>

            {/* Price & Weight */}
            <div className="product-info__price-row">
              <span className="product-price">₹{product.price.toFixed(2)}</span>
              {product.size && (
                <span className="product-size-tag">Net Vol / Wt: {product.size}</span>
              )}
            </div>

            <p className="product-info__short-desc">
              {product.shortDescription}
            </p>

            {/* Quantity Selector & Add Buttons */}
            <div className="product-purchase-box">
              <div className="quantity-field">
                <span className="field-label">Quantity:</span>
                <div className="quantity-picker">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Decrease"
                  >
                    <Minus size={14} />
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Increase"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className="product-actions-row">
                <button onClick={handleAddToCart} className="btn-secondary add-to-cart-btn">
                  <ShoppingBag size={18} />
                  <span>Add to Basket</span>
                </button>

                <button onClick={handleBuyNow} className="btn-primary buy-now-btn">
                  <span>Buy Now</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Tabs for Details, Ingredients, How to Use */}
            <div className="product-tabs">
              <div className="tab-headers">
                <button
                  className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                <button
                  className={`tab-btn ${activeTab === 'ingredients' ? 'active' : ''}`}
                  onClick={() => setActiveTab('ingredients')}
                >
                  Ingredients
                </button>
                <button
                  className={`tab-btn ${activeTab === 'benefits' ? 'active' : ''}`}
                  onClick={() => setActiveTab('benefits')}
                >
                  Benefits
                </button>
                <button
                  className={`tab-btn ${activeTab === 'howToUse' ? 'active' : ''}`}
                  onClick={() => setActiveTab('howToUse')}
                >
                  How to Use
                </button>
              </div>

              <div className="tab-content">
                {activeTab === 'description' && (
                  <p>{product.description}</p>
                )}

                {activeTab === 'ingredients' && (
                  <ul className="tab-list">
                    {product.ingredients?.map((ing, idx) => (
                      <li key={idx}>{ing}</li>
                    )) || <li>Natural Ayurvedic herbal extracts and plant oils.</li>}
                  </ul>
                )}

                {activeTab === 'benefits' && (
                  <ul className="tab-list">
                    {product.benefits?.map((ben, idx) => (
                      <li key={idx}>{ben}</li>
                    )) || <li>Nourishes skin and restores natural vitality.</li>}
                  </ul>
                )}

                {activeTab === 'howToUse' && (
                  <p>{product.howToUse || "Apply evenly on skin or hair as directed."}</p>
                )}
              </div>
            </div>

          </div>

        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="related-products-section">
            <h3 className="related-title">Suggested Products</h3>
            <div className="related-grid">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
};

export default ProductDetails;
