
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import "./FeaturedHerbalSoaps.css";

import heroSoapImage from "../../assets/images/home/soap-mainn.png";

import nalpamaradiImage from "../../assets/images/products/nalpamaradi.png";
import goatMilkImage from "../../assets/images/products/goat-milk.png";
import coconutMilkImage from "../../assets/images/products/coco-milk.png";

const products = [
  {
    id: 1,
    name: "Nalpamaradi",
    subtitle: "Herbal Soap",
    price: "₹120.00",
    image: nalpamaradiImage,
    slug: "nalpamaradi-soap",
  },
  {
    id: 2,
    name: "Goat Milk",
    subtitle: "Herbal Soap",
    price: "₹130.00",
    image: goatMilkImage,
    slug: "goat-milk-soap",
  },
  {
    id: 3,
    name: "Coconut Milk",
    subtitle: "Herbal Soap",
    price: "₹110.00",
    image: coconutMilkImage,
    slug: "coconut-milk-soap",
  },
];

const FeaturedHerbalSoaps = () => {
  return (
    <section className="featured-herbal-section">

      <div className="featured-herbal-container">

        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <div className="featured-left">

          {/* CONTENT */}
          <div className="featured-content">

            <span className="featured-eyebrow">
              FEATURED HERBAL SOAPS
            </span>

            <h2>
              Pure herbs, real
              <br />
              <em>care.</em>
            </h2>

            <p>
              Enriched with traditional Ayurvedic ingredients,
              our soaps cleanse gently, nourish deeply and
              bring out your natural glow.
            </p>

          </div>


          {/* =================================================
              PRODUCTS
          ================================================= */}

          <div className="featured-products">

            {products.map((product) => (
              <article
                className="featured-product-card"
                key={product.id}
              >

                {/* Product Image */}
                <Link
                  to={`/product/${product.slug}`}
                  className="featured-product-image"
                >
                  <img
                    src={product.image}
                    alt={`${product.name} ${product.subtitle}`}
                  />
                </Link>


                {/* Product Info */}
                <div className="featured-product-info">

                  <h3>{product.name}</h3>

                  <span className="featured-product-subtitle">
                    {product.subtitle}
                  </span>


                  <div className="featured-product-bottom">

                    <span className="featured-product-price">
                      {product.price}
                    </span>

                    <Link
                      to={`/product/${product.slug}`}
                      className="featured-view-btn"
                    >
                      <span>View Product</span>

                      <ArrowRight
                        size={13}
                        strokeWidth={2}
                      />
                    </Link>

                  </div>

                </div>

              </article>
            ))}


            {/* VIEW ALL SOAPS */}

            <Link
              to="/shop?category=shop"
              className="featured-main-btn"
            >
              <span>View All Soaps</span>

              <ArrowRight
                size={16}
                strokeWidth={2}
              />
            </Link>

          </div>

        </div>


        {/* =================================================
            RIGHT — LARGE HERO SOAP IMAGE
        ================================================= */}

        <div className="featured-visual">

          <div className="featured-visual-glow" />

          <img
            src={heroSoapImage}
            alt="Aysha's Herbal Care handmade herbal soaps"
            className="featured-hero-product"
          />

        </div>

      </div>

    </section>
  );
};

export default FeaturedHerbalSoaps;
