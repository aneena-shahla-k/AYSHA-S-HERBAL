import React from "react";
import {
  Leaf,
  Heart,
  PawPrint,
  Globe2
} from "lucide-react";

import "./MissionValues.css";

const values = [
  {
    icon: Leaf,
    title: "100% Natural",
    text: "Pure herbal ingredients, no harmful chemicals."
  },
  {
    icon: Heart,
    title: "Skin Safe",
    text: "Gentle on your skin, safe for everyday use."
  },
  {
    icon: PawPrint,
    title: "Cruelty Free",
    text: "Never tested on animals, always kind."
  },
  {
    icon: Globe2,
    title: "Sustainable",
    text: "Better for your skin, kinder to the planet."
  }
];

export default function MissionValues() {
  return (
    <section className="hg-values">

      <div className="hg-values-intro">
        <h2>Our Mission & Values</h2>

        <p>
          We are committed to creating natural, safe and effective
          herbal skincare products that promote healthy skin and
          a sustainable future. Our mission is to bring the goodness
          of nature to your daily skincare routine, while protecting
          the environment for generations to come.
        </p>
      </div>

      <div className="hg-value-grid">
        {values.map((item, index) => {
          const Icon = item.icon;

          return (
            <div className="hg-value-card" key={index}>

              <div className="hg-value-icon">
                <Icon size={21} strokeWidth={1.5} />
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>
          );
        })}
      </div>

    </section>
  );
}