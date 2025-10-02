import { useState } from "react";
import "./SignInModal.css";
import { IoMdCloseCircle } from "react-icons/io";
import { FaEyeLowVision } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";

const SignInModal = ({ closeSignInModal, openSignUpModal }) => {
  const [ShowPsw, SetShowPSw] = useState(false);

  const [SignInInputValues, SetSignInInputValues] = useState({
    email: "",
    psw: "",
  });

  const SignInValidation = () => {
    if (SignInInputValues.email == "") {
      toast.error("email is required");
    }

    // if(){

    // }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    SignInValidation();
  };

  return (
    <div className="sign_in_modal_cont">
      <div className="sign_in_modal_child">
        {/* Close button */}
        <IoMdCloseCircle
          className="sin_in_close_btn"
          onClick={() => closeSignInModal(false)}
        />

        {/*  */}

        <ToastContainer />
        <div
          style={{
            // border: "2px solid red",
            width: "100%",
            maxWidth: "85%",
            height: "100%",
            maxHeight: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* image and heading */}

          <div
            style={{
              // border: "2px solid blue",
              display: "flex",
              width: "60%",
              textAlign: "center",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              src="https://res.cloudinary.com/dp75oveuw/image/upload/v1759329276/Mask_group_1_c8le7k.png"
              alt=""
            />
            <div>
              <h2>Sign in account</h2>
            </div>
          </div>

          {/* form part */}
          <form
            action="
        submit"
            onSubmit={HandleSubmit}
            className="sign_in_form"
          >
            {/* mail */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                // border: "2px solid black",
                width: "100%",
              }}
            >
              <label htmlFor="Email">Email</label>
              <input type="text" className="sign_in_inputs" />
            </div>

            {/* password */}
            <div className="sign_in_psw_input">
              <label htmlFor="">Password</label>

              {/*  */}

              <div className="sign_in_psw_input_cont">
                <input type={ShowPsw ? "text" : "password"} />
                <div
                  className="sign_in_eye_icon_cont"
                  onClick={() => SetShowPSw(!ShowPsw)}
                >
                  {ShowPsw ? <FaEye /> : <FaEyeLowVision />}
                </div>
              </div>
            </div>
            <p style={{ alignSelf: "end" }}>Forgot Password?</p>

            <button className="sign_in_btn">Sign in</button>

            <a
              href="
              #"
              style={{ color: "black", textDecoration: "none" }}
              onClick={() => {
                closeSignInModal(false);
                openSignUpModal(true);
              }}
            >
              Don't have an account? <b>Sign Up</b>
            </a>
          </form>

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
