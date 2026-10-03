import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './FinalCTA.css';
import ctaBackground from '../../assets/images/home/home-heroo.png';


const FinalCTA = () => {
  return (
    <section
  className="final-cta"
  style={{ backgroundImage: `url(${ctaBackground})` }}
>
  <div className="container">
    <div className="final-cta__inner">
      <h2 className="final-cta__title">Care that comes naturally.</h2>

      <p className="final-cta__text">
        Discover herbal skincare and wellness created for your everyday rituals.
      </p>

      <Link to="/shop" className="btn-primary">
        <span>Explore the Collection</span>
        <ArrowRight size={17} />
      </Link>
    </div>
  </div>
</section>
  );
};

export default FinalCTA;
