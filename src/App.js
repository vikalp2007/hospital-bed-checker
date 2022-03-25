import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import WebFont from "webfontloader";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Newsletter from "./components/Newsletter/Newsletter";
import HospitalInformation from "./Pages/HospitalInformation/HospitalInformation";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);


  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hospital/:id" element={<HospitalInformation />} />
        </Routes>
      </div>
      <Newsletter/>
      <Footer />
    </Router>
  );
}

export default App;
