import React, { useState } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Navbar.css";

import logo from "../../assets/images/logo-vedha.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { getCartCount, setIsCartOpen, setIsSearchOpen } = useCart();

  const cartCount = getCartCount();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="ay-navbar">
      <div className="ay-navbar-inner">

        {/* ================= LOGO ================= */}
        <Link to="/" className="ay-logo" aria-label="Aysha's Herbal Care Home">
          <img src={logo} alt="Aysha's Herbal Care" />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="ay-nav-links">
          {navItems.map((item, index) => (
            <React.Fragment key={item.name}>
              <Link
                to={item.path}
                className={
                  location.pathname === item.path
                    ? "ay-nav-link active"
                    : "ay-nav-link"
                }
              >
                {item.name}
              </Link>
              {index < navItems.length - 1 && <span className="ay-nav-dot">•</span>}
            </React.Fragment>
          ))}
        </nav>

        {/* ================= ACTIONS ================= */}
        <div className="ay-nav-actions">

          <button 
            className="ay-icon-btn" 
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search products"
            title="Search"
          >
            <Search size={20} strokeWidth={1.8} />
          </button>

          <button 
            className="ay-cart-btn" 
            onClick={() => setIsCartOpen(true)}
            aria-label="Shopping cart"
            title="Cart"
          >
            <ShoppingBag size={21} strokeWidth={1.8} />
            <span className="ay-cart-count">{cartCount}</span>
          </button>

          <button
            className="ay-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <X size={23} strokeWidth={1.8} />
            ) : (
              <Menu size={23} strokeWidth={1.8} />
            )}
          </button>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div className={`ay-mobile-menu ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setMenuOpen(false)}
            className={
              location.pathname === item.path
                ? "ay-mobile-link active"
                : "ay-mobile-link"
            }
          >
            {item.name}
          </Link>
        ))}

        <Link
          to="/shop"
          onClick={() => setMenuOpen(false)}
          className="ay-mobile-shop-btn"
        >
          Explore All Products →
        </Link>
      </div>
    </header>
  );
};

export default Navbar;