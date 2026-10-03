import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ArrowRight, CheckCircle2 } from 'lucide-react';
import './CategoryCard.css';

const CategoryCard = ({ concern }) => {
  return (
    <div className="concern-card">
      {/* Top Image Arch Framing */}
      <div className="concern-card__image-wrap">
        <div className="concern-card__arch">
          <img src={concern.image} alt={concern.title} loading="lazy" />
        </div>
        <div className="concern-card__icon-badge">
          <Leaf size={16} />
        </div>
      </div>

      {/* Card Body */}
      <div className="concern-card__content">
        <h3 className="concern-card__title">{concern.title}</h3>
        <p className="concern-card__desc">{concern.description}</p>

        {concern.benefits && concern.benefits.length > 0 && (
          <ul className="concern-card__benefits">
            {concern.benefits.map((benefit, idx) => (
              <li key={idx}>
                <CheckCircle2 size={13} className="benefit-icon" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        )}

        <Link to={`/shop?category=${encodeURIComponent(concern.category)}`} className="concern-card__btn">
          <span>Shop Now</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
