import { useState } from "react";
import "../../Style/Offer.css";

const offersData = [
  {
    id: 1,
    title: "باقات اليوم الوطني",
    desc: "795 رس",
    img: "https://api.blsmy.com/uploads/Offer_01efa4df-1bf4-41b1-85be-cf3bfd78aeb0.png",
    category: "جلدية",
  },
  {
    id: 2,
    title: "باقات اليوم الوطني",
    desc: "795 رس",
    img: "https://api.blsmy.com/uploads/Offer_8a5bf97b-d7ab-47e5-b877-fb816da059c1.png",
    category: "أسنان",
  },
  {
    id: 3,
    title: "فركشنال ليزر",
    desc: "295 رس",
    img: "https://api.blsmy.com/uploads/Offer_5d581e35-55b3-49b5-9bf4-945963faca8e.png",
    category: "أخرى",
  },
];

export default function Offer() {
  const [filter, setFilter] = useState("الكل");

  const categories = ["اخري", "اسنان", "جلديه", "الكل"];

  const filteredOffers =
    filter === "الكل"
      ? offersData
      : offersData.filter((offer) => offer.category === filter);

  return (
    <div className="offers-container">
      <h2 className="offers-title">احجز موعدك الآن واستفد من عروضنا</h2>
      <p className="offers-subtitle">
        عروضنا تمنحك الصحة والعافية بأسعار لا تقبل المنافسة. استمر في صحتك مع
        باقاتنا الشاملة التي تلبي جميع احتياجاتك الصحية 
      </p>

      <div className="offers-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={filter === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="offers-grid">
        {filteredOffers.map((offer) => (
          <div key={offer.id} className="offer-card">
            <img src={offer.img} alt={offer.title} />
            <div className="offer-info">
              <h3>{offer.title}</h3>
              <p>{offer.desc}</p>
               <button type="button" className="book-btn">حجز موعد</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
