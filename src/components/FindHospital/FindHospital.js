import React, { useState } from "react";
import "./FindHospital.css";
import Select from "react-select";
import HospitalDataShow from "../HospitalDataShow/HospitalDataShow";

const FindHospital = () => {
  const locality = [
    { value: "Adarsh Nagar", label: "Adarsh Nagar" },
    { value: "Vidhyadhar Nagar", label: "Vidhyadhar Nagar" },
    { value: "Jagatpura", label: "JagatPura" },
    { value: "SitaPura", label: "SitaPura" },
    { value: "Pratap Nagar", label: "Pratap Nagar" },
    { value: "Badi Chaupad", label: "Badi Chaupad" },
  ];
  const beds_number = [
    { value: "0", label: "greater than 0" },
    { value: "50", label: "greater than 50" },
    { value: "100", label: "greater than 100" },
  ];
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [selectedOption4, setSelectedOption4] = useState(null);
  return (
    <>
      <h3>Search For A Hospital</h3>
      <div className="searchOptions">
        <Select
          options={locality}
          placeholder="Locality"
          defaultValue={selectedOption1}
          onChange={(entry) => setSelectedOption1(entry.value)}
        />
        <Select
          options={beds_number}
          placeholder="ICU Beds"
          defaultValue={selectedOption2}
          onChange={(entry) => setSelectedOption2(entry.value)}
        />
        <Select
          options={beds_number}
          placeholder="COVID Beds"
          defaultValue={selectedOption3}
          onChange={(entry) => setSelectedOption3(entry.value)}
        />
        <Select
          options={beds_number}
          placeholder="Ventilators"
          defaultValue={selectedOption4}
          onChange={(entry) => setSelectedOption4(entry.value)}
        />
      </div>
      <HospitalDataShow
        option1={selectedOption1}
        option2={selectedOption2}
        option3={selectedOption3}
        option4={selectedOption4}
      />
    </>
  );
};

export default FindHospital;
