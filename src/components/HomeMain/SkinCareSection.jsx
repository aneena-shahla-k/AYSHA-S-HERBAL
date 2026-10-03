
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./SkinCareSection.css";

import skinCareImage from "../../assets/images/home/skin.png";

import vitaminGoldImage from "../../assets/images/products/vit-c.png";
import suvarnaKantiImage from "../../assets/images/products/suvarna.png";
import gentleGlowImage from "../../assets/images/products/gentle-glow.png";

const skinProducts = [
  {
    id: 1,
    name: "Vitamin C Gold",
    type: "Normal Skin",
    price: "₹290.00",
    image: vitaminGoldImage,
    slug: "vitamin-c-gold-facewash",
  },
  {
    id: 2,
    name: "Suvarna Kanti",
    type: "Dry Skin",
    price: "₹375.00",
    image: suvarnaKantiImage,
    slug: "suvarna-kanti-facewash",
  },
  {
    id: 3,
    name: "Gentle Glow",
    type: "Sensitive Skin",
    price: "₹365.00",
    image: gentleGlowImage,
    slug: "gentle-glow-facewash",
  },
];

const SkinCareSection = () => {
  return (
    <section className="skincare-section">

      <div className="skincare-container">

        {/* =====================================================
            LEFT — FULL BACKGROUND IMAGE
        ===================================================== */}

        <div className="skincare-background">
          <img
            src={skinCareImage}
            alt="Aysha's Herbal Care skincare"
            className="skincare-background-image"
          />
        </div>


        {/* =====================================================
            RIGHT — CONTENT + PRODUCTS
        ===================================================== */}

        <div className="skincare-right">

          {/* ===================================================
              HEADING + DESCRIPTION
          =================================================== */}

          <div className="skincare-header">

            <span className="skincare-eyebrow">
              SKIN CARE
            </span>

            <h2>
              Care for Your Skin,
              <br />
              <em>Your Way.</em>
            </h2>

            <p>
              From brightening to deep nourishment,
              our creams and face washes are crafted
              for every skin type and need.
            </p>

            {/* EXPLORE SKIN CARE */}

            <Link
              to="/shop?category=Face%20Wash"
              className="skincare-main-btn"
            >
              <span>Explore Skin Care</span>

              <ArrowRight
                size={15}
                strokeWidth={2}
              />
            </Link>

          </div>


          {/* ===================================================
              PRODUCTS
          =================================================== */}

          <div className="skincare-products">

            {skinProducts.map((product) => (
              <article
                className="skincare-product-card"
                key={product.id}
              >

                {/* PRODUCT IMAGE */}

                <Link
                  to={`/product/${product.slug}`}
                  className="skincare-product-image"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                </Link>


                {/* PRODUCT INFO */}

                <div className="skincare-product-info">

                  <span className="skincare-product-type">
                    {product.type}
                  </span>

                  <h3>
                    {product.name}
                  </h3>

                  <div className="skincare-product-bottom">

                    <strong>
                      {product.price}
                    </strong>

                    {/* VIEW PRODUCT */}

                    <Link
                      to={`/product/${product.slug}`}
                      className="skincare-view-btn"
                    >
                      <span>View Product</span>

                      <ArrowRight
                        size={12}
                        strokeWidth={2}
                      />
                    </Link>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default SkinCareSection;
