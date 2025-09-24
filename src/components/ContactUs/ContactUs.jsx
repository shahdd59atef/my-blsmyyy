import React, { useState } from "react";
import "../../Style/ContactUs.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    captcha: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted", formData);
  };

  return (
    <div className="contactus-page" dir="rtl">
      <div className="contactus-container">
        <h1 className="contactus-title">تواصل معنا...<span className="TIT">يسعدنا تلقي استفسارك، و سنكون بخدمتك في أسرع وقت</span></h1>
        <form className="contactus-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label className="field-label">الاسم الكامل <span className="req">(مطلوب)</span></label>
              <input className="field-input" name="fullName" value={formData.fullName} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label className="field-label">رقم الجوال <span className="req">(مطلوب)</span></label>
              <input className="field-input" name="mobile" value={formData.mobile} onChange={handleChange} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label className="field-label">البريد الإلكتروني <span className="req">(مطلوب)</span></label>
              <input className="field-input" type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label className="field-label">فضلًا الإجابة 3 + 5 = ؟ <span className="req">(مطلوب)</span></label>
              <input className="field-input" name="captcha" value={formData.captcha} onChange={handleChange} />
            </div>
          </div>

          <div className="form-row single">
            <div className="form-field">
              <label className="field-label">الرسالة <span className="req">(مطلوب)</span></label>
              <textarea className="field-textarea" name="message" value={formData.message} onChange={handleChange} />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="send-btn">إرسال</button>
          </div>
        </form>

        <div className="contactus-info">
          <div className="info-item">
            <span className="info-text">info@blsmy.com</span>
          </div>
          <div className="info-item">
            <span className="info-text">+966539366005</span>
            <span className="whatsapp-dot" aria-hidden="true"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
