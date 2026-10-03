import React from "react";
import {
  Leaf,
  FlaskConical,
  HeartHandshake,
  Recycle,
} from "lucide-react";

import "./WhyChoose.css";
import img from "../../assets/images/about/whychoose.png";

const reasons = [
  {
    icon: Leaf,
    title: "Pure Herbal Formulations",
    text: "Crafted with natural herbs and oils for real skin benefits."
  },
  {
    icon: FlaskConical,
    title: "No Harmful Chemicals",
    text: "Free from parabens, sulfates, and synthetic fragrances."
  },
  {
    icon: HeartHandshake,
    title: "Trusted by Nature Lovers",
    text: "Loved by customers who care about clean and conscious beauty."
  },
  {
    icon: Recycle,
    title: "Eco-Friendly Packaging",
    text: "Because a healthier planet means healthier skin."
  }
];

export default function WhyChoose() {
  return (
    <section className="hg-why">

      <div className="hg-why-content">

        <h2>Why Choose<br/>
        <em>Aysha's herbal</em></h2>

        <p>
          More Than Just Skincare — It’s a Natural Lifestyle
        </p>

        <div className="hg-reasons">

          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="hg-reason" key={index}>

                <div className="hg-reason-icon">
                  <Icon size={17} />
                </div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>

              </div>
            );
          })}

        </div>

       
      </div>

      <div className="hg-why-image">

        <img
          src={img}
          alt="Woman enjoying natural skincare"
        />

        <div className="hg-why-bubble">
          <strong>Real Herbs.</strong>
          <strong>Real Care.</strong>
          <strong>Real You.</strong>

          <span>🌿</span>
        </div>

      </div>

    </section>
  );
}