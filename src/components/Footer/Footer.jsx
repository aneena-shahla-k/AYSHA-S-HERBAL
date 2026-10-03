import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Leaf } from 'lucide-react';
import logo from '../../assets/images/logo-vedha.png';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="ay-footer">
      {/* Decorative leaf shapes */}
      <div className="ay-footer-bg-leaf left-leaf">
        <Leaf size={140} strokeWidth={0.8} />
      </div>
      <div className="ay-footer-bg-leaf right-leaf">
        <Leaf size={140} strokeWidth={0.8} />
      </div>

      <div className="container">
        <div className="ay-footer-grid">

          {/* Column 1: Brand Info */}
          <div className="ay-footer-brand">
            <Link to="/" className="ay-footer-logo">
              <img src={logo} alt="Aysha's Herbal Care" />
            </Link>
            <p className="ay-footer-slogan">
              Pure • Natural • Ayurvedic
            </p>
            <p className="ay-footer-desc">
              Authentic Ayurvedic skincare and herbal wellness products crafted with time-tested botanical ingredients for your everyday care.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="ay-footer-links">
            <h4 className="ay-footer-heading">Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop Collection</Link></li>
              <li><Link to="/about">Our Story & Philosophy</Link></li>
              <li><Link to="/cart">My Basket</Link></li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div className="ay-footer-links">
            <h4 className="ay-footer-heading">Categories</h4>
            <ul>
              <li><Link to="/shop?category=Soap">Herbal Soaps</Link></li>
              <li><Link to="/shop?category=Creams">Skincare Creams</Link></li>
              <li><Link to="/shop?category=Face Wash">Face Wash</Link></li>
              <li><Link to="/shop?category=Lip Balm">Lip Balms</Link></li>
              <li><Link to="/shop?category=Oil">Ayurvedic Oils</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="ay-footer-newsletter">
            <h4 className="ay-footer-heading">Stay Connected</h4>
            <p>Stay updated with our natural wellness tips and exclusive offers.</p>

            <form onSubmit={handleSubscribe} className="ay-newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" aria-label="Subscribe">
                <span>Subscribe</span>
                <Send size={15} />
              </button>
            </form>

            {subscribed && (
              <p className="newsletter-success">Thank you for subscribing to our wellness updates!</p>
            )}

            <div className="ay-footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="ay-footer-bottom">
          <p>© 2026 Aysha's Herbal Care. All rights reserved.</p>
          <div className="ay-footer-bottom-links">
            <span>Handcrafted with Ayurveda</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
