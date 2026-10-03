import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Truck, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: 'Kerala',
    pincode: '',
    paymentMethod: 'cod'
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');

  const subtotal = getCartTotal();
  const shipping = subtotal >= 500 || subtotal === 0 ? 0 : 50;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address || !formData.pincode) {
      alert("Please fill in all required delivery details.");
      return;
    }

    const generatedId = "AY-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="checkout-page animate-fade-in">
        <div className="container checkout-success-container">
          <div className="order-success-card">
            <div className="success-icon-wrap">
              <CheckCircle2 size={56} />
            </div>

            <span className="eyebrow">ORDER CONFIRMED</span>
            <h2>Thank You for Your Order!</h2>
            <p className="order-number">Order ID: <strong>{orderId}</strong></p>

            <p className="success-msg">
              We have received your Ayurvedic order. A confirmation SMS & email will be sent to <strong>{formData.phone}</strong> shortly.
            </p>

            <div className="order-delivery-info">
              <h4>Shipping Details</h4>
              <p><strong>{formData.fullName}</strong></p>
              <p>{formData.address}, {formData.city}, {formData.state} - {formData.pincode}</p>
              <p>Payment Method: {formData.paymentMethod === 'cod' ? 'Cash on Delivery' : 'UPI / Online Payment'}</p>
            </div>

            <Link to="/shop" className="btn-primary">
              <span>Continue Shopping</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="checkout-page animate-fade-in">
        <div className="container empty-checkout-container">
          <ShoppingBag size={48} strokeWidth={1} />
          <h2>Your Basket is Empty</h2>
          <p>Add some herbal products to your basket before checking out.</p>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page animate-fade-in">
      
      {/* Top Banner */}
      <div className="page-banner">
        <div className="container">
          <span className="eyebrow">CHECKOUT</span>
          <h1>Shipping & Payment</h1>
          <p>Complete your delivery details to place your order.</p>
        </div>
      </div>

      <div className="container checkout-container">
        <form onSubmit={handlePlaceOrder} className="checkout-grid">
          
          {/* Left Column: Customer Form */}
          <div className="checkout-form-col">
            
            <div className="form-section">
              <h3>1. Contact & Delivery Address</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="e.g. Anjali Sharma"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address (Optional)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Full Delivery Address *</label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  placeholder="House No., Street, Landmark"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row three-col">
                <div className="form-group">
                  <label htmlFor="city">City / Town *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="e.g. Kochi"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="state">State *</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="pincode">Pincode *</label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    placeholder="6-digit pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="form-section">
              <h3>2. Payment Method</h3>
              
              <div className="payment-options">
                <label className={`payment-card ${formData.paymentMethod === 'cod' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleChange}
                  />
                  <div>
                    <strong>Cash on Delivery (COD)</strong>
                    <p>Pay with cash when your herbal care package is delivered.</p>
                  </div>
                </label>

                <label className={`payment-card ${formData.paymentMethod === 'upi' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={handleChange}
                  />
                  <div>
                    <strong>UPI / GPay / PhonePe / Card</strong>
                    <p>Instant contactless payment via QR code or payment link.</p>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Right Column: Order Breakdown */}
          <div className="checkout-summary-col">
            <div className="summary-card">
              <h3>Order Items ({cart.length})</h3>

              <div className="checkout-items-preview">
                {cart.map((item) => (
                  <div key={item.id} className="preview-item">
                    <img src={item.image} alt={item.name} />
                    <div className="preview-info">
                      <span className="title">{item.name}</span>
                      <span className="qty">Qty: {item.quantity}</span>
                    </div>
                    <span className="price">₹{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="summary-details">
                <div className="summary-line">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>

                <div className="summary-line">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? <strong className="free-text">FREE</strong> : `₹${shipping.toFixed(2)}`}</span>
                </div>

                <div className="summary-line total-line">
                  <span>Total Payable</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>

              <button type="submit" className="btn-primary place-order-btn">
                <span>Place Order</span>
                <ArrowRight size={17} />
              </button>

              <div className="checkout-trust-badges">
                <div className="badge">
                  <ShieldCheck size={16} />
                  <span>100% Safe Checkout</span>
                </div>
                <div className="badge">
                  <Truck size={16} />
                  <span>Fast Herbal Delivery</span>
                </div>
              </div>

            </div>
          </div>

        </form>
      </div>

    </div>
  );
};

export default Checkout;
