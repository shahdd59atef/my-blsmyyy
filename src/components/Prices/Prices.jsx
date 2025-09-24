import React, { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import "../../Style/Prices.css";

const plans = [
  { key: "basic", title: "البداية" },
  { key: "growth", title: "النمو (نسبة من الحجوزات)" },
  { key: "pro", title: "التميز ( 700 رس ) الأكثر طلبا" },
  { key: "enterprise", title: "الاحترافية ( 4,000 رس )" }
];

const features = [
  { label: "حجوزات الزيارات المنزلية", values: { basic: "✓", growth: "✓", pro: "✓", enterprise: "✓" } },
  { label: "السداد الإلكتروني", values: { basic: "✓", growth: "✓", pro: "✓", enterprise: "✓" } },
  { label: "الموقع التعريفي للمركز", values: { basic: "✓", growth: "✓", pro: "✓", enterprise: "✓" } },
  { label: "نظام التوظيف", values: { basic: "✗", growth: "✓", pro: "✓", enterprise: "✓" } },
  { label: "الربط البرمجي", values: { basic: "✗", growth: "✗", pro: "[1]✓", enterprise: "[1]✓" } },
  { label: "تطوير تطبيق خاص", values: { basic: "✗", growth: "✗", pro: "✗", enterprise: "[2]✓" } }
];

const Prices = () => {
  const [billing, setBilling] = useState("monthly");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="prices-page" dir="rtl">
      <div className="prices-container">
        <div className="billing-switch">
          <button
            type="button"
            className={`switch-btn ${billing === "yearly" ? "active" : ""}`}
            onClick={() => setBilling("yearly")}
          >
            سنويا (عرض خاص)
          </button>
          <button
            type="button"
            className={`switch-btn ${billing === "monthly" ? "active" : ""}`}
            onClick={() => setBilling("monthly")}
          >
            شهريا
          </button>
        </div>

        <div className="table-wrapper">
          <table className="prices-table" aria-label=" plans table ">
            <thead>
              <tr>
                <th className="feature-col">الخدمة</th>
                {plans.map((p) => (
                  <th key={p.key} className={`plan-col ${p.key}`}>{p.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((f) => (
                <tr key={f.label}>
                  <td className="feature-col">{f.label}</td>
                  {plans.map((p) => (
                    <td key={p.key} className="value-col">
                      <span className={`val ${String(f.values[p.key]).includes("✓") ? "yes" : "no"}`}>
                        {f.values[p.key]}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Terms and Subscription Section */}
        <div className="terms-subscription-section">
          <div className="terms-notes">
            <div className="note-item">
              <span className="note-number">[1]</span>
              <span className="note-text">الربط البرمجي مع النظام الداخلي للمركز بتكلفة خاصة</span>
            </div>
            <div className="note-item">
              <span className="note-number">[2]</span>
              <span className="note-text">الباقة الاحترافية تتطلب سداد 4 أشهر مقدما عند الاشتراك لأول مرة</span>
            </div>
            <div className="note-item">
              <span className="note-number">[3]</span>
              <span className="note-text">يضاف 15% مبلغ ضريبة القيمة المضافة</span>
            </div>
          </div>
          
          <div className="subscription-section">
            <div className="terms-checkbox">
              <input
                type="checkbox"
                id="agree-terms"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
              />
              <label htmlFor="agree-terms">أوافق على الشروط والأحكام</label>
            </div>
            <a href="Login.jsx">
            <button 
              className="subscribe-btn"
              disabled={!agreeToTerms}
              onClick={() => navigate('/login', { replace: true })}
            >
              اشترك الآن
            </button>

            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Prices);


