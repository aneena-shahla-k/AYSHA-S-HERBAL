import React from 'react';
import { Leaf, Flower2, ShieldCheck, Award } from 'lucide-react';
import './TrustFeatures.css';

const TrustFeatures = () => {
  const features = [
    {
      icon: <Leaf size={24} strokeWidth={1.5} />,
      title: "100% Natural",
      subtitle: "Ingredients"
    },
    {
      icon: <Flower2 size={24} strokeWidth={1.5} />,
      title: "Herbal",
      subtitle: "Formulations"
    },
    {
      icon: <ShieldCheck size={24} strokeWidth={1.5} />,
      title: "Gentle & Safe",
      subtitle: "for Daily Use"
    },
    {
      icon: <Award size={24} strokeWidth={1.5} />,
      title: "Premium Quality",
      subtitle: "Products"
    },

  ];

  return (
    <section className="trust-features">
      <div className="container">
        <div className="trust-features__grid">
          {features.map((item, index) => (
            <div key={index} className="trust-feature-item">
              <div className="trust-feature-item__icon">
                {item.icon}
              </div>
              <div className="trust-feature-item__text">
                <strong>{item.title}</strong>
                <span>{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustFeatures;
