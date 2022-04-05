import { Close } from "@mui/icons-material";
import { MenuItem, TextField } from "@mui/material";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { database } from "../../firebase";
import "./RequestForm.css";

const RequestForm = ({ showModal, setShowModal }) => {
  const typeofBed = [
    { label: "Normal Bed", value: "Normal Bed" },
    { label: "ICU Bed", value: "ICU Bed" },
    { label: "COVID Bed", value: "COVID Bed" },
  ];

  const params = useParams();

  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [Phone, setPhone] = useState("");
  const [Aadhar, setAadhar] = useState("");
  const [Symptoms, setSymptoms] = useState("");
  const [bedType, setBedType] = useState("");
  const [Error, setError] = useState("");

  const setEmpty = () => {
    setName("");
    setAddress("");
    setPhone("");
    setAadhar("");
    setSymptoms("");
    setBedType("");
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Name || !Address || !Phone || !Symptoms || !Aadhar || !bedType) {
      setError("Please fill all the fields");
      return;
    }

    const docRef = doc(database, "Hospitals", params.id);
    console.log(docRef);
    updateDoc(docRef, {
      Request: arrayUnion({ Name, Address, Symptoms, Phone, Aadhar, bedType }),
    })
      .then(() => {
        setEmpty();
        toast.success("Request Sent...")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {showModal ? (
        <div className="bg">
          <div className="modalWrapper">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdY3zTgPMzTl6YC9DzI2eGUn-N6Qq_8d8Ey-qWHVGp-gWiCa-Gj3xbl_uG8agq_Ui6l-4&usqp=CAU"
              alt="camera"
              className="modalImg"
            />

            <div className="modalContent">
              <h1>Request a Bed</h1>
              <p style={{ color: "red", display: "inline-block" }}>{Error}</p>
              <form className="requestForm" onSubmit={handleSubmit}>
                <TextField
                  label="Patient's Name"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  label="Address"
                  value={Address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <TextField
                  label="Phone Number"
                  value={Phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <TextField
                  label="Aadhar Number"
                  value={Aadhar}
                  onChange={(e) => setAadhar(e.target.value)}
                />
                <TextField
                  label="Symptoms"
                  value={Symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                />
                <div style={{ width: "42%" }}>
                  <TextField
                    style={{ width: "100%" }}
                    value={bedType}
                    select
                    label="Type of Bed"
                    onChange={(e) => setBedType(e.target.value)}
                  >
                    {typeofBed.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>

                <button
                  type="submit"
                  style={{
                    padding: "15px 30px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: "#2827CC",
                    color: "#fff",
                  }}
                >
                  {" "}
                  Request{" "}
                </button>
              </form>
            </div>
            <div className="closeModal-btn">
              <Close onClick={() => setShowModal((prev) => !prev)} />{" "}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default RequestForm;
