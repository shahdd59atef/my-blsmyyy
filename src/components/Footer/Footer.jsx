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
              <a href="#" role="listitem" aria-label="لينكد إن">
                <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>
              <a href="#" role="listitem" aria-label="سناب شات">
                <i className="fab fa-snapchat" aria-hidden="true"></i>
              </a>
              <a href="#" role="listitem" aria-label="فيسبوك">
                <i className="fab fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="#" role="listitem" aria-label="تيك توك">
                <i className="fab fa-tiktok" aria-hidden="true"></i>
              </a>
              <a href="#" role="listitem" aria-label="تويتر">
                <i className="fab fa-x-twitter" aria-hidden="true"></i>
              </a>
              <a href="#" role="listitem" aria-label="إنستغرام">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
            <p>تابعنا</p>
            <div className="payment-methods" role="list" aria-label="طرق الدفع المقبولة">
              <img src="https://blsmy.com/images/visa.png" alt="فيزا" loading="lazy" width="30" height="30" />
              <img src="https://blsmy.com/images/mastercard.png" alt="ماستر كارد" loading="lazy" width="30" height="30" />
              <img src="https://blsmy.com/images/applePay.png" alt="آبل باي" loading="lazy" width="30" height="30" />
              <img src="https://blsmy.com/images/mada.png" alt="مدى" loading="lazy" width="30" height="30" />
              <img src="https://blsmy.com/images/tabby.svg" alt="تابي" loading="lazy" width="30" height="30" />
            </div>
          </div>

          <div className="footer-section">
            <h4>حمل تطبيق بلسمي</h4>
            <p>احجز مواعيدك بسهولة من خلال تطبيقنا</p>
            <div className="app-download" role="list" aria-label="روابط تحميل التطبيق">
              <a href="#" className="app-btn" role="listitem" aria-label="تحميل من آب ستور">
                <i className="fab fa-apple" aria-hidden="true"></i>
                آب ستور
              </a>
              <a href="#" className="app-btn" role="listitem" aria-label="تحميل من جوجل بلاي">
                <i className="fab fa-google-play" aria-hidden="true"></i>
                جوجل بلاي
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 جميع الحقوق محفوظة لشركة في التطبيقات لتقنية المعلومات</p>
          <p>
            سجل تجاري رقم 2050143677 -{" "}
            <a href="/privacy" aria-label="سياسة الخصوصية">
              سياسة الخصوصية
            </a>
          </p>
          <div className="certification">
            <img
              src="https://blsmy.com/images/sbc.png"
              alt="المركز السعودي للأعمال"
              loading="lazy"
              width="40"
              height="40"
            />
            <p>موثق لدى المركز السعودي للأعمال</p>
            <p>الرقم المميز: 312066452700003</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
