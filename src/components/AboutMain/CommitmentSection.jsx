import React from "react";
import {
  Leaf,
  Recycle,
  Sprout,
  Heart
} from "lucide-react";

import "./CommitmentSection.css";
import commit from "../../assets/images/about/about2.jpg";

const commitments = [
  {
    icon: Leaf,
    title: "Sustainable Sourcing"
  },
  {
    icon: Recycle,
    title: "Recyclable Packaging"
  },
  {
    icon: Sprout,
    title: "Support Local Farmers"
  },
  {
    icon: Heart,
    title: "Planet Friendly Practices"
  }
];

export default function CommitmentSection() {
  return (
    <section className="hg-commitment">

      <div className="hg-commitment-image">
        <img
          src={commit}
          alt="Plant growing from soil"
        />
      </div>

      <div className="hg-commitment-content">

        <span className="hg-section-label">
          OUR COMMITMENT
        </span>

        <h2>For a greener<br/>
             <em>tomorrow</em>
            </h2>

        <p>
          We care about more than just your skin — we care about
          the planet too. That’s why we use eco-friendly packaging,
          source sustainable ingredients and support ethical farming
          practices. With every product you choose, you're helping
          us create a healthier, greener future.
        </p>

        <div className="hg-commitment-grid">

          {commitments.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="hg-commitment-item" key={index}>

                <div>
                  <Icon size={17} />
                </div>

                <span>{item.title}</span>

              </div>
            );
          })}

        </div>

      </div>

      <div className="hg-commitment-quote">
        <strong>
          “Small choices
          <br />
          make a big difference.”
        </strong>

        <span>🌿</span>
      </div>

    </section>
  );
}