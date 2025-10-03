import React, { useEffect, useState } from "react";
import { MdCancel, MdOutlineShoppingCart } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { IoCarSportSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./KaylizsKitchen.css";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const KaylizsKitchen = () => {
  const navigate = useNavigate();

  const handleGoTopreferredKitchen = () => {
    navigate("/preffered");
  };

  return (
    <>
      <div className="Kayliz-container">
        <Header />
        <div className="Kayliz-hero1">
          <img
            src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759247850/960f3477fb95917c4b34d395afeeb824_1_sor3kp.jpg"
            className="Kayliz-main"
            alt=""
          />
          <div className="Kayliz-big-name">
            <p>KAYLIZ'S KITCHEN</p>
          </div>
          <div className="Kayliz-rapper">
            <span
              className="Kayliz-back-arrow"
              onClick={handleGoTopreferredKitchen}
            >
              <FaArrowLeftLong />
            </span>
            <div className="Kayliz-arriver-time">
              <span className="Kayliz-drive">
                <IoCarSportSharp />
              </span>
              <span className="">30 - 50 mins</span>
            </div>
          </div>
          <div className="Kayliz-hero-rating">
            <span>4.0 ratings</span>
            <div className="Kayliz-star">
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
        <div className="Kayliz-meal-title-box1">
          <div className="Kayliz-meal-title-box2">
            <div className="Kayliz-title">
              <p>Classic Continental Breakfasts</p>
            </div>
          </div>
          <div className="Kayliz-meal-table-cover">
            {/* Classic & Comfort Breakfasts 66 */}

            <div className="Kayliz-meal-table-box">
              <div className="Kayliz-meal-table-images">
                <img
                  src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759232593/5984649553a31dcf921c89f5304c86f3_irdbk4.jpg"
                  alt=""
                  className="Kayliz-meal-table-images-image"
                />
                <div className="Kayliz-meal-table-images-price">
                  <span>
                    {" "}
                    <img
                      src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png"
                      className="Kayliz-naira"
                      alt=""
                    />
                    1,500
                  </span>
                </div>
              </div>
              <div className="Kayliz-meal-table-images-text">
                <div className="Kayliz-text-00091">
                  <p>Pancake with Egg</p>
                </div>
                <div className="Kayliz-text-00092-cart">
                  <div className="Kayliz-text-cart-text">
                    <span>Add to Cart </span>
                  </div>
                  <div className="Kayliz-text-cart-icons">
                    <MdOutlineShoppingCart />
                  </div>
                </div>
              </div>
              <div className="Kayliz-meal-table-images-text-btn">
                <button className="Kayliz-btn00091">Order Now</button>
              </div>
            </div>
          </div>
          {/* Classic & Comfort Breakfasts 66 ending*/}

          <div className="Kayliz-meal-title-box2">
            <div className="Kayliz-title">
              <p>Healthy Picks</p>
            </div>
          </div>
          <div className="Kayliz-meal-table-cover">
            {/* Quick Grab-and-Go 88 */}

            <div className="Kayliz-meal-table-box">
              <div className="Kayliz-meal-table-images">
                <img
                  src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759247796/3d652507bc3b3a35907bfff003aead79_va8pvy.jpg"
                  alt=""
                  className="Kayliz-meal-table-images-image"
                />
                <div className="Kayliz-meal-table-images-price">
                  <span>
                    {" "}
                    <img
                      src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png"
                      className="Kayliz-naira"
                      alt=""
                    />
                    1,500
                  </span>
                </div>
              </div>
              <div className="Kayliz-meal-table-images-text">
                <div className="Kayliz-text-00091">
                  <p>Scrambled Bowl</p>
                </div>
                <div className="Kayliz-text-00092-cart">
                  <div className="Kayliz-text-cart-text">
                    <span>Add to Cart </span>
                  </div>
                  <div className="Kayliz-text-cart-icons">
                    <MdOutlineShoppingCart />
                  </div>
                </div>
              </div>
              <div className="Kayliz-meal-table-images-text-btn">
                <button className="Kayliz-btn00091">Order Now</button>
              </div>
            </div>
                ))
            }

            

            {/* Quick Grab-and-Go 88 */}
          </div>

          {/* <div className="">
                Beverage
                Beverage
                Beverage
            </div> */}

          <div className="Kayliz-Beverage-container">
            <div className="Kayliz-Beverage-meal-title-box2">
              <div className="Kayliz-Beverage-title">
                <p>Beverage Add-Ons</p>
              </div>
            </div>
            <div className="Kayliz-Beverage-meal-table-cover">
              <div className="Kayliz-Beverage-meal-table-box">
                <div className="Kayliz-Beverage-meal-table-images">
                  <img
                    src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759095543/bab6f1e994869aed15f8cf6418867e76f5200532_nyze0v.jpg"
                    alt="food"
                    className="Kayliz-Beverage-meal-table-images-image"
                  />
                  <div className="Kayliz-Beverage-meal-table-images-price">
                    <span>
                      {" "}
                      <img
                        src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png"
                        className="Kayliz-Beverage-naira"
                        alt="Naira"
                      />
                      500
                    </span>
                  </div>
                </div>
                <div className="Kayliz-Beverage-meal-table-images-text">
                  <div className="Kayliz-Beverage-text-00091">
                    <p>Bottle Water</p>
                  </div>
                  <div className="Kayliz-Beverage-text-00092-cart">
                    <div className="Kayliz-Beverage-text-cart-text">
                      <span>Add to Cart </span>
                    </div>
                    <div className="Kayliz-Beverage-text-cart-icons">
                      <MdOutlineShoppingCart />
                    </div>
                  </div>
                </div>
                <div className="Kayliz-Beverage-meal-table-images-text-btn">
                  <button className="Kayliz-Beverage-btn00091">
                    Order Now
                  </button>
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

export default KaylizsKitchen;
