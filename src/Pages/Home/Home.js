import React from "react";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import HospitalBedsData from "../../components/HospitalBedsData/HospitalBedsData";
import "./Home.css";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <HospitalBedsData />
    </>
  );
};

export default Home;
