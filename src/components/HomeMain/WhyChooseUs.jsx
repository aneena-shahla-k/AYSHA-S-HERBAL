import React from "react";
import {
  Leaf,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import "./WhyChooseUs.css";

import ayurvedaImage from "../../assets/images/home/ayurveda.png";

const benefits = [
  {
    id: 1,
    icon: Leaf,
    title: "Pure Ayurvedic",
    highlight: "Ingredients",
    description: "No harmful chemicals, no shortcuts.",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "Safe for",
    highlight: "Daily Use",
    description: "Gentle, natural & non-irritating.",
  },
  {
    id: 3,
    icon: Sparkles,
    title: "Visible",
    highlight: "Results",
    description: "Healthier skin & stronger hair, naturally.",
  },
  {
    id: 4,
    icon: Users,
    title: "Trusted by",
    highlight: "Thousands",
    description: "Loved by customers across India.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">

        {/* =====================================================
            LEFT IMAGE
        ===================================================== */}

        <div className="why-choose-image-wrap">
          <div className="why-choose-image-glow" />

          <img
            src={ayurvedaImage}
            alt="Ayurvedic herbs and natural ingredients"
            className="why-choose-image"
          />
        </div>


        {/* =====================================================
            CENTER CONTENT
        ===================================================== */}

        <div className="why-choose-content">

          <span className="why-choose-eyebrow">
            WHY CHOOSE US
          </span>

          <h2>
            The power of ayurveda,
            <br />
            <em>the care you deserve</em>
          </h2>

          <p>
            We bring the purest form of Ayurvedic care, crafted with
            natural ingredients and time-tested wisdom. Because your
            skin and hair deserve nothing but the best.
          </p>

        </div>


        {/* =====================================================
            RIGHT BENEFITS
        ===================================================== */}

        <div className="why-choose-benefits">

          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                className="why-benefit-card"
                key={benefit.id}
              >

                <div className="why-benefit-icon">
                  <Icon
                    size={19}
                    strokeWidth={1.6}
                  />
                </div>

                <div className="why-benefit-info">

                  <h3>
                    {benefit.title}
                    <br />
                    <span>{benefit.highlight}</span>
                  </h3>

                  <p>
                    {benefit.description}
                  </p>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;