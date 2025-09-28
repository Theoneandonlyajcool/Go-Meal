import "./Header.css";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart, MdClose } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { GrMenu } from "react-icons/gr";
import { IoIosArrowRoundBack } from "react-icons/io";

const Header = () => {
  const [MobileMenu, SetMobileMenu] = useState(false);
  const [CartItems, SetCartItems] = useState([]);
  const [DisplayCartItems, SetDisplayCartItems] = useState(false);
  const [SignUp, SetSignUp] = useState(true);

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
                    onSubmit={(e) => e.preventDefault()}
                  >
                    {/* name */}
                    <div className="sign_up_name_input_holder">
                      <div>
                        <label htmlFor="">First name</label>

                        <input type="text" />
                      </div>

                      <div>
                        <label htmlFor="">Last name</label>
                        <input type="text" />
                      </div>
                    </div>

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
