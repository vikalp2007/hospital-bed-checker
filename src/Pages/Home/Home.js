import React from "react";
import CircleChart from "../../components/CircleChart/CircleChart";
import FindHospital from "../../components/FindHospital/FindHospital";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import "./Home.css";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <h3>Hospital Beds</h3>
      <div className="bedCapacity">
        <div>
          <div className="Box">
            <h2>Total Beds</h2>
            <p>10,000</p>
          </div>
          <div className="Box">
            <h2>Vacant Beds</h2>
            <p>7,880</p>
          </div>
        </div>
        <CircleChart />
      </div>
      <FindHospital />
    </>
  );
};

export default Home;
