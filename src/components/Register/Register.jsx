import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../Style/Register.css';

function Register() {
  const [formData, setFormData] = useState({
    responsibleName: '',
    mobileNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Optional: basic client validation without changing UI behavior
    if (formData.password !== formData.confirmPassword) {
      console.warn('Passwords do not match');
      return;
    }
    try {
      // Normalize phone number: remove non-digits and add country code if missing
      const raw = `${formData.mobileNumber || ''}`.replace(/\D/g, '');
      const local = raw.startsWith('5') ? raw : raw.replace(/^0+/, '');
      const phoneE164 = local.startsWith('966') ? `+${local}` : `+966${local}`; // SA default if not provided

      const payload = {
        email: formData.email,
        fullname: formData.responsibleName,
        password: formData.password,
        phone_number: phoneE164
      };
      const response = await fetch('https://enqlygo.com/api/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (!response.ok) {
        console.warn('Register 4xx/5xx:', response.status, data);
      } else {
        console.log('Register success:', data);
      }
    } catch (error) {
      console.error('Register error:', error);
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="illustration-section">
          <img 
            src="https://medical.blsmy.com/assets/register.9faaae76.svg" 
            alt="Register Illustration" 
            className="register-illustration"
          />
        </div>
        <div className="form-section">
          <div className="form-container">
            <h1 className="form-title">انشاء حساب مركز طبي جديد</h1>
            
            <form onSubmit={handleSubmit} className="register-form">
              <div className="form-group">
                <label htmlFor="responsibleName" className="form-label">
                  اسم الشخص المسؤول <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="responsibleName"
                  name="responsibleName"
                  value={formData.responsibleName}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobileNumber" className="form-label">
                  رقم الجوال <span className="required">*</span>
                </label>
                <div className="mobile-input-group">
                  <input
                    type="text"
                    value="05"
                    className="form-input mobile-prefix"
                    readOnly
                  />
                  <input
                    type="text"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    className="form-input mobile-number"
                    placeholder="XXXXXXXX"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  البريد الإلكتروني <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  كلمة المرور <span className="required">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">
                  تأكيد كلمة المرور <span className="required">*</span>
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                <i className="bi bi-person-plus"></i>
                انشاء حساب
              </button>
            </form>

            <div className="form-footer">
              <p className="login-link">
                هل لديك حساب بالفعل؟ <Link to="/login" className="login-text">سجل دخولك</Link>
              </p>
              <Link to="/register" className="language-link">English</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
