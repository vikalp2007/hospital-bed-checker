import React from "react";
import CircleChart from "../CircleChart/CircleChart";
import "./HospitalBedsData.css";

const HospitalBedsData = () => {
  return (
    <div className="totalBedsContainer">
      <h1>Hospital Beds</h1>
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
        <CircleChart data={[
  { label: "Occupied Beds", value: 2120 },
  { label: "Vacant Beds", value: 7880 },
]} />
      </div>
    </div>
  );
};

export default HospitalBedsData;
