import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import FilteredHospitals from "../../components/FilteredHospitals/FilteredHospitals.js";

import "./SearchHospital.css";
import { Slider } from "@mui/material";

const SearchHospital = () => {

  const [selectedValue1, setSelectedValue1] = useState(undefined);
  const [selectedValue2, setSelectedValue2] = useState(0);
  const [selectedValue3, setSelectedValue3] = useState(0);
  const [selectedValue4, setSelectedValue4] = useState(0);
  const [selectedValue5, setSelectedValue5] = useState(0);



  const marks = [
    { value: 0, label: "0" },
    { value: 50, label: "50" },
    {
      value: 100,
      label: "100",
    },
  ];

  // need to implement context api for locality dynamic data

  const optionhtml = (item) => (
    <option value={item}>{item}</option>
  )

  return (
    <>
      <div className="searchHospital">
        <div className="searchFilters">
          <FormControl
            fullWidth
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              color: "gray",
              fontSize: "12px",
            }}
          >
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Locality
            </InputLabel>
            <NativeSelect value={selectedValue1} onChange={e => setSelectedValue1(e.target.value)}>
            {optionhtml("All")}
              {optionhtml("SitaPura")}
              
              {optionhtml("Jagatpura")}
              {optionhtml("SitaPura")}
              {optionhtml("Badi Chaupad")}
              {optionhtml("Adarsh Nagar")}
              {optionhtml("Ajmeri gate")}
              
            </NativeSelect>
            <span style={{ textAlign: "left" }}>
              Normal Beds <br />
              <small>(greater than)</small>
            </span>
            <Slider
              aria-label="Normal Beds"
              valueLabelDisplay="auto"
              defaultValue={0}
              step={50}
              min={0}
              max={100}
              marks={marks}
              onChange={e => setSelectedValue2(e.target.value)}
            />
            <span style={{ textAlign: "left" }}>
              ICU Beds <br />
              <small>(greater than)</small>
            </span>
            <Slider
              aria-label="Normal Beds"
              valueLabelDisplay="auto"
              defaultValue={0}
              step={50}
              min={0}
              max={100}
              marks={marks}
              onChange={e => setSelectedValue3(e.target.value)}
             
            />
            <span style={{ textAlign: "left" }}>
              COVID Beds <br />
              <small>(greater than)</small>
            </span>
            <Slider
              aria-label="Normal Beds"
              valueLabelDisplay="auto"
              defaultValue={0}
              step={50}
              min={0}
              max={100}
              marks={marks}
              onChange={e => setSelectedValue4(e.target.value)}
            />
            <span style={{ textAlign: "left" }}>
              Ventilators <br />
              <small>(greater than)</small>
            </span>
            <Slider
              aria-label="Normal Beds"
              valueLabelDisplay="auto"
              defaultValue={0}
              step={50}
              min={0}
              max={100}
              marks={marks}
              onChange={e => setSelectedValue5(e.target.value)}
            />
          </FormControl>
        </div>
        <div className="HospitalCards">
          <FilteredHospitals option1={selectedValue1} option2={selectedValue2} option3={selectedValue3} option4={selectedValue4} option5={selectedValue5} />
        </div>
      </div>
    </>
  );
};

export default SearchHospital;
