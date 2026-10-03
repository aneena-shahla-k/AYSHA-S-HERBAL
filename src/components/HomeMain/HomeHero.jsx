import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag } from "lucide-react";
import "./HomeHero.css";

import heroImage from "../../assets/images/home/home-heroo.png";

const HomeHero = () => {
  return (
    <section className="home-hero">

      {/* Background */}
      <div
        className="home-hero__background"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Soft readable overlay */}
      <div className="home-hero__overlay" />

      {/* Hero Content */}
      <div className="home-hero__content">

        <span className="home-hero__eyebrow">
          AYURVEDIC HERBAL CARE
        </span>

        <h1>
          Nature's Care,
          <br />
          <em>Rooted in Ayurveda.</em>
        </h1>

        <p>
          Herbal skincare and wellness products crafted with
          <br className="desktop-break" />
          nature-inspired ingredients for your everyday care.
        </p>

        <div className="home-hero__actions">

          <Link to="/about" className="hero-btn hero-btn--primary">
            <span>About us</span>
            <ArrowRight size={16} strokeWidth={2} />
          </Link>

          <Link to="/shop" className="hero-btn hero-btn--secondary">
            <ShoppingBag size={16} strokeWidth={1.8} />
            <span>Shop Now</span>
          </Link>

        </div>

      </div>

      {/* Desktop Features */}
      <div className="home-hero__bottom">

        <div className="hero-feature">
          <span className="hero-feature__dot" />
          <span>Ayurvedic</span>
        </div>

        <div className="hero-feature">
          <span className="hero-feature__dot" />
          <span>Nature Inspired</span>
        </div>

        <div className="hero-feature">
          <span className="hero-feature__dot" />
          <span>Made With Care</span>
        </div>

      </div>

      {/* Mobile bottom hint */}
      <div className="home-hero__mobile-note">
        <span />
        Rooted in Ayurveda
      </div>

    </section>
  );
};

export default HomeHero;