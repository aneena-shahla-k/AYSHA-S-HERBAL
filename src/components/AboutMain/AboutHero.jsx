import React from "react";
import "./AboutHero.css";

export default function AboutHero() {
  return (
    <section className="hg-about-hero">

      <div className="hg-hero-overlay" />

      <div className="hg-hero-content">
        <span className="hg-eyebrow">ABOUT US</span>

        <h2>
          Nature’s Care
          <br />
          <em>for your skin</em>
        </h2>

        <p>
          At HerbaGlow, we believe that healthy, glowing skin
          comes from the purest nature. Our herbal skincare products
          are crafted with love, tradition and the power of natural
          ingredients to bring out your skin’s natural beauty.
        </p>

        <div className="hg-hero-signature">
          Pure&nbsp; · &nbsp;Safe&nbsp; · &nbsp;Effective
        </div>
      </div>

    </section>
  );
}