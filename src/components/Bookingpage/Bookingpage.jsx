import React from "react";
import { Link } from "react-router-dom"; 
export default function MainContent() {
  return (
    <main id="main-content" role="main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <h1 id="hero-title">بلسمي</h1>
          <h2>منصتك... لحلول صحية ذكية</h2>
        </div>
      </section>
      <div className="container">
        <div className="booking-card" role="region" aria-labelledby="booking-title">
          <div className="booking-content">
            <div className="booking-info">
              <div className="booking-icon" aria-hidden="true">
                <i className="fa-solid fa-calendar"></i>
              </div>
              <div className="booking-text">
                <h3 id="booking-title">هل ترغب بحجز موعد؟</h3>
                <p>احجز موعدك لدى إحدى المراكز بخطوات بسيطة وسريعة</p>
              </div>
            </div>
            <Link
              to="/firstpage"
              className="book-now-btn"
              role="button"
              aria-label="احجز موعدك الآن"
            >
              احجز الآن
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
