import React, { useState } from "react";
import { Star, X } from "lucide-react";
import "./Testimonials.css";

import ppl2 from "../../assets/images/about/ppl2.jpg";
import ppl1 from "../../assets/images/about/ppl1.jpg";
import ppl3 from "../../assets/images/about/ppl3.jpg";

const reviews = [
  {
    name: "Priya S.",
    image: ppl2,
    text: "HerbaGlow products have truly transformed my skin. Natural, gentle and effective. I love it!"
  },
  {
    name: "Arjun K.",
    image: ppl1,
    text: "Finally a skincare brand that actually lives up to its promise. Pure, natural and so refreshing!"
  },
  {
    name: "Sneha R.",
    image: ppl3,
    text: "I've tried many herbal brands, but HerbaGlow is by far the best. My skin feels healthier and brighter!"
  }
];

export default function Testimonials() {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Later you can connect this to your backend/database
    alert("Thank you for sharing your review!");

    setShowReviewForm(false);
    setRating(0);
  };

  return (
    <>
      <section className="hg-testimonials">

        <div className="hg-testimonial-intro">

          <h2>
            What our <br />
            <em>customers say</em>
          </h2>

          <span>Real People. Real Experiences.</span>

          <p>
            We're proud to be a part of your skincare journey.
            Here's what our customers have to say about their
            HerbaGlow experience.
          </p>

          <button
            className="hg-green-button"
            onClick={() => setShowReviewForm(true)}
          >
            Add review
          </button>

        </div>

        <div className="hg-review-grid">

          {reviews.map((review, index) => (
            <div className="hg-review-card" key={index}>

              <div className="hg-review-top">

                <img
                  src={review.image}
                  alt={review.name}
                />

                <div>
                  <div className="hg-stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={10}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                </div>

              </div>

              <p>
                “{review.text}”
              </p>

              <strong>— {review.name}</strong>

            </div>
          ))}

        </div>

      </section>


      {/* REVIEW MODAL */}

      {showReviewForm && (
        <div
          className="hg-review-overlay"
          onClick={() => setShowReviewForm(false)}
        >

          <div
            className="hg-review-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="hg-review-close"
              onClick={() => setShowReviewForm(false)}
              aria-label="Close review form"
            >
              <X size={19} />
            </button>

            <div className="hg-review-modal-heading">

              <span>SHARE YOUR EXPERIENCE</span>

              <h2>
                Write Your <em>Review</em>
              </h2>

              <p>
                We'd love to hear about your experience with
                HerbaGlow.
              </p>

            </div>


            <form
              className="hg-review-form"
              onSubmit={handleSubmit}
            >

              <div className="hg-form-row">

                <div className="hg-form-group">

                  <label>Your Name</label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                  />

                </div>

                <div className="hg-form-group">

                  <label>Email Address</label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                  />

                </div>

              </div>


              {/* STAR RATING */}

              <div className="hg-form-group hg-rating-group">

                <label>Your Rating</label>

                <div className="hg-rating">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      className={
                        star <= rating
                          ? "rating-star active"
                          : "rating-star"
                      }
                      onClick={() => setRating(star)}
                      aria-label={`${star} star`}
                    >
                      <Star
                        size={22}
                        fill={
                          star <= rating
                            ? "currentColor"
                            : "none"
                        }
                      />
                    </button>
                  ))}

                </div>

              </div>


              {/* REVIEW */}

              <div className="hg-form-group">

                <label>Your Review</label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your experience..."
                  required
                />

              </div>


              <button
                type="submit"
                className="hg-submit-review"
              >
                Submit Review
                <span>→</span>
              </button>

            </form>

          </div>

        </div>
      )}
    </>
  );
}