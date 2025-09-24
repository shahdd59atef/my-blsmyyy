import React, { useState } from "react";
import "../../Style/Jobpage.css";

function Jobpage() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    captcha: "",
    message: "",
    nationality: "",
    jobAppliedFor: "",
    cvFile: null
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Job application submitted", formData);
  }
  return (
    <div className="jobs-container">
      <h2 className="jobs-title">التوظيف</h2>
      <p className="subtitle">ابلغنا كيف ستفيد بلسمي؟</p>
      <table className="jobs-table">
        <thead>
          <tr>
            <th></th>
            <th>
              <b>
              الوصف
              </b>
            </th>
            <th>
              <b>
              الوظيفة المتقدم لها
              </b>
              </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button className="apply-btn">تقديم</button>
            </td>
            <td>
              <b>
              مدير نمو لقيادة استراتيجيات التوسع، والتسويق، والمبيعات، وتنفيذ مبادرات اكتساب
              العملاء (المراكز الطبية والمستخدمين)، وتحسين معدلات التحويل وتحقيق نمو مستدام.
              </b>
            </td>
            <td>
              <b>
              مدير النمو
              </b>
            </td>
          </tr>
          <tr>
            <td>
              <button className="apply-btn">تقديم</button>
            </td>
            <td>—</td>
            <td>
              <b>تقديم عام</b>
            </td>
          </tr>
        </tbody>
      </table>
       <form className="contactus-form" dir="rtl" onSubmit={handleSubmit}>
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

          <div className="form-row">
            <div className="form-field">
              <label className="field-label">الجنسية</label>
              <select className="field-input" name="nationality" value={formData.nationality} onChange={handleChange}>
                <option value=""></option>
                <option value="sa">سعودي/ة</option>
                <option value="eg">مصري/ة</option>
                <option value="jo">أردني/ة</option>
                <option value="sy">سوري/ة</option>
                <option value="other">أخرى</option>
              </select>
            </div>
            <div className="form-field">
              <label className="field-label">الوظيفة المتقدم لها</label>
              <select className="field-input" name="jobAppliedFor" value={formData.jobAppliedFor} onChange={handleChange}>
              </select>
            </div>
          </div>
          <div className="form-row single">
            <div className="form-field">
              <label className="field-label">السيرة الذاتية</label>
              <input className="field-input" type="file" name="cvFile" accept=".pdf,.doc,.docx" onChange={(e)=> setFormData(prev=>({ ...prev, cvFile: e.target.files && e.target.files[0] }))} />
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
    </div>
  );
}

export default Jobpage;
