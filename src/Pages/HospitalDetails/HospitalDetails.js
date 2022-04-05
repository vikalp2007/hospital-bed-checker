import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../../firebase";
import "./HospitalDetails.css";
import Loading from "../../components/Loading/Loading";
import CircleChart from "../../components/CircleChart/CircleChart";
import { LocationOn, PhoneInTalk } from "@mui/icons-material";
import RequestForm from "../../components/RequestForm/RequestForm";

const HospitalDetails = () => {
  const params = useParams();
  const [hospitalDetails, setHospitalDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  async function getData() {
    const q = doc(database, "Hospitals", params.id);
    const snapshot = await getDoc(q);

    setHospitalDetails(snapshot.data());
  }

  useEffect(() => {
    getData();
  }, []);

  let totalBeds = 0;
  let availableBeds = 0;

  if (hospitalDetails) {
    totalBeds =
      hospitalDetails["Total Beds"]["Normal Beds"] +
      hospitalDetails["Total Beds"]["ICU Beds"] +
      hospitalDetails["Total Beds"]["COVID Beds"];
    availableBeds =
      hospitalDetails["Available Beds"]["Normal Beds"] +
      hospitalDetails["Available Beds"]["ICU Beds"] +
      hospitalDetails["Available Beds"]["COVID Beds"];
  }

  return (
    <>
      {hospitalDetails ? (
        <div className="detailsContainer">
          <RequestForm showModal={showModal} setShowModal={setShowModal} />
          <h1>{hospitalDetails.Name}</h1>
          <div className="detailsContainer__info">
            <div className="details">
              <div className="chart">
                <CircleChart
                  height={"200"}
                  width={"200"}
                  data={[
                    {
                      label: "Vacant Beds",
                      value: availableBeds,
                    },
                    {
                      label: "Occupied Beds",
                      value: totalBeds - availableBeds,
                    },
                  ]}
                />
              </div>
              <p>
                <PhoneInTalk style={{ color: "green" }} />{" "}
                {hospitalDetails["Phone Number"]}
              </p>
              <p>
                <LocationOn style={{ color: "green" }} />
                {hospitalDetails["Address"]}
              </p>
              <p>
                Available Normal Beds:&nbsp;
                <b>
                  {`${hospitalDetails["Available Beds"]["Normal Beds"]} /
                  ${hospitalDetails["Total Beds"]["Normal Beds"]}`}
                </b>
              </p>
              <p>
                Available COVID Beds:&nbsp;
                <b>
                  {`${hospitalDetails["Available Beds"]["COVID Beds"]} /
                  ${hospitalDetails["Total Beds"]["COVID Beds"]}`}
                </b>
              </p>
              <p>
                Available ICU Beds:&nbsp;
                <b>
                  {`${hospitalDetails["Available Beds"]["ICU Beds"]} /
                  ${hospitalDetails["Total Beds"]["ICU Beds"]}`}
                </b>
              </p>
              <p>
                Available Ventilators:&nbsp;
                <b>
                  {`${hospitalDetails["Available Beds"]["Ventilators"]} /
                  ${hospitalDetails["Total Beds"]["Ventilators"]}`}
                </b>
              </p>
              <p>
                <button onClick={openModal} className="request-btn">
                  Request a Bed
                </button>
              </p>
            </div>
            <div className="img__div">
              <img src={hospitalDetails["url"]} />
            </div>
          </div>
        </div>
      ) : (
        <Loading msg="Loading..." />
      )}
    </>
  );
};

export default HospitalDetails;
