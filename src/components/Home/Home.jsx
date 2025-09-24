import React, { memo, useEffect, useState } from "react";
import '../../Style/Home.css';
import { useNavigate } from "react-router-dom";

const Home = memo(() => {
  const navigate = useNavigate();
  const [topDoctors, setTopDoctors] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [mostClinics, setMostClinics] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchTop = async () => {
      try {
        const res = await fetch('https://enqlygo.com/api/salons/most_booking_staff');
        const data = await res.json();
        if (isMounted && data && data.status === 'success' && Array.isArray(data.data)) {
          setTopDoctors(data.data);
        }
      } catch (err) {
        console.warn('Top doctors fetch error:', err);
      }
    };
    fetchTop();
    return () => { isMounted = false; };
  }, []);

  useEffect(() => {
    let isMounted = true;
    const fetchClinics = async () => {
      try {
        const res = await fetch('https://enqlygo.com/api/salons/most_booking_salons');
        const json = await res.json();
        const list = json?.data?.data || [];
        if (isMounted) setMostClinics(list);
      } catch (err) {
        console.warn('Most clinics fetch error:', err);
      }
    };
    fetchClinics();
    return () => { isMounted = false; };
  }, []);

  useEffect(() => {
    let isMounted = true;
    const fetchReviews = async () => {
      try {
        const res = await fetch('https://enqlygo.com/api/salons/reviews');
        const json = await res.json();
        const list = json?.data?.data || [];
        if (isMounted) setReviews(list);
      } catch (err) {
        console.warn('Reviews fetch error:', err);
      }
    };
    fetchReviews();
    return () => { isMounted = false; };
  }, []);

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
  onClick={() => navigate("/Bookingnow")}
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
                  <div className="booking-header" aria-label="عنوان ووصف الحجز مع أيقونة">
                    <i className="fa-solid fa-calendar" aria-hidden="true"></i>
                    <div className="booking-texts">
                      <h3 className="booking-title">هل ترغب بحجز موعد ؟</h3>
                      <p className="booking-description">احجز موعدك لدى إحدى المراكز بخطوات بسيطة</p>
                    </div>
                  </div>
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
      {/* App Showcase Section */}
      <section className="home-app-showcase-section" aria-label="واجهات تطبيق بلسمي">
        <div className="container">
          <div className="app-showcase-grid">
            {[
              'https://blsmy.com/images/screenshot1.webp',
              'https://blsmy.com/images/screenshot2.webp',
              'https://blsmy.com/images/screenshot3.webp',
              'https://blsmy.com/images/screenshot4.webp',
              'https://blsmy.com/images/screenshot5.webp'
            ].map((src, i) => (
              <div key={i} className="phone-mock">
                <img src={src} alt={`app screen ${i+1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Doctors Slider on Home */}
      <section className="home-categories-section">
        <div className="container">
          <h2 className="home-categories-title">العيادات الأكثر حجزًا</h2>
          <div className="home-categories-wrapper">
            <button type="button" className="home-categories-arrow prev" onClick={(e) => {
              const el = e.currentTarget.parentElement.querySelector('.home-categories-slider');
              if (el) el.scrollBy({ left: -320, behavior: 'smooth' });
            }}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
            <div className="home-categories-slider" dir="rtl">
              {(mostClinics && mostClinics.length > 0 ? mostClinics.map((c) => ({
                id: c.id,
                title: c.salon_name,
                icon: c.owner_photo || (c.staff && c.staff[0]?.photo ? `https://enqlygo.com/storage/${c.staff[0].photo}` : 'https://api.blsmy.com/uploads/Clinic_e7bd3858-c7c2-4530-b671-cc1b8e3f7f43.png')
              })) : [
                { id: 1, title: 'العظام', icon: 'https://api.blsmy.com/uploads/954ffa59-1c31-4252-a3e3-2107befe9ec1.png' },
                { id: 2, title: 'العيون', icon: 'https://api.blsmy.com/uploads/ea96aaf3-f535-4395-9996-0c6c0adf6de6.png' },
                { id: 3, title: 'طب عام', icon: 'https://api.blsmy.com/uploads/Clinic_e7bd3858-c7c2-4530-b671-cc1b8e3f7f43.png' },
                { id: 4, title: 'الجراحة', icon: 'https://api.blsmy.com/uploads/85b538e4-b68b-443e-8abf-778f9733e5d8.png' },
                { id: 5, title: 'التجميل', icon: 'https://api.blsmy.com/uploads/Clinic_8dadc860-d0a3-430d-9e80-fd3fd6100b46.png' },
                { id: 6, title: 'المسالك البولية', icon: 'https://api.blsmy.com/uploads/Clinic_71ab9afe-f6ff-445e-87a6-1d0e1a92b2c8.png' }
              ]).map((c) => (
                <div key={c.id} className="home-category-card" role="button" tabIndex={0}>
                  <div className="home-category-icon">
                    <img src={c.icon} alt={c.title} loading="lazy" />
                  </div>
                  <div className="home-category-title">{c.title}</div>
              </div>
              ))}
            </div>
            <button type="button" className="home-categories-arrow next" onClick={(e) => {
              const el = e.currentTarget.parentElement.querySelector('.home-categories-slider');
              if (el) el.scrollBy({ left: 320, behavior: 'smooth' });
            }}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
              </div>
            </div>
      </section>
      {/* Doctors Slider on Home */}
      <section className="home-doctors-slider-section">
        <div className="container">
          <h2 className="home-doctors-title">الأطباء الأكثر حجزًا</h2>
          <div className="home-slider-wrapper">
            <button type="button" className="home-slider-arrow prev" onClick={(e) => {
              const el = e.currentTarget.parentElement.querySelector('.home-doctors-slider');
              if (el) el.scrollBy({ left: -320, behavior: 'smooth' });
            }}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          <div className="home-doctors-slider" dir="rtl">
            {(topDoctors && topDoctors.length > 0 ? topDoctors : []).map((d) => (
              <article key={d.id} className="home-doctor-card" aria-label={d.name}>
                <div className="home-doctor-card-media">
                  <img src={`https://enqlygo.com/storage/${d.photo}`} alt={d.name} loading="lazy" />
                  <div className="home-rating"><i className="fa-solid fa-star"></i> {d.rating || 0}</div>
                </div>
                <div className="home-doctor-card-body">
                  <h3 className="home-doctor-card-name">{d.name}</h3>
                  <div className="home-doctor-card-spec">{d.salon?.services?.[0]?.title_ar || '—'}</div>
                  <div className="home-doctor-card-city">{d.salon?.salon_address || ''}</div>
              </div>
              </article>
            ))}
            {topDoctors.length === 0 && [1,2,3,4,5].map((i) => (
              <article key={`skeleton-${i}`} className="home-doctor-card" aria-hidden="true">
                <div className="home-doctor-card-media" style={{background:'#f3f4f6'}}>
            </div>
                <div className="home-doctor-card-body">
                  <div className="home-doctor-card-name" style={{height:18, background:'#e5e7eb', borderRadius:6}}></div>
                  <div className="home-doctor-card-spec" style={{height:14, background:'#eef2f7', borderRadius:6, marginTop:8}}></div>
                  <div className="home-doctor-card-city" style={{height:14, background:'#eef2f7', borderRadius:6, marginTop:8}}></div>
              </div>
              </article>
            ))}
            </div>
            <button type="button" className="home-slider-arrow next" onClick={(e) => {
              const el = e.currentTarget.parentElement.querySelector('.home-doctors-slider');
              if (el) el.scrollBy({ left: 320, behavior: 'smooth' });
            }}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="home-testimonials-section" aria-label="آراء العملاء">
        <div className="container">
          <h2 className="home-testimonials-title">آراء العملاء</h2>
          <div className="home-testimonials-wrapper">
            <button
              type="button"
              className="home-testimonials-arrow prev"
              onClick={(e) => {
                const el = e.currentTarget.parentElement.querySelector('.home-testimonials-slider');
                if (el) el.scrollBy({ left: -360, behavior: 'smooth' });
              }}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
            <div className="home-testimonials-slider" dir="rtl">
              {(reviews && reviews.length > 0 ? reviews : []).map((t) => (
                <article key={t.id} className="testimony-card" aria-label={t?.user?.fullname || 'مراجع'}>
                  <div className="testimony-header">
                    <div className="testimony-user">
                      <img src={t?.user?.profile_image} alt={t?.user?.fullname || 'مراجع'} loading="lazy" />
                      <div className="testimony-meta">
                        <div className="user-name">{t?.user?.fullname || t?.user?.identity || 'مراجع'}</div>
                        <div className="user-sub">{t?.salon?.salon_name || ''}</div>
                        <div className="user-sub">{t?.salon?.salon_address || ''}</div>
                        <div className="stars" aria-label={`${t?.rating || 0} نجوم`}>
                          {Array.from({ length: 5 }).map((_, i) => (
                            <i key={i} className={`fa-solid fa-star${i < (t?.rating || 0) ? '' : ''}`}></i>
                          ))}
              </div>
            </div>
            </div>
            </div>
                  <div className="testimony-body">{t?.comment}</div>
                </article>
              ))}
              {reviews.length === 0 && [1,2,3].map((i) => (
                <article key={`t-skel-${i}`} className="testimony-card" aria-hidden="true">
                  <div className="testimony-header">
                    <div className="testimony-user">
                      <div style={{width:56,height:56,borderRadius:'50%',background:'#e5e7eb'}}></div>
                      <div className="testimony-meta" style={{width:'100%'}}>
                        <div className="user-name" style={{height:14,background:'#e5e7eb',borderRadius:6,marginBottom:6}}></div>
                        <div className="user-sub" style={{height:12,background:'#f1f5f9',borderRadius:6,marginBottom:6}}></div>
                        <div className="user-sub" style={{height:12,background:'#f1f5f9',borderRadius:6}}></div>
              </div>
            </div>
          </div>
                  <div className="testimony-body" style={{height:16,background:'#eef2f7',borderRadius:6,marginTop:12}}></div>
                </article>
              ))}
            </div>
            <button
              type="button"
              className="home-testimonials-arrow next"
              onClick={(e) => {
                const el = e.currentTarget.parentElement.querySelector('.home-testimonials-slider');
                if (el) el.scrollBy({ left: 360, behavior: 'smooth' });
              }}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            </div>
          <div className="home-dots" aria-hidden="true">
            <span></span><span></span><span></span><span></span>
          </div>
        </div>
      </section>
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