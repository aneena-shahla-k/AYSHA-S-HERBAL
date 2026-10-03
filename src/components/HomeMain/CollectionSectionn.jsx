
import React from "react";
import "./CollectionSectionn.css";

import img1 from "../../assets/images/home/home-hero.png";
import img2 from "../../assets/images/home/cream-main.png";
import img3 from "../../assets/images/home/facewash-main.png";
import img4 from "../../assets/images/home/food-main.png";

const products = [
  {
    title: "Herbal Soaps",
    description: "Gentle cleansing with nature's goodness.",
    image: img1,
    category: "Soap",
    link: "Explore Soaps",
  },
  {
    title: "Creams",
    description: "Nourish, hydrate and reveal natural glow.",
    image: img2,
    category: "Creams",
    link: "Explore Creams",
  },
  {
    title: "Face Wash",
    description: "Cleanse, refresh and revive your skin.",
    image: img3,
    category: "Face Wash",
    link: "Explore Face Wash",
  },
  {
    title: "Food Products",
    description: "Wholesome goodness for a healthier you.",
    image: img4,
    category: "Food Products",
    link: "Explore Food Products",
  },
];

const CollectionSectionn = () => {
  return (
    <section className="collection-section">
      <div className="collection-container">

        {/* Header */}
        <div className="collection-header">
          <div className="collection-heading">
            <span className="collection-eyebrow">
              EXPLORE OUR COLLECTION
            </span>

            <h2>Care for every need <br/>
             <em>naturally</em>
                 </h2>

            <p>
              From herbal soaps to nourishing creams, refreshing face washes
              and wholesome food products — discover the best of Ayurveda.
            </p>
          </div>

          <a href="/shop" className="collection-view-all">
            <span>View All Products</span>
            <span className="collection-arrow">→</span>
          </a>
        </div>

        {/* Product Cards */}
        <div className="collection-grid">
          {products.map((product) => (
            <article
              className="collection-card"
              key={product.title}
            >
              <div className="collection-image-wrap">
                <img
                  src={product.image}
                  alt={product.title}
                  className="collection-image"
                />
              </div>

              <div className="collection-card-content">
                <h3>{product.title}</h3>

                <p>{product.description}</p>

                <a
                  href={`/shop?category=${encodeURIComponent(
                    product.category
                  )}`}
                  className="collection-card-link"
                >
                  <span>{product.link}</span>
                  <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CollectionSectionn;
