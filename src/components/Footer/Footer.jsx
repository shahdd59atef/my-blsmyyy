import React from "react";
import "../../Style/Footer.css";

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-section">
            <img
              src="https://blsmy.com/images/logo-white.webp"
              alt="بلسمي"
              className="footer-logo"
              loading="lazy"
              width="80"
              height="80"
            />

            <div className="social-links" role="list" aria-label="وسائل التواصل الاجتماعي">
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-snapchat"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-tiktok"></i></a>
              <a href="#"><i className="fab fa-x-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>

            <p>تابعنا</p>

            <div className="payment-methods">
              <img src="https://blsmy.com/images/visa.png" alt="فيزا" />
              <img src="https://blsmy.com/images/mastercard.png" alt="ماستر كارد" />
              <img src="https://blsmy.com/images/applePay.png" alt="آبل باي" />
              <img src="https://blsmy.com/images/mada.png" alt="مدى" />
              <img src="https://blsmy.com/images/tabby.svg" alt="تابي" />
            </div>
          </div>
          <div className="footer-section">
            <h4>حمل تطبيق بلسمي</h4>
            <p>احجز مواعيدك بسهولة من خلال تطبيقنا</p>
            <div className="app-download">
              <a href="#" className="app-btn">
                <i className="fab fa-apple"></i> آب ستور
              </a>
              <a href="#" className="app-btn">
                <i className="fab fa-google-play"></i> جوجل بلاي
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 جميع الحقوق محفوظة لشركة في التطبيقات لتقنية المعلومات</p>
          <p>
            سجل تجاري رقم 2050143677 -{" "}
            <a href="/privacy">سياسة الخصوصية</a>
          </p>
          <div className="certification">
            <img src="https://blsmy.com/images/sbc.png" alt="المركز السعودي للأعمال" />
            <p>موثق لدى المركز السعودي للأعمال</p>
            <p>الرقم المميز: 312066452700003</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
