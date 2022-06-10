import {
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { database } from "../../firebase";
import HospitalCard from "../HospitalCard/HospitalCard";
import Loading from "../Loading/Loading";

const FilteredHospitals = ({ option1, option2, option3, option4, option5 }) => {
  const [filteredData, setFilteredData] = useState([]);

  const getData = () => {
    let q = collection(database, "Hospitals");

    if (option1 !== "All" && option1) {
      q = query(q, where("Locality", "==", option1));
    }

    onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setFilteredData(
        data.filter(
          (d) =>
            d["Available Beds"]["Normal Beds"] >= option2 &&
            d["Available Beds"]["ICU Beds"] >= option3 &&
            d["Available Beds"]["COVID Beds"] >= option4 &&
            d["Available Beds"]["Ventilators"] >= option5
        )
      );
    });
  };

  useEffect(() => {
    getData();
  }, [option1, option2, option3, option4, option5]);

  return (
    <>
      {filteredData.length !== 0 ? (
        filteredData.map((item) => <HospitalCard info={item} key={item.id} />)
      ) : (
        <Loading msg="No Hospitals" />
      )}
    </>
  );
};

export default FilteredHospitals;
