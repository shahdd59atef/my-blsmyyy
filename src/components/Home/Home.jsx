import React, { memo } from "react";
import '../../Style/Home.css';

const Home = memo(() => {
  return (
    <div className="home-page">
      <section className="hero-section text-white py-5">
        <div className="container">
          <div className="row align-items-center min-vh-50">
            <div className="col-lg-6 offset-lg-6 text-end">
              <h1 className="display-4 fw-bold mb-4" style={{ color: '#00bdc3' }}>
                بلسمي
              </h1>
              <p className="mb-4" style={{ color: '#666', fontSize: '1.5rem', fontWeight: 'bold' }}>
                منصتك....لحلول صحيه ذكيه
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="booking-section-overlay" role="region" aria-label="حجز المواعيد">
        <div className="container">
          <div className="booking-container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="booking-actions">
                  <button
                    className="btn btn-booking"
                    type="button"
                    aria-label="احجز موعدك الآن"
                    onClick={() => {
                      console.log('Booking button clicked');
                    }}
                  >
                    احجز الآن
                  </button>
                  <div className="booking-icon" aria-hidden="true">
                    <i className="bi bi-calendar3" role="img" aria-label="أيقونة التقويم"></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="booking-content">
                  <h3 className="booking-title">هل ترغب بحجز موعد ؟</h3>
                  <p className="booking-description">
                    احجز موعدك لدى إحدى المراكز بخطوات بسيطة....
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="home">
        <h2 className="section-title">خدمات بلسمي</h2>
        <div className="features">
          <div className="feature-card">
            <img
              src="https://blsmy.com/images/bookReservations.svg"
              alt="حجز المواعيد"
            />
            <h3>حجز المواعيد</h3>
            <p>
              نظام حجز مواعيد متطور لتسهيل إدارة مواعيد عملائك وتنظيمها بخطوات بسيطة ومرنة.
            </p>
          </div>

          <div className="feature-card">
            <img
              src="https://blsmy.com/images/ratingsSystem.jpg"
              alt="نظام التقييمات"
            />
            <h3>نظام التقييمات</h3>
            <p>
              إمكانية تقييم الخدمة بعد كل حجز لتمكين عملائك من التعبير عن تجاربهم وتعزيز ثقة الآخرين.
            </p>
          </div>

          <div className="feature-card">
            <img
              src="https://blsmy.com/images/kiosk.png"
              alt="الخدمة الذاتية"
            />
            <h3>الخدمة الذاتية</h3>
            <p>
              حل ذكي يقلل الزحام ويرفع كفاءة التشغيل في منشآتك الصحية على مدار 24/7.
            </p>
          </div>

          <div className="feature-card">
            <img
              src="https://blsmy.com/images/customApp.png"
              alt="تطبيق الجوال"
            />
            <h3>تطبيق جوال خاص</h3>
            <p>
              تطبيق بوية مركزك يتيح للمراجع حجز المواعيد ومتابعة ملفه الطبي والتنبيهات بسهولة.
            </p>
          </div>
        </div>
      </div>
      <a
        href="https://wa.me/966500000000"
        className="whatsapp-float"
        aria-label="تواصل معنا عبر واتساب"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.lTqMPiPP11QPJ0FFSx9h6gHaHc?pid=Api&P=0&h=220"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
});

Home.displayName = 'Home';
export default Home;
