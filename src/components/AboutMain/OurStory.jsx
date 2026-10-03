import React from "react";
import { ArrowRight } from "lucide-react";
import {Link} from "react-router-dom";
import "./OurStory.css";
import story from "../../assets/images/about/about.png";

export default function OurStory() {
  return (
    <section className="hg-story">

      <div className="hg-story-image-wrap">
        <img
          src={story}
          alt="Natural herbal ingredients"
        />

        <div className="hg-leaf-decoration">🌿</div>
      </div>

      <div className="hg-story-content">

        <span className="hg-section-label">
          OUR STORY
        </span>

        <h2>
          Rooted in tradition,
          <br />
         <em>made for today</em> 
        </h2>

        <p>
          HerbaGlow was born from a simple belief — that nature has
          the best solutions for healthy skin. Inspired by ancient
          Ayurvedic wisdom and backed by modern skincare science,
          we create herbal products that are safe, effective and
          kind to your skin and the planet.
        </p>

        <p>
          What started as a passion for natural living has grown
          into a brand that brings you the best of herbal skincare —
          pure, gentle and full of goodness.
        </p>

        <Link to="/shop" className="hg-green-button">
          Our Products
          <ArrowRight size={15} />
        </Link>

      </div>

    </section>
  );
}