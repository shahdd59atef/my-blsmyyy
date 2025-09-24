import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = useCallback((e) => {
    const { id, value } = e.target;
    // Map inputs by id to the API keys: email, password
    setFormData((prev) => ({ ...prev, [id]: value }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://enqlygo.com/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
      const data = await response.json();
      console.log("Login response:", data);
      if (response.ok || (data && (data.status === 'success' || data.token))) {
        navigate('/', { replace: true });
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  }, [formData.email, formData.password, navigate]);

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center bg-light h-100">
          <img
            src="https://medical.blsmy.com/assets/login.aae83932.svg"
            alt="illustration"
            className="img-fluid"
            style={{ maxHeight: "80%" }}
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center p-5 bg-white h-100 shadow">
          <h3 className="mb-4 text-center fw-bold">تسجيل الدخول</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                البريد الإلكتروني
              </label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" value={formData.email} onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                كلمة المرور
              </label>
              <input type="password" className="form-control" id="password" placeholder="********" value={formData.password} onChange={handleChange} />
              <div className="mt-2">
                <a href="#" className="text-decoration-none text-primary">
                  هل نسيت كلمة المرور ؟
                </a>
              </div>
            </div>

            <button type="submit" className="btn btn-info w-100 text-white fw-bold">
              تسجيل الدخول
            </button>
          </form>

          <hr className="my-4" />

          <div className="text-center">
            <a href="#" className="d-block mb-2 text-decoration-none">English</a>
            <a href="#" className="text-decoration-none">الذهاب لموقع بلسمي</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
