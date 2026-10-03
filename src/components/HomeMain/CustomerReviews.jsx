import React from 'react';
import { Star } from 'lucide-react';
import './CustomerReviews.css';

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Anjali S.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
      rating: 5,
      text: "The skin allergy balm really works! My skin feels calm, hydrated and healthy now.",
      product: "Skin Allergy Relief Balm"
    },
    {
      name: "Meera K.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
      rating: 5,
      text: "Love the herbal beetroot lip balm. It keeps my lips soft, smooth and fresh all day long.",
      product: "Beetroot Lip Balm"
    },
    {
      name: "Rahul P.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
      rating: 5,
      text: "The hair care oil reduced my dandruff and hair fall within three weeks. Highly recommended!",
      product: "Ayurvedic Hair Care Oil"
    }
  ];

  return (
    <section className="customer-reviews">
      <div className="container">
        
        {/* Header */}
        <div className="section-header-wrap">
          <div>
            <span className="testimonial-eyebrow">TESTIMONIALS</span>
            <h2 className="testimonial-section-title">What our customers say</h2>
            <p className="testimonial-section-subtitle">Real people. Real results.</p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {reviews.map((rev, index) => (
            <div key={index} className="review-card">
              <div className="review-card__header">
                <img src={rev.avatar} alt={rev.name} className="review-avatar" />
                <div>
                  <div className="review-stars">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#eab308" color="#eab308" />
                    ))}
                  </div>
                  <span className="review-product">{rev.product}</span>
                </div>
              </div>

              <p className="review-text">"{rev.text}"</p>
              <div className="review-author">— {rev.name}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CustomerReviews;
