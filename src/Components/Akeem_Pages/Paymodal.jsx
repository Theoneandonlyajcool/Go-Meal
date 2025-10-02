import React from "react";
import { X } from "lucide-react";
import "./Paymodal.css";
import {} from "lucide-react";

const Paymodal = ({ closingOfPayModal }) => {
  const handleClose = () => {
    console.log("Close modal");
  };

  const handleBackToHome = () => {
    console.log("Navigate to home");
  };

  return (
    <div className="overlay">
      <div className="modal">
        <button className="close-button" onClick={handleClose}>
          <X size={20} color="white" onClick={() => closingOfPayModal(false)} />
        </button>

        <h1 className="title">Order completed</h1>
        <p className="subtitle">
          Please Proceed to The restaurant and pick up your order
        </p>

        <button className="home-button" onClick={handleBackToHome}>
          Back to home
        </button>
      </div>
    </div>
  );
};

export default Paymodal;
