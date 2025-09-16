import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import'../../Style/Navbar.css';

function Navbar() {
  const [isCentersOpen, setIsCentersOpen] = useState(false);
  const [isCitiesOpen, setIsCitiesOpen] = useState(false);
  const centersRef = useRef(null);
  const citiesRef = useRef(null);

  // Close menus on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (centersRef.current && !centersRef.current.contains(event.target)) {
        setIsCentersOpen(false);
      }
      if (citiesRef.current && !citiesRef.current.contains(event.target)) {
        setIsCitiesOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="navbar-new">
      <div className="container">
        <div className="navbar-content">
          {/* Language Link */}
          <div className="language-link">
            <a href="#" className="lang-btn">English</a>
          </div>

          {/* Main Navigation */}
          <div className="main-nav">
            <ul className="nav-links">
              <li><a href="#" className="nav-link">تواصل معنا</a></li>
              <li><a href="#" className="nav-link">الأسعار</a></li>
              <li><a href="#" className="nav-link">التوظيف</a></li>
              <li><a href="#" className="nav-link">المراكز الطبية</a></li>
              <li><a href="#" className="nav-link">العروض</a></li>
              <li className="dropdown" ref={centersRef}>
                <button
                  type="button"
                  className="nav-link dropdown-toggle btn-reset"
                  onClick={() => setIsCentersOpen((v) => !v)}
                  aria-expanded={isCentersOpen}
                >
                  خدمات المراكز
                  <i className="bi bi-chevron-down"></i>
                </button>
                {isCentersOpen && (
                  <ul className="dropdown-menu-custom">
                    <li><a href="Register" className="dropdown-item-custom">الانضمام كمركز طبي</a></li>
                    <li><a href="#" className="dropdown-item-custom">تسجيل دخول المركز الطبي</a></li>
                    <li><a href="#" className="dropdown-item-custom">الربط مع خدمات بلسمي</a></li>
                  </ul>
                )}
              </li>
            </ul>
          </div>

          {/* Search and Location */}
          <div className="search-location">
            <button className="search-btn" type="button" onClick={() => console.log('Search clicked')}>
              <i className="bi bi-search"></i>
              بحث
            </button>
            <input 
              type="text" 
              className="search-input" 
              placeholder="ابحث عن طبيب أو..."
            />
            <div className="location-dropdown" ref={citiesRef}>
              <button className="location-btn" type="button" onClick={() => setIsCitiesOpen((v) => !v)} aria-expanded={isCitiesOpen}>
                كل المدن
                <i className="bi bi-chevron-down"></i>
              </button>
              {isCitiesOpen && (
                <ul className="dropdown-menu-custom location">
                  <li><a href="#" className="dropdown-item-custom">الاحساء</a></li>
                  <li><a href="#" className="dropdown-item-custom">الخبر</a></li>
                  <li><a href="#" className="dropdown-item-custom">الدمام</a></li>
                  <li><a href="#" className="dropdown-item-custom">جدة</a></li>
                  <li><a href="#" className="dropdown-item-custom">الرياض</a></li>
                </ul>
              )}
            </div>
          </div>

          {/* Logo */}
          <div className="navbar-logo">
            <img
              src="https://blsmy.com/images/logo-blsam-mobile.webp"
              alt="بلسمي"
              width="60"
              height="60"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
