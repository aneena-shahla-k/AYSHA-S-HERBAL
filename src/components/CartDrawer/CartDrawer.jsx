import React from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './CartDrawer.css';

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    getCartTotal
  } = useCart();

  if (!isCartOpen) return null;

  const subtotal = getCartTotal();
  const shipping = subtotal >= 500 || subtotal === 0 ? 0 : 50;
  const total = subtotal + shipping;

  return (
    <div className="cart-drawer-backdrop" onClick={() => setIsCartOpen(false)}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="cart-drawer__header">
          <div className="cart-drawer__title">
            <ShoppingBag size={20} />
            <h3>Your Basket</h3>
            <span className="cart-drawer__count">({cart.length})</span>
          </div>
          <button
            className="cart-drawer__close"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart drawer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Alert Bar */}
        {subtotal > 0 && subtotal < 500 && (
          <div className="cart-drawer__promo">
            Add <strong>₹{(500 - subtotal).toFixed(2)}</strong> more to unlock <strong>FREE Shipping</strong>!
          </div>
        )}

        {/* Cart Body */}
        <div className="cart-drawer__body">
          {cart.length === 0 ? (
            <div className="cart-drawer__empty">
              <ShoppingBag size={48} strokeWidth={1} />
              <h4>Your basket is waiting</h4>
              <p>Explore our Ayurvedic herbal collection and add nature's goodness to your basket.</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn-primary"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="cart-drawer__items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item__image"
                  />
                  
                  <div className="cart-item__info">
                    <h4 className="cart-item__name">{item.name}</h4>
                    <span className="cart-item__category">{item.category}</span>
                    <span className="cart-item__price">₹{item.price.toFixed(2)}</span>
                    
                    <div className="cart-item__actions">
                      <div className="quantity-controls">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="cart-item__remove"
                        aria-label="Remove item"
                        title="Remove"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>

                  <div className="cart-item__subtotal">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Summary */}
        {cart.length > 0 && (
          <div className="cart-drawer__footer">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? <strong className="free-tag">FREE</strong> : `₹${shipping.toFixed(2)}`}</span>
            </div>
            <div className="summary-row total-row">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>

            <div className="cart-drawer__buttons">
              <Link
                to="/cart"
                onClick={() => setIsCartOpen(false)}
                className="btn-secondary full-width"
              >
                View Full Basket
              </Link>

              <Link
                to="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="btn-primary full-width"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default CartDrawer;
