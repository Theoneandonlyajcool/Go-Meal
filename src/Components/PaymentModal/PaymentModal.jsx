import "./PaymentModal.css";
import { CiCreditCard1 } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";

const PaymentModal = () => {
  return (
    <div className="payment_cont">
      <div className="payment_child">
        {/* Close modal */}

        <IoIosCloseCircle
          style={{
            fontSize: "2rem",
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
          }}
        />

        {/*  */}

        <div className="payment_content">
          {/* Heading */}
          <h3>Payment Option</h3>

          {/* options */}
          <div
            style={{
              border: "2px solid red",
              height: "3rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CiCreditCard1 />

            <p>Pay with card</p>

            <input type="checkbox" />
          </div>

          {/* Globe */}
          <div>
            <CiGlobe />
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default PaymentModal;
