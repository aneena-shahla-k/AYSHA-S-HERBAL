import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getCartTotal,
    clearCart
  } = useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal >= 500 || subtotal === 0 ? 0 : 50;
  const total = subtotal + shipping;

  return (
    <div className="cart-page animate-fade-in">
      
      {/* Top Banner */}
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">YOUR SHOPPING BASKET</span>
          <h1>Shopping Basket</h1>
          <p>Review your selected Ayurvedic products before proceeding to checkout.</p>
        </div>
      </div>

      <div className="container cart-container">
        {cart.length === 0 ? (
          <div className="cart-empty-view">
            <div className="cart-empty-card">
              <ShoppingBag size={56} strokeWidth={1} />
              <h2>Your basket is waiting</h2>
              <p>Explore our handcrafted Ayurvedic herbal collection and begin your natural care routine.</p>
              <Link to="/shop" className="btn-primary">
                <span>Continue Shopping</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ) : (
          <div className="cart-content-grid">
            
            {/* Cart Items List */}
            <div className="cart-items-column">
              <div className="cart-table-header">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Subtotal</span>
                <span>Action</span>
              </div>

              <div className="cart-items-list">
                {cart.map((item) => (
                  <div key={item.id} className="cart-row">
                    
                    <div className="cart-col-product">
                      <img src={item.image} alt={item.name} />
                      <div>
                        <Link to={`/product/${item.slug}`} className="item-name">
                          {item.name}
                        </Link>
                        <span className="item-cat">{item.category}</span>
                      </div>
                    </div>

                    <div className="cart-col-price">
                      ₹{item.price.toFixed(2)}
                    </div>

                    <div className="cart-col-quantity">
                      <div className="quantity-picker">
                        <button onClick={() => decreaseQuantity(item.id)} aria-label="Decrease">
                          <Minus size={13} />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)} aria-label="Increase">
                          <Plus size={13} />
                        </button>
                      </div>
                    </div>

                    <div className="cart-col-subtotal">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </div>

                    <div className="cart-col-action">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="remove-btn"
                        title="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                  </div>
                ))}
              </div>

              <div className="cart-actions-bar">
                <Link to="/shop" className="btn-secondary">
                  ← Continue Shopping
                </Link>
                <button onClick={clearCart} className="clear-all-btn">
                  Clear Basket
                </button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="cart-summary-column">
              <div className="summary-card">
                <h3>Order Summary</h3>
                
                {subtotal < 500 && (
                  <div className="shipping-progress">
                    <span>Add <strong>₹{(500 - subtotal).toFixed(2)}</strong> more for FREE Shipping</span>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${Math.min(100, (subtotal / 500) * 100)}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="summary-details">
                  <div className="summary-line">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>

                  <div className="summary-line">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? <strong className="free-text">FREE</strong> : `₹${shipping.toFixed(2)}`}
                    </span>
                  </div>

                  <div className="summary-line total-line">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                </div>

                <Link to="/checkout" className="btn-primary checkout-btn">
                  <span>Proceed to Checkout</span>
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>

          </div>
        )}
      </div>

    </div>
  );
};

export default Cart;
