import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from 'react-router-dom';
import "./AboutPreview.css";

import aboutImage from "../../assets/images/home/home-hero.png";

const AboutPreview = () => {
  return (
    <section className="about-preview">

      <div className="about-preview__container">

        {/* =========================
            LEFT IMAGE
        ========================== */}

        <div className="about-preview__image-wrap">

          <div className="about-preview__image">
            <img
              src={aboutImage}
              alt="Aysha's Herbal Care"
            />
          </div>

          {/* Small floating label */}
          <div className="about-preview__badge">
            <span>✦</span>
            Rooted in Ayurveda
          </div>

        </div>


        {/* =========================
            RIGHT CONTENT
        ========================== */}

        <div className="about-preview__content">

          <span className="about-preview__eyebrow">
            ABOUT US
          </span>

          <h2>
            Simple care,
            <br />
            <em>inspired by nature.</em>
          </h2>

          <p className="about-preview__intro">
            At Aysha's Herbal Care, we believe that good skincare
            begins with nature. Our products are inspired by
            traditional Ayurvedic care and made for the everyday
            needs of your skin and hair.
          </p>

          <p className="about-preview__text">
            From herbal soaps and lip balms to creams and
            hair-care solutions, we bring together carefully
            selected ingredients with a simple approach to
            personal care.
          </p>


          {/* Highlights */}

          <div className="about-preview__highlights">

            <div className="about-highlight">
              <strong>01</strong>

              <div>
                <h4>Nature Inspired</h4>
                <span>Herbal ingredients</span>
              </div>
            </div>


            <div className="about-highlight">
              <strong>02</strong>

              <div>
                <h4>Ayurvedic Roots</h4>
                <span>Traditional care</span>
              </div>
            </div>


            <div className="about-highlight">
              <strong>03</strong>

              <div>
                <h4>Made With Care</h4>
                <span>Everyday wellness</span>
              </div>
            </div>

          </div>


          {/* Button */}

          <Link to="/about" className="about-preview__button">
            Discover Our Story
            <ArrowUpRight size={17} />
          </Link>

        </div>

      </div>

    </section>
  );
};

export default AboutPreview;