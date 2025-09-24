import React, { useState, useEffect } from "react";
import "../../Style/Bookingnow.css";

function Bookingnow() {
  const [formData, setFormData] = useState({
    date: "",
    category: "",
    doctor: "",
    specialty: "",
    medicalCenter: "",
    city: "",
    searchQuery: "",
    groupBy: "no-grouping"
  });

  const [doctors, setDoctors] = useState([]);
  const [categoriesApi, setCategoriesApi] = useState([]);
  const [ratingsApi, setRatingsApi] = useState([]);
  const [salons, setSalons] = useState([]);
  const [citiesApi, setCitiesApi] = useState([]);
  // Removed binding per request

  useEffect(() => {
    let isMounted = true;
    const fetchDoctors = async () => {
      try {
        const res = await fetch('https://enqlygo.com/api/salons/doctors');
        const data = await res.json();
        if (isMounted && data && data.status === 'success' && Array.isArray(data.data)) {
          setDoctors(data.data);
        }
      } catch (err) {
        console.warn('Doctors fetch error:', err);
      }
    };
    fetchDoctors();
    return () => { isMounted = false; };
  }, []);

  // Keep UI width stable: trim long addresses for label only, keep full value
  const formatAddress = (addr) => {
    const raw = String(addr || '').replace(/\n/g, ' - ').replace(/\s+/g, ' ').trim();
    const label = raw.length > 28 ? raw.slice(0, 28) + '…' : raw;
    return { label, value: raw };
  };

  useEffect(() => {
    let mounted = true;
    const fetchCategories = async () => {
      try {
        const res = await fetch('https://enqlygo.com/api/salons/categories');
        const data = await res.json();
        if (mounted && data && data.status === 'success' && Array.isArray(data.data)) {
          setCategoriesApi(data.data);
        }
      } catch (e) {
        console.warn('Categories fetch error:', e);
      }
    };
    fetchCategories();
    return () => { mounted = false; };
  }, []);

  // Fetch salons for medical center options
  useEffect(() => {
    let mounted = true;
    const fetchSalons = async () => {
      try {
        const res = await fetch('https://enqlygo.com/api/salons');
        const data = await res.json();
        if (mounted && data && data.status === 'success' && Array.isArray(data.data)) {
          setSalons(data.data);
        }
      } catch (e) {
        console.warn('Salons fetch error:', e);
      }
    };
    fetchSalons();
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    let mounted = true;
    const fetchSalonsForRatings = async () => {
      try {
        const res = await fetch('https://enqlygo.com/api/salons');
        const data = await res.json();
        if (mounted && data && data.status === 'success' && Array.isArray(data.data)) {
          const uniqueRatings = Array.from(new Set(
            data.data
              .map((s) => Number(s.reviews_avg_rating ?? s.rating ?? 0))
              .filter((n) => !Number.isNaN(n) && n > 0)
          ))
            .sort((a,b)=>b-a);
          setRatingsApi(uniqueRatings);
        }
      } catch (e) {
        console.warn('Ratings fetch error:', e);
      }
    };
    fetchSalonsForRatings();
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    let mounted = true;
    const fetchAddresses = async () => {
      try {
        const res = await fetch('https://enqlygo.com/api/salons/addresses');
        const data = await res.json();
        if (mounted && data && data.status === 'success' && Array.isArray(data.data)) {
          setCitiesApi(data.data);
        }
      } catch (e) {
        console.warn('Cities fetch error:', e);
      }
    };
    fetchAddresses();
    return () => { mounted = false; };
  }, []);

  // Removed centers fetching

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Build payload using available fields and safe defaults without changing UI
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const dateStr = formData.date || `${yyyy}-${mm}-${dd}`;
    const payload = {
      salon_id: 5,
      staff_id: 15,
      address_id: 16,
      date: dateStr,
      time: '10:30',
      duration: 45,
      services: formData.specialty || formData.category || 'General',
      discount_amount: 0,
      subtotal: 0,
      total_tax_amount: 0,
      payable_amount: 0,
      payment_type: 0,
      is_rated: 0,
      is_coupon_applied: 0,
      coupon_title: null,
      service_amount: 0,
      service_location: 0
    };
    try {
      const response = await fetch('https://enqlygo.com/api/user/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (!response.ok) {
        console.warn('Booking 4xx/5xx:', response.status, data);
      } else {
        console.log('Booking success:', data);
      }
    } catch (error) {
      console.error('Booking error:', error);
    }
  };

  return (
    <div className="booking-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-title-row" aria-label="عنوان احجز موعدك">
            <h1 className="hero-title">احجز موعدك</h1>
          </div>
        </div>
      </section>
      <section className="booking-form-section">
        <div className="container">
          <div className="booking-form-container">
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="dropdowns-row">
                {/* المدينة */}
                <div className="dropdown-group">
                  <label className="dropdown-label">
                    <i className="bi bi-geo-alt"></i>
                    المدينة
                  </label>
                  <select 
                    className="dropdown-select" 
                    name="city" 
                    value={formData.city} 
                    onChange={handleChange}
                  >
                    <option value="">الكل</option>
                    <option value="riyadh">الرياض</option>
                    <option value="jeddah">جدة</option>
                    <option value="dammam">الدمام</option>
                    {citiesApi && citiesApi.length > 0 && citiesApi.map((addr, idx) => {
                      const { label, value } = formatAddress(addr);
                      return (
                        <option key={`city-${idx}`} value={value} title={value}>{label}</option>
                      );
                    })}
                  </select>
                </div>

                {/* المركز الطبي */}
                <div className="dropdown-group">
                  <label className="dropdown-label">
                    <i className="bi bi-building"></i>
                    المركز الطبي
                  </label>
                  <select 
                    className="dropdown-select" 
                    name="medicalCenter" 
                    value={formData.medicalCenter} 
                    onChange={handleChange}
                  >
                    <option value="">الكل</option>
                    <option value="center1">مركز الرياض الطبي</option>
                    <option value="center2">مستشفى الملك فهد</option>
                    {salons && salons.length > 0 && salons.map((s, idx) => {
                      const name = s.salon_name || s.owner_name || '';
                      const { label, value } = formatAddress(name);
                      return (
                        <option key={`salon-${s.id || idx}`} value={value} title={value}>{label}</option>
                      );
                    })}
                    
                  </select>
                </div>

                {/* التخصص */}
                <div className="dropdown-group">
                  <label className="dropdown-label">
                    <i className="bi bi-heart-pulse"></i>
                    التخصص
                  </label>
                  <select 
                    className="dropdown-select" 
                    name="specialty" 
                    value={formData.specialty} 
                    onChange={handleChange}
                  >
                    <option value="">الكل</option>
                    <option value="cardiology">أمراض القلب</option>
                    <option value="dermatology">الأمراض الجلدية</option>
                    <option value="orthopedics">العظام</option>
                    {categoriesApi && categoriesApi.length > 0 && categoriesApi.map((cat) => (
                      <option key={`cat-${cat.id}`} value={cat.title_ar || cat.title || ''}>
                        {cat.title_ar || cat.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* الطبيب */}
                <div className="dropdown-group">
                  <label className="dropdown-label">
                    <i className="bi bi-person"></i>
                    الطبيب
                  </label>
                  <select 
                    className="dropdown-select" 
                    name="doctor" 
                    value={formData.doctor} 
                    onChange={handleChange}
                  >
                    <option value="">الكل</option>
                    {doctors && doctors.length > 0 ? (
                      doctors.map((name, idx) => (
                        <option key={idx} value={name}>{name}</option>
                      ))
                    ) : (
                      <>
                        <option value="د. أحمد محمد">د. أحمد محمد</option>
                        <option value="د. سارة أحمد">د. سارة أحمد</option>
                      </>
                    )}
                  </select>
                </div>

                {/* التصنيف */}
                <div className="dropdown-group">
                  <label className="dropdown-label">
                    <i className="bi bi-star"></i>
                    التصنيف
                  </label>
                  <select 
                    className="dropdown-select" 
                    name="category" 
                    value={formData.category} 
                    onChange={handleChange}
                  >
                    <option value="">الكل</option>
                    <option value="general">عام</option>
                    <option value="specialist">متخصص</option>
                    {categoriesApi && categoriesApi.length > 0 && categoriesApi.map((cat) => (
                      <option key={`cat-opt-${cat.id}`} value={cat.title_ar || cat.title || ''}>
                        {cat.title_ar || cat.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* التاريخ */}
                <div className="dropdown-group">
                  <label className="dropdown-label">
                    <i className="bi bi-calendar3"></i>
                    التاريخ
                  </label>
                  <select 
                    className="dropdown-select" 
                    name="date" 
                    value={formData.date} 
                    onChange={handleChange}
                  >
                    <option value="">الكل</option>
                    <option value="today">اليوم</option>
                    <option value="tomorrow">غداً</option>
                    <option value="this-week">هذا الأسبوع</option>
                    {salons && salons.length > 0 && Array.from(new Set(
                      salons
                        .map((s) => (s.created_at || '').slice(0,10))
                        .filter(Boolean)
                    )).map((d, idx) => (
                      <option key={`date-${idx}`} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div className="search-col">
                  <button type="submit" className="search-btn">بحث</button>
                </div>
              </div>
              

              <div className="search-bar contaniar">
                <div className="search-input-row">
                <input
                  type="text"
                  className="search-input"
                  placeholder="ابحث عن طبيب أو عيادة أو مركز طبي"
                  name="searchQuery"
                  value={formData.searchQuery}
                  onChange={handleChange}
                />
              </div>
              </div>
              <div className="group-by-row">
                <span className="group-by-text">التجميع حسب:</span>
                <select 
                  className="group-by-select" 
                  name="groupBy" 
                  value={formData.groupBy} 
                  onChange={handleChange}
                >
                  <option value="no-grouping">بدون تجميع</option>
                  <option value="by-specialty">حسب التخصص</option>
                  <option value="by-center">حسب المركز</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Results Cards (bound to API salons) */}
      <section className="booking-results-section">
        <div className="container">
          <div className="booking-cards-grid">
            {(salons || [])
              .map((s, idx) => {
                const name = s.salon_name || s.owner_name || '';
                const imgPath = s.owner_photo || (s.images && s.images[0]?.image ? `https://enqlygo.com/storage/${s.images[0].image}` : '');
                const center = (s.salon_address || '').replace(/\n/g, ' ');
                const city = center || '';
                return {
                  id: s.id || idx,
                  name,
                  img: imgPath,
                  specialty: (s.services && s.services[0]?.title_ar) || '—',
                  center,
                  city,
                  nextTime: '—',
                  fee: s.reviews_avg_rating ? `${s.reviews_avg_rating} :التقييم` : '—'
                };
              })
              .filter(card => card.name && card.img)
              .map((card) => (
                <div key={card.id} className="booking-card">
                  <div className="booking-card-image">
                    <img src={card.img} alt={card.name} loading="lazy" />
                  </div>
                  <div className="booking-card-body">
                    <h3 className="doctor-name">{card.name}</h3>
                    <button type="button" className="badge-specialty">{card.specialty}</button>
                    <div className="center-and-city">
                      <div className="center-name">{card.center}</div>
                      <div className="city-name">{card.city}</div>
                    </div>
                    <div className="next-appointment">
                      <span className="label">:موعد قريب</span>
                      <span className="value">{card.nextTime}</span>
                    </div>
                    <div className="fee-line">{card.fee}</div>
                    <button type="button" className="choose-slot-btn">
                      <i className="fa-solid fa-calendar-days"></i>
                      اختر موعد
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      

      {/* WhatsApp Float */}
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
}

export default Bookingnow;
