import "./Location_Modal.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { FaStreetView } from "react-icons/fa";
import DelivBtn from "../Delivery_Locations/DelivBtn";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { IoMdCloseCircle } from "react-icons/io";

const Location_Modal = ({ toclose }) => {
  const [locationValue, SetLocationValue] = useState("");
  const [modalState, SetModalState] = useState(false);

  const AddressValidation = () => {
    if (locationValue == "") {
      // console.log("user didn't input location");
      toast.error("Please input your location");
    } else {
      console.log("location was inputed");
    }
  };

  return (
    <div className="Location_modal_bg">
      {/* main */}

      <div className="Location_modal_cont">
        <div className="Location_modal_child">
          {/* Location input */}
          <div className="location_modal_input_cont">
            <h3>Delivery Address</h3>

            {/* input */}
            <div className="location_modal_input">
              <FaLocationDot style={{ fontSize: "1.5rem" }} />
              <input
                type="text"
                // onClick={() => toast.error("on input")}
                value={locationValue}
                onChange={(e) => SetLocationValue(e.target.value)}
                placeholder="Type in your address"
              />
              <ToastContainer position="bottom-right" />
            </div>
          </div>

          {/* icon */}
          <div
            style={{
              // border: "2px solid pink",
              width: "60%",
              height: "80%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <FaStreetView
              style={{
                fontSize: "8.5rem",
                color: "gray",
                marginBottom: "1rem",
              }}
            />
            {/* <button className="location_modal_btn"></button> */}
            {/* <DelivBtn text={"confirm address"} width={"100%"} br={"5px"} /> */}
            <button className="location_modal_btn" onClick={AddressValidation}>
              Confirm Address
            </button>
          </div>
        </div>
        <IoMdCloseCircle
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
          onClick={() => toclose(false)}
        >
          close
        </IoMdCloseCircle>
      </div>
    </div>
  );
};

export default Location_Modal;
