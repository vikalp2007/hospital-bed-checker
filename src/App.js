import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import WebFont from "webfontloader";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Newsletter from "./components/Newsletter/Newsletter";
import SearchHospital from "./Pages/SearchHospital/SearchHospital";
import HospitalDetails from "./Pages/HospitalDetails/HospitalDetails";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

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
      <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hospitals" element={<SearchHospital />} />
          <Route path="/hospital/:id" element={<HospitalDetails />} />
        </Routes>
      <Newsletter/>
      <Footer />
    </Router>
  );
}

export default App;
