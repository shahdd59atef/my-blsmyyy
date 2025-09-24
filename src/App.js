 
 import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from './components/Home/Home'
import Login from'./components/Login/Login'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Totorial from "./components/Totorial/Totorial";
import ContactUs from "./components/ContactUs/ContactUs";
import Jobspage from "./components/Jobspage/Jobpage";
import Bookingnow from "./components/Bookingnow/Bookingnow";
import Offer from "./components/Offer/Offer"
import Centers from "./components/Centers/Centers"
import Prices from "./components/Prices/Prices"



function AppRoutes() {
  const location = useLocation();
  const path = (location.pathname || '').toLowerCase();
  const hideOnPaths = ['/totorial', '/tutorial', '/login'];
  const hideLayout = hideOnPaths.some((p) => path.startsWith(p));

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/totorial" element={<Totorial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/Jobpage" element={<Jobspage />} />
        <Route path="/Bookingnow" element={<Bookingnow />} />
        <Route path="/Offer" element={<Offer />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/Centers" element={<Centers />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
export default App;
