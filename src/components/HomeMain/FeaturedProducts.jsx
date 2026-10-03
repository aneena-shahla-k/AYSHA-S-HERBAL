import React from "react";
import { ArrowRight } from "lucide-react";
import "./FeaturedProducts.css";

// Product images
import nalpamaradiImage from "../../assets/images/products/nalpamaradi.png";
import goatMilkImage from "../../assets/images/products/goat-milk.png";
import coconutMilkImage from "../../assets/images/products/coco-milk.png";
import hydraGlowImage from "../../assets/images/products/hygra-glow.png";

const products = [
  {
    id: 1,
    name: "Nalpamaradi Soap",
    category: "Herbal Soap",
    price: "₹120.00",
    image: nalpamaradiImage,
  },
  {
    id: 2,
    name: "Goat Milk Soap",
    category: "Herbal Soap",
    price: "₹130.00",
    image: goatMilkImage,
  },
  {
    id: 3,
    name: "Coconut Milk Soap",
    category: "Herbal Soap",
    price: "₹110.00",
    image: coconutMilkImage,
  },
  {
    id: 4,
    name: "Hydra Glow Body Cream",
    category: "Body Care",
    price: "₹299.00",
    image: hydraGlowImage,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="featuredd-products-section">
      <div className="featureddd-products-container">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="featuredd-products-header">

          <div className="featuredd-products-heading">
{/* 
            <span className="featured-products-eyebrow">
              FEATURED PRODUCTS
            </span> */}

            <h2>
              Featured products
            </h2>

          </div>
{/* 
          <p className="featured-products-description">
            Thoughtfully crafted Ayurvedic essentials made with
            natural ingredients to bring gentle, everyday care
            to your skin and body.
          </p> */}

        </div>


        {/* =====================================================
            PRODUCTS
        ===================================================== */}

        <div className="featuredd-products-grid">

          {products.map((product) => (
            <article
              className="featuredd-product-item"
              key={product.id}
            >

              {/* IMAGE */}

              <div className="featuredd-product-image-wrap">

                <div className="featuredd-product-image-bg" />

                <img
                  src={product.image}
                  alt={product.name}
                  className="featuredd-product-image"
                />

                <button
                  className="featuredd-product-arrow"
                  aria-label={`View ${product.name}`}
                >
                  <ArrowRight
                    size={16}
                    strokeWidth={1.8}
                  />
                </button>

              </div>


              {/* INFO */}

              <div className="featuredd-product-info">

                <span className="featuredd-product-category">
                  {product.category}
                </span>

                <h3>
                  {product.name}
                </h3>

                <div className="featuredd-product-meta">

                  <span className="featuredd-product-price">
                    {product.price}
                  </span>

                  <button className="featuredd-product-view">
                    <span>View Product</span>

                    <ArrowRight
                      size={13}
                      strokeWidth={2}
                    />
                  </button>

                </div>

              </div>

            </article>
          ))}

        </div>


        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <div className="featuredd-products-footer">

          <button className="featuredd-products-all-btn">
            <span>View All Products</span>

            <ArrowRight
              size={15}
              strokeWidth={2}
            />
          </button>

        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;