import React, { useEffect, useMemo, useState } from "react";
import "../../Style/Centers.css";

const Centers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [apiCenters, setApiCenters] = useState([]);
  const [addresses, setAddresses] = useState([]);

  const centersData = [
    {
      id: 1,
      name: "مركز بيلا التخصصي للعلاج الطبيعي",
      location: "الدمام - احد",
      rating: null,
      reviews: 0,
      clinics: 1,
      doctors: 1,
      logo: "Bella Physical Therapy Center",
      logoColor: "green",
      category: "أخرى"
    },
    {
      id: 2,
      name: "مجمع الفارابي الطبي - فرع الدمام",
      location: "الدمام - الاتصالات",
      rating: 4.9,
      reviews: 30,
      clinics: 6,
      doctors: 6,
      logo: "🌙",
      logoColor: "green",
      category: "جلدية"
    },
    {
      id: 3,
      name: "عيادات برايت التخصصية",
      location: "الخبر - الهدا",
      rating: 5.0,
      reviews: 1,
      clinics: 6,
      doctors: 8,
      logo: "BRIGHT",
      logoColor: "orange",
      category: "أسنان"
    },
    {
      id: 4,
      name: "مجمع الدمام الطبي الخاص",
      location: "الدمام - ابن خلدون",
      rating: 2.5,
      reviews: 0,
      clinics: 0,
      doctors: 0,
      logo: "DPMC",
      logoColor: "blue",
      category: "جلدية"
    },
    {
      id: 5,
      name: "مجمع بسيم الطبي التخصصي الرقمي",
      location: "الدمام - الفيصلية",
      rating: 5.0,
      reviews: 0,
      clinics: 0,
      doctors: 0,
      logo: "BASSIM",
      logoColor: "black",
      category: "أخرى"
    },
    {
      id: 6,
      name: "مجمع الدمام الأهلى الطبي",
      location: "الدمام - الجلوية",
      rating: 4.8,
      reviews: 4185,
      clinics: 13,
      doctors: 55,
      logo: "D",
      logoColor: "blue",
      category: "جلدية"
    },
    {
      id: 7,
      name: "مجمع سمو الطبي",
      location: "الخبر - قرطبة",
      rating: null,
      reviews: 0,
      clinics: 0,
      doctors: 0,
      logo: "SUMUO",
      logoColor: "blue",
      category: "أسنان"
    },
    {
      id: 8,
      name: "مجمع غيم الطبي",
      location: "جدة - الحمدانية",
      rating: 4.8,
      reviews: 0,
      clinics: 0,
      doctors: 0,
      logo: "🦷",
      logoColor: "blue",
      category: "أسنان"
    }
  ];


  useEffect(() => {
    let mounted = true;
    const fetchCenters = async () => {
      try {
        const res = await fetch('https://enqlygo.com/api/salons');
        const json = await res.json();
        const list = Array.isArray(json?.data) ? json.data : [];
        if (mounted) setApiCenters(list);
      } catch (e) {
        console.warn('Centers API error:', e);
      }
    };
    fetchCenters();
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    let mounted = true;
    const fetchAddresses = async () => {
      try {
        const res = await fetch('https://enqlygo.com/api/salons/addresses');
        const json = await res.json();
        const list = Array.isArray(json?.data) ? json.data : [];
        if (mounted) setAddresses(list);
      } catch (e) {
        console.warn('Addresses API error:', e);
      }
    };
    fetchAddresses();
    return () => { mounted = false; };
  }, []);

  const mergedCenters = useMemo(() => {
    if (!apiCenters || apiCenters.length === 0) return centersData;
    // Map API shape to local card shape and remove items without real data
    const mapped = apiCenters
      .map((s, idx) => ({
        id: s.id || `api-${idx}`,
        name: s.salon_name || s.owner_name || '',
        location: (addresses[idx] || s.salon_address || '').toString().replace(/\n/g, ' ').trim(),
        rating: s.reviews_avg_rating || s.rating || null,
        reviews: s.reviews_count || 0,
        clinics: 0,
        doctors: 0,
        logo: (s.owner_name && s.owner_name.split(' ')[0]) || 'CL',
        logoColor: 'blue',
        category: '—'
      }))
      .filter(c => c.name && c.location); // keep only cards with data
    return mapped;
  }, [apiCenters, addresses]);

  const filteredCenters = mergedCenters.filter(center => {
    const matchesSearch = center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         center.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="centers-page" dir="rtl">
      <div className="centers-container">
        <h1 className="centers-title">المراكز الطبية</h1>
        <p className="centers-subtitle">
          قصص النجاح لشركائنا الموقرين من المراكز الطبية
        </p>

        <div className="search-section">
          <input
            type="text"
            placeholder="ابحث عن المركز الطبي..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>


        <div className="centers-grid">
          {filteredCenters.map((center) => (
            <div key={center.id} className="center-card">
              <div className="center-logo">
                <span className={`logo-text ${center.logoColor}`}>
                  {center.logo}
                </span>
              </div>
              <div className="center-info">
                <h3 className="center-name">{center.name}</h3>
                <p className="center-location">{center.location}</p>
                {center.rating && (
                  <div className="center-rating">
                    <span className="rating-number">{center.rating}</span>
                    <span className="star">⭐</span>
                  </div>
                )}
                <div className="center-stats">
                  {center.reviews > 0 && (
                    <span className="stat">
                      <span className="stat-number">{center.reviews}</span>
                      <span className="stat-label">تقييم</span>
                    </span>
                  )}
                  {center.clinics > 0 && (
                    <span className="stat">
                      <span className="stat-number">{center.clinics}</span>
                      <span className="stat-label">عيادة</span>
                    </span>
                  )}
                  {center.doctors > 0 && (
                    <span className="stat">
                      <span className="stat-number">{center.doctors}</span>
                      <span className="stat-label">طبيب</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="whatsapp-icon">
        <a
          href="https://wa.me/966500000000"
          aria-label="تواصل معنا عبر واتساب"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.lTqMPiPP11QPJ0FFSx9h6gHaHc?pid=Api&P=0&h=220"
            alt="WhatsApp"
            width="24"
            height="24"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  );
};

export default Centers;
