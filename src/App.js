import React, { useEffect } from "react";
import "./App.css";
import CircleChart from "./components/CircleChart/CircleChart";
import Navbar from "./components/Navbar/Navbar";
import WebFont from "webfontloader";
import FindHospital from "./components/FindHospital/FindHospital.js"
import Footer from "./components/Footer/Footer";

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);


  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>FIND A BED</h2>
        <div style={{ textAlign: "center", padding: "30px" }}>
        <CircleChart />
        </div>
        <FindHospital />
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
