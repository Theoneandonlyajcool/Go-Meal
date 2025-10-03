import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { IoCarSportSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import "../Pages/HeritageKitchen.css";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const HeritageKitchen = () => {
  const navigate = useNavigate();

  const handleGoTopreferredKitchen = () => {
    navigate("/preffered");
  };

  return (
    <>
      <div className="kitchen-block">
        <Header />

        <div className="kitchen-hero">
          <img
            src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759070482/68c81f17625db7bdbe7b56e23de6539d9cc2b994_fjpaiq.jpg"
            className="kitchen-hero-image"
            alt=""
          />
          <div className="kitchen-hero-image-text">
            <p>HERITAGE KITCHEN</p>
          </div>
          <div className="hero-back-timer-rapper">
            <span className="back-arrow" onClick={handleGoTopreferredKitchen}>
              <FaArrowLeftLong />
            </span>
            <div className="arriver-time">
              <span className="drive">
                <IoCarSportSharp />
              </span>
              <span className="">20 - 30 mins</span>
            </div>
          </div>
          <div className="hero-rating">
            <span>5.0 ratings</span>
            <div className="star">
              <span>
                <IoStar />
              </span>
              <span>
                <IoStar />
              </span>
              <span>
                <IoStar />
              </span>
              <span>
                <IoStar />
              </span>
              <span>
                <IoStar />
              </span>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="meal-title-box1">
          <div className="meal-title-box2">
            <div className="title">
              <p>Classic & Comfort Breakfasts</p>
            </div>
          </div>
          <div className="meal-table-cover">
            {/* Classic & Comfort Breakfasts 66 */}

            <div className="meal-table-box">
              <div className="meal-table-images">
                <img
                  src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759058700/8c4601b386613c4a722b00ea8c3c92d64bad0fd3_ieghwd.jpg"
                  alt=""
                  className="meal-table-images-image"
                />
                <div className="meal-table-images-price">
                  <span>
                    {" "}
                    <img
                      src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png"
                      className="naira"
                      alt=""
                    />
                    1,500
                  </span>
                </div>
              </div>
              <div className="meal-table-images-text">
                <div className="text-00091">
                  <p>Custard and Akara</p>
                </div>
                <div className="text-00092-cart">
                  <div className="text-cart-text">
                    <span>Add to Cart </span>
                  </div>
                  <div className="text-cart-icons">
                    <MdOutlineShoppingCart />
                  </div>
                </div>
              </div>
              <div className="meal-table-images-text-btn">
                <button className="btn00091">Order Now</button>
              </div>
            </div>
            <div className="meal-table-box">
              <div className="meal-table-images">
                <img
                  src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759058700/8c4601b386613c4a722b00ea8c3c92d64bad0fd3_ieghwd.jpg"
                  alt=""
                  className="meal-table-images-image"
                />
                <div className="meal-table-images-price">
                  <span>
                    {" "}
                    <img
                      src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png"
                      className="naira"
                      alt=""
                    />
                    1,500
                  </span>
                </div>
              </div>
              <div className="meal-table-images-text">
                <div className="text-00091">
                  <p>Custard and Akara</p>
                </div>
                <div className="text-00092-cart">
                  <div className="text-cart-text">
                    <span>Add to Cart </span>
                  </div>
                  <div className="text-cart-icons">
                    <MdOutlineShoppingCart />
                  </div>
                </div>
              </div>
              <div className="meal-table-images-text-btn">
                <button className="btn00091">Order Now</button>
              </div>
            </div>
            <div className="meal-table-box">
              <div className="meal-table-images">
                <img
                  src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759058700/8c4601b386613c4a722b00ea8c3c92d64bad0fd3_ieghwd.jpg"
                  alt=""
                  className="meal-table-images-image"
                />
                <div className="meal-table-images-price">
                  <span>
                    {" "}
                    <img
                      src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png"
                      className="naira"
                      alt=""
                    />
                    1,500
                  </span>
                </div>
              </div>
              <div className="meal-table-images-text">
                <div className="text-00091">
                  <p>Custard and Akara</p>
                </div>
                <div className="text-00092-cart">
                  <div className="text-cart-text">
                    <span>Add to Cart </span>
                  </div>
                  <div className="text-cart-icons">
                    <MdOutlineShoppingCart />
                  </div>
                </div>
              </div>
              <div className="meal-table-images-text-btn">
                <button className="btn00091">Order Now</button>
              </div>
            </div>
            <div className="meal-table-box">
              <div className="meal-table-images">
                <img
                  src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759058700/8c4601b386613c4a722b00ea8c3c92d64bad0fd3_ieghwd.jpg"
                  alt=""
                  className="meal-table-images-image"
                />
                <div className="meal-table-images-price">
                  <span>
                    {" "}
                    <img
                      src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png"
                      className="naira"
                      alt=""
                    />
                    1,500
                  </span>
                </div>
              </div>
              <div className="meal-table-images-text">
                <div className="text-00091">
                  <p>Custard and Akara</p>
                </div>
                <div className="text-00092-cart">
                  <div className="text-cart-text">
                    <span>Add to Cart </span>
                  </div>
                  <div className="text-cart-icons">
                    <MdOutlineShoppingCart />
                  </div>
                </div>
              </div>
              <div className="meal-table-images-text-btn">
                <button className="btn00091">Order Now</button>
              </div>
            </div>
            <div className="meal-table-box">
              <div className="meal-table-images">
                <img
                  src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759058700/8c4601b386613c4a722b00ea8c3c92d64bad0fd3_ieghwd.jpg"
                  alt=""
                  className="meal-table-images-image"
                />
                <div className="meal-table-images-price">
                  <span>
                    {" "}
                    <img
                      src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png"
                      className="naira"
                      alt=""
                    />
                    1,500
                  </span>
                </div>
              </div>
              <div className="meal-table-images-text">
                <div className="text-00091">
                  <p>Custard and Akara</p>
                </div>
                <div className="text-00092-cart">
                  <div className="text-cart-text">
                    <span>Add to Cart </span>
                  </div>
                  <div className="text-cart-icons">
                    <MdOutlineShoppingCart />
                  </div>
                </div>
              </div>
              <div className="meal-table-images-text-btn">
                <button className="btn00091">Order Now</button>
              </div>
            </div>
            <div className="meal-table-box">
              <div className="meal-table-images">
                <img
                  src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759058700/8c4601b386613c4a722b00ea8c3c92d64bad0fd3_ieghwd.jpg"
                  alt=""
                  className="meal-table-images-image"
                />
                <div className="meal-table-images-price">
                  <span>
                    {" "}
                    <img
                      src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png"
                      className="naira"
                      alt=""
                    />
                    1,500
                  </span>
                </div>
              </div>
              <div className="meal-table-images-text">
                <div className="text-00091">
                  <p>Custard and Akara</p>
                </div>
                <div className="text-00092-cart">
                  <div className="text-cart-text">
                    <span>Add to Cart </span>
                  </div>
                  <div className="text-cart-icons">
                    <MdOutlineShoppingCart />
                  </div>
                </div>
              </div>
              <div className="meal-table-images-text-btn">
                <button className="btn00091">Order Now</button>
              </div>
            </div>
            <div className="meal-table-box">
              <div className="meal-table-images">
                <img
                  src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759058700/8c4601b386613c4a722b00ea8c3c92d64bad0fd3_ieghwd.jpg"
                  alt=""
                  className="meal-table-images-image"
                />
                <div className="meal-table-images-price">
                  <span>
                    {" "}
                    <img
                      src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png"
                      className="naira"
                      alt=""
                    />
                    1,500
                  </span>
                </div>
              </div>
              <div className="meal-table-images-text">
                <div className="text-00091">
                  <p>Custard and Akara</p>
                </div>
                <div className="text-00092-cart">
                  <div className="text-cart-text">
                    <span>Add to Cart </span>
                  </div>
                  <div className="text-cart-icons">
                    <MdOutlineShoppingCart />
                  </div>
                </div>
              </div>
              <div className="meal-table-images-text-btn">
                <button className="btn00091">Order Now</button>
              </div>
            </div>
            <div className="meal-table-box">
              <div className="meal-table-images">
                <img
                  src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759058700/8c4601b386613c4a722b00ea8c3c92d64bad0fd3_ieghwd.jpg"
                  alt=""
                  className="meal-table-images-image"
                />
                <div className="meal-table-images-price">
                  <span>
                    {" "}
                    <img
                      src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png"
                      className="naira"
                      alt=""
                    />
                    1,500
                  </span>
                </div>
              </div>
              <div className="meal-table-images-text">
                <div className="text-00091">
                  <p>Custard and Akara</p>
                </div>
                <div className="text-00092-cart">
                  <div className="text-cart-text">
                    <span>Add to Cart </span>
                  </div>
                  <div className="text-cart-icons">
                    <MdOutlineShoppingCart />
                  </div>
                </div>
              </div>
              <div className="meal-table-images-text-btn">
                <button className="btn00091">Order Now</button>
              </div>
            </div>
          </div>
          {/* Classic & Comfort Breakfasts 66 ending*/}

          <div className="meal-title-box2">
            <div className="title">
              <p>Quick Grab-and-Go</p>
            </div>
          </div>
          <div className="meal-table-cover">
            {/* Quick Grab-and-Go 88 */}

            <div className="meal-table-box">
              <div className="meal-table-images">
                <img
                  src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759094992/512a1066dcba1d8777e637f5131ee42e5a6b30f6_fgpks0.jpg"
                  alt=""
                  className="meal-table-images-image"
                />
                <div className="meal-table-images-price">
                  <span>
                    {" "}
                    <img
                      src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png"
                      className="naira"
                      alt=""
                    />
                    1,500
                  </span>
                </div>
              </div>
              <div className="meal-table-images-text">
                <div className="text-00091">
                  <p>Sausage Roll</p>
                </div>
                <div className="text-00092-cart">
                  <div className="text-cart-text">
                    <span>Add to Cart </span>
                  </div>
                  <div className="text-cart-icons">
                    <MdOutlineShoppingCart />
                  </div>
                </div>
              </div>
              <div className="meal-table-images-text-btn">
                <button className="btn00091">Order Now</button>
              </div>
            </div>

            {/* Quick Grab-and-Go 88 */}
          </div>

          {/* <div className="">
                Beverage
                Beverage
                Beverage
            </div> */}

          <div className="Beverage-container">
            <div className="Beverage-meal-title-box2">
              <div className="Beverage-title">
                <p>Beverage Add-Ons</p>
              </div>
            </div>
            <div className="Beverage-meal-table-cover">
              <div className="Beverage-meal-table-box">
                <div className="Beverage-meal-table-images">
                  <img
                    src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759095543/bab6f1e994869aed15f8cf6418867e76f5200532_nyze0v.jpg"
                    alt=""
                    className="Beverage-meal-table-images-image"
                  />
                  <div className="Beverage-meal-table-images-price">
                    <span>
                      {" "}
                      <img
                        src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png"
                        className="Beverage-naira"
                        alt=""
                      />
                      500
                    </span>
                  </div>
                </div>
                <div className="Beverage-meal-table-images-text">
                  <div className="Beverage-text-00091">
                    <p>Bottle Water</p>
                  </div>
                  <div className="Beverage-text-00092-cart">
                    <div className="Beverage-text-cart-text">
                      <span>Add to Cart </span>
                    </div>
                    <div className="Beverage-text-cart-icons">
                      <MdOutlineShoppingCart />
                    </div>
                  </div>
                </div>
                <div className="Beverage-meal-table-images-text-btn">
                  <button className="Beverage-btn00091">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default HeritageKitchen;
