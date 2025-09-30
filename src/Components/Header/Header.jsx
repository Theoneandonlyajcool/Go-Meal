import "./Header.css";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart, MdClose } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { GrMenu } from "react-icons/gr";
import { IoIosArrowRoundBack } from "react-icons/io";

const Header = () => {
  const [InputValues, SetInputValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phNumber: "",
    psw: "",
    confirmPsw: "",
  });

  const [ErrorMessages, SetErrorMessages] = useState({
    FirstNameError: "",
    LastNameError: "",
    EmailError: "",
    PhNumberError: "",
    PswError: "",
    ConfirmPswError: "",
  });

  const [MobileMenu, SetMobileMenu] = useState(false);
  const [CartItems, SetCartItems] = useState([]);
  const [DisplayCartItems, SetDisplayCartItems] = useState(false);
  const [SignUp, SetSignUp] = useState(false);
  const [OTP_Verification, Set_OTP_Verification] = useState(false);

  // OTP Counter
  let OTP_count = 59;

  const Validation = () => {
    // if (InputValues.firstName == "") {
    //   SetErrorMessages({
    //     ...ErrorMessages,
    //     FirstNameError: "Input First name",
    //   });

    //   setTimeout(() => {
    //     SetErrorMessages({ ...ErrorMessages, FirstNameError: "" });
    //   }, 3000);
    // }

    // if (InputValues.lastName == "") {
    //   SetErrorMessages({ ...ErrorMessages, LastNameError: "Input Last name" });
    //   setTimeout(() => {
    //     SetErrorMessages({ ...ErrorMessages, LastNameError: "" });
    //   }, 3000);
    // }

    let newErrors = {};

    if (InputValues.firstName == "") {
      newErrors.FirstNameError = "Input your first name";
    }

    if (InputValues.lastName == "") {
      newErrors.LastNameError = "Input your last name";
    }

    if (InputValues.email == "") {
      newErrors.EmailError = "Pls input your email";
    } else if (!InputValues.email.includes("@gmail.com")) {
      newErrors.EmailError = "Invalid email address";
    }

    if (InputValues.phNumber == "") {
      newErrors.PhNumberError = "Phone number is required";
    } else if (InputValues.phNumber.length < 11) {
      newErrors.PhNumberError = "Phone number must be 11 digits";
    } else if (InputValues.phNumber.length > 11) {
      newErrors.PhNumberError = "Phone number must be exactly 11 digits";
    }

    if (InputValues.psw == "") {
      newErrors.PswError = "Password is required";
    } else if (InputValues.psw.length < 8) {
      newErrors.PswError = "Password must be 8 characters long";
    } else if (!/[a-z]/.test(InputValues.psw)) {
      newErrors.PswError =
        "Password must contain at least one lowercase letter";
    } else if (!/[A-Z]/.test(InputValues.psw)) {
      newErrors.PswError =
        "Password must contain at least one uppercase letter";
    } else if (!/[0-9]/.test(InputValues.psw)) {
      newErrors.PswError = "Password must contain at least one number";
    }

    if (InputValues.confirmPsw == "") {
      newErrors.ConfirmPswError = "Confirm password is required";
    } else if (InputValues.confirmPsw !== InputValues.psw) {
      newErrors.ConfirmPswError = "Passwords don't match";
    }

    SetErrorMessages(newErrors);

    setTimeout(() => {
      SetErrorMessages({});
    }, 4000);
    return Object.keys(newErrors).length === 0;
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form Submitted");

    if (Validation()) {
      console.log("Form submitted succesfully");
      console.log(InputValues);
      SetInputValues({
        firstName: "",
        lastName: "",
        email: "",
        phNumber: "",
        psw: "",
        confirmPsw: "",
      });
      SetSignUp(false);
      Set_OTP_Verification(true);
    } else {
      console.log("An error occured");
    }
  };

  return (
    <div className="Header_cont">
      <div className="Header_child">
        {/*Image container  */}

        <div>
          <img src="/Images/Mask group.png" alt="" />
        </div>

        {/* input, add to cart ... */}

        <div className="Header_Contents">
          {/* Input */}
          <div className="input_container">
            <input
              type="text"
              className="Header_search_input"
              placeholder="Search for....."
            />
            <CiSearch
              style={{ fontSize: "1.2rem", color: "rgb(58, 58, 58)" }}
            />
          </div>

          {/* Cart and user */}

          <div className="cart_and_user_holder">
            {/* Add to cart  */}
            <div className="ATC">
              <MdOutlineShoppingCart
                className="Header_cart"
                onClick={() => SetDisplayCartItems(true)}
              />
              <p className="number_of_cart_items">0</p>
            </div>

            {/* user */}

            <div className="Header_user_cont">
              <CiUser
                className="Header_user_icon"
                onClick={() => SetSignUp(true)}
              />
            </div>
          </div>

          {/* Cart items */}

          {DisplayCartItems && (
            <div className="cart_items_cont">
              {CartItems.length >= 1 ? (
                <div></div>
              ) : (
                <div className="empty_cart_items_cont">
                  {/* Heading of empty cart */}
                  <div className="empty_cart_heading_cont">
                    {/*  */}

                    <div className="empty_cart_heading">
                      <div className="heading_child">
                        <div
                          style={{
                            width: "20%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <IoIosArrowRoundBack
                            style={{
                              fontSize: "1.5rem",
                              color: "rgb(77, 77, 77)",
                              cursor: "pointer",
                            }}
                            onClick={() => SetDisplayCartItems(false)}
                          />
                          <p
                            style={{
                              fontSize: "1.5rem",
                              color: "rgb(77, 77, 77)",
                            }}
                          >
                            Cart
                          </p>
                        </div>

                        {/* Close button */}
                        <div className="empty_cart_close_button">
                          <MdClose
                            style={{ fontSize: "1.2rem" }}
                            onClick={() => SetDisplayCartItems(false)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Line */}
                    <div className="empty_cart_heading_line"></div>
                  </div>

                  {/* Body of empty cart */}
                  <div
                    style={{
                      color: "rgb(77,77,77)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "75%",
                      flexDirection: "column",
                    }}
                  >
                    <MdOutlineShoppingCart style={{ fontSize: "10rem" }} />

                    <p style={{ textAlign: "center" }}>
                      Your cart is Empty <br />
                      Add items to get started
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Login and signup modal */}
          {SignUp && (
            <div className="sign_up_bg">
              <div className="sign_up_cont">
                <div className="sign_up_child">
                  {/* image and form headeing */}
                  <div className="form_heading">
                    <img src="/Images/Mask group (1).png" alt="" />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <p style={{ fontWeight: "600" }}>Sign up</p>
                      <p>Create account to continue</p>
                    </div>
                  </div>

                  {/*  */}
                  <form
                    className="sign_up_input_form"
                    action="submit"
                    onSubmit={HandleSubmit}
                  >
                    {/* name */}
                    <div
                      className="sign_up_name_input_holder"
                      style={{ width: "100%" }}
                    >
                      {/* First name */}
                      <div
                        style={{
                          width: "50%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <label htmlFor="">First name</label>

                        <input
                          type="text"
                          className="sign_up_inputs"
                          // required
                          value={InputValues.firstName}
                          onChange={(e) =>
                            SetInputValues({
                              ...InputValues,
                              firstName: e.target.value,
                            })
                          }
                        />
                        <p
                          style={{
                            height: ".5rem",
                            color: "red",
                            alignSelf: "center",
                          }}
                        >
                          {ErrorMessages.FirstNameError}
                        </p>
                      </div>

                      {/* last name */}
                      <div
                        style={{
                          width: "50%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          // textAlign: "center",
                        }}
                      >
                        <label htmlFor="">Last name</label>
                        <input
                          type="text"
                          className="sign_up_inputs"
                          // required
                          value={InputValues.lastName}
                          onChange={(e) =>
                            SetInputValues({
                              ...InputValues,
                              lastName: e.target.value,
                            })
                          }
                        />{" "}
                        <p
                          style={{
                            height: ".5rem",
                            color: "red",
                            alignSelf: "center",
                          }}
                        >
                          {ErrorMessages.LastNameError}
                        </p>
                      </div>
                    </div>

                    {/* Email input */}
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="sign_up_inputs"
                        // required
                        value={InputValues.email}
                        onChange={(e) =>
                          SetInputValues({
                            ...InputValues,
                            email: e.target.value,
                          })
                        }
                      />
                      <p
                        style={{
                          height: ".5rem",
                          color: "red",
                          alignSelf: "center",
                        }}
                      >
                        {ErrorMessages.EmailError}
                      </p>
                    </div>

                    {/* phone number input */}
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <label htmlFor="ph_numbet">Phone Number</label>
                      <input
                        type="number"
                        className="sign_up_inputs"
                        value={InputValues.phNumber}
                        onChange={(e) =>
                          SetInputValues({
                            ...InputValues,
                            phNumber: e.target.value,
                          })
                        }
                      />
                      <p
                        style={{
                          height: ".5rem",
                          color: "red",
                          alignSelf: "center",
                        }}
                      >
                        {ErrorMessages.PhNumberError}
                      </p>
                    </div>

                    {/* Password */}
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <label htmlFor="">Password</label>
                      <input
                        type="password"
                        className="sign_up_inputs"
                        // required
                        value={InputValues.psw}
                        onChange={(e) =>
                          SetInputValues({
                            ...InputValues,
                            psw: e.target.value,
                          })
                        }
                      />
                      <p
                        style={{
                          height: ".5rem",
                          color: "red",
                          alignSelf: "center",
                        }}
                      >
                        {ErrorMessages.PswError}
                      </p>
                    </div>

                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <label htmlFor="">Confirm password</label>
                      <input
                        type="password"
                        className="sign_up_inputs"
                        // required
                        value={InputValues.confirmPsw}
                        onChange={(e) =>
                          SetInputValues({
                            ...InputValues,
                            confirmPsw: e.target.value,
                          })
                        }
                      />
                      <p
                        style={{
                          height: ".5rem",
                          color: "red",
                          alignSelf: "center",
                        }}
                      >
                        {ErrorMessages.ConfirmPswError}
                      </p>
                    </div>

                    <button className="sign_up_btn" style={{ width: "100%" }}>
                      Sign up
                    </button>
                    <p>
                      Already have an account ? <b>Sign in</b>{" "}
                    </p>

                    {/*  */}
                  </form>
                </div>

                {/* close sign up modal button */}
                <div
                  className="sign_up_close_btn"
                  onClick={() => SetSignUp(false)}
                >
                  <MdClose style={{ fontSize: "1.2rem" }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* OTP Verification */}

        {OTP_Verification && (
          <div className="OTP_bg">
            <div className="OTP_form_bg">
              {/*  */}
              <div className="OTP_form_child">
                {/* Heading */}

                <div className="OTP_heading">
                  <p style={{ fontSize: "1.5rem" }}>Verify Account</p>
                  <p>Please input code sent to your email</p>
                </div>

                {/* Inputs */}
                <div className="OTP_inputs_cont">
                  <input type="text" className="OTP_inputs" maxLength={1} />
                  <input type="text" className="OTP_inputs" maxLength={1} />
                  <input type="text" className="OTP_inputs" maxLength={1} />
                  <input type="text" className="OTP_inputs" maxLength={1} />
                </div>

                {/* Finish button */}
                <button
                  className="OTP_btn"
                  onClick={() => Set_OTP_Verification(false)}
                >
                  Finish sign up
                </button>

                {/* Resend code  */}
                <div>
                  <p>Resend code in 00:{OTP_count}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile nav */}

        <div className="Mobile_content">
          {/* Nav icon */}

          <div>
            <GrMenu
              className="mobile_nav"
              onClick={() => SetMobileMenu(true)}
            />
          </div>

          {/* Mobile menu */}
          {MobileMenu && (
            <div className="mobile_menu_cont">
              <div className="mobile_menu_card_cont">
                {/* Close mobile card*/}
                <div>
                  <MdClose
                    style={{ fontSize: "2rem" }}
                    onClick={() => SetMobileMenu(false)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
