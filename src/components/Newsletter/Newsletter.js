import { Send } from "@mui/icons-material";
import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="contactContainer">
      <h1>Contact Us</h1>
      <p>Need Help Email Us..</p>
      <div className="inputContainer">
        <input type="text" placeholder="Your Email.. " />
        <button>
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
