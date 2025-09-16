 
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home'
import Login from'./components/Login/Login'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
