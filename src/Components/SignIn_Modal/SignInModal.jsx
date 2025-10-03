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

  const [SignInErrorMessages, SetSignInErrorMessages] = useState({
    EmailError: "",
    PasswordError: "",
  });

  const SignInValidation = () => {
    let newErrors = {};

    if (SignInInputValues.email == "") {
      newErrors.EmailError = "Pls input your email";
    } else if (!SignInInputValues.email.includes("@gmail.com")) {
      newErrors.EmailError = "Invalid email address";
    }

    if (SignInInputValues.psw == "") {
      newErrors.PasswordError = "Password is required";
    }

    SetSignInErrorMessages(newErrors);

    setTimeout(() => {
      SetSignInErrorMessages({});
    }, 4000);

    return false;

    // return Object.keys(newErrors).length === 0;

    // const email = (SignInInputValues.email || "").trim();
    // const psw = (SignInInputValues.psw || "").trim();
    // const emailRegex = /^\S+@\S+\.\S+$/;

    // if (email === "" && psw === "") {
    //   toast.error("All fields are required");
    //   return false;
    // } else if (email === "" && psw !== "") {
    //   toast.error("Email is required");
    //   return false;
    // } else if (email !== "" && psw === "") {
    //   toast.error("Password is required");
    //   return false;
    // } else if (!emailRegex.test(email)) {
    //   toast.error("Invalid email address");
    //   return false;
    // } else if (psw.length < 8) {
    //   toast.error("Password must be at least 8 characters");
    //   return false;
    // }

    return true;
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (SignInValidation()) {
      console.log("Submit");
    } else {
      console.log("Error");
    }
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
            <p style={{ height: "1rem", fontSize: "1.2rem", color: "red" }}>
              {SignInErrorMessages.EmailError}
            </p>

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

              <p
                style={{
                  color: "red",
                  height: "1rem",
                  fontSize: "1.2rem",
                  alignSelf: "center",
                }}
              >
                {SignInErrorMessages.PasswordError}
              </p>
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
