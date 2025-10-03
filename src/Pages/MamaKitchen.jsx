import React, { useEffect, useState } from 'react'
import { MdCancel, MdOutlineShoppingCart } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { IoCarSportSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./MamaKitchen.css";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import axios from 'axios';

const MamaKitchen = () => {

  const [getproduct, setGetproduct] = useState([]);
  const [buyproduct, setBuyproduct] = useState([]);
  const [product, setProduct] = useState([]);

  const [model, setModel] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null)

   const Classickay = async ()=> {
        try{
            const res = await axios.get("https://go-meal-group3-projectwork.onrender.com/api/v1/products/category/68de62c5c890bbac3b5f76b0")
            setGetproduct(res.data.data)
            console.log(res.data.data)

        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=> {
        Classickay()
    }, [])

    const Quick = async ()=> {
        try{
            const res = await axios.get("https://go-meal-group3-projectwork.onrender.com/api/v1/products/category/68de62c5c890bbac3b5f76b1")
            setBuyproduct(res.data.data)
            console.log(res.data.data)

        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=> {
        Quick()
    }, [])


    const Beverage = async ()=> {
        try{
            const res = await axios.get("https://go-meal-group3-projectwork.onrender.com/api/v1/products/category/68de62c5c890bbac3b5f76b2")
            setProduct(res.data.data)
            console.log(res.data.data)

        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=> {
        Beverage()
    }, [])

  const navigate = useNavigate()

  const handleGoTopreferredKitchen = () => {
    navigate("/preffered");
  };

  return (
    <>
      <div className="mama-kitchen-block">
        <Header />

        {/* Kitchen heading */}
        <div className="mama-kitchen-hero">
          <img
            src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759256034/7bce05956da5483ddf098e09db1df986_djgt8p.jpg"
            className="mama-kitchen-hero-image"
            alt=""
          />
          <div className="mama-kitchen-hero-image-text">
            <p>MAMA KITCHEN</p>
          </div>
          <div className="mama-hero-back-timer-rapper">
            <span
              className="mama-back-arrow"
              onClick={handleGoTopreferredKitchen}
            >
              <FaArrowLeftLong />
            </span>
            <div className="mama-arriver-time">
              <span className="mama-drive">
                <IoCarSportSharp />
              </span>
              <span className="">20 - 30 mins</span>
            </div>
          </div>
          <div className="mama-hero-rating">
            <span>5.0 ratings</span>
            <div className="mama-star">
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

        <div className="mama-meal-title-box1">
          <div className="mama-meal-title-box2">
            <div className="mama-title">
              <p>Classic & Comfort Breakfasts</p>
            </div>
          </div>
          <div className="mama-meal-table-cover">
            {/* Classic & Comfort Breakfasts 66 */}

            {
              getproduct?.map((card)=> (
                  <div className="mama-meal-table-box">
              <div className="mama-meal-table-images">
                <img
                  src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759058700/8c4601b386613c4a722b00ea8c3c92d64bad0fd3_ieghwd.jpg"
                  alt=""
                  className="mama-meal-table-images-image"
                />
                <div className="mama-meal-table-images-price">
                  <span>
                    {" "}
                    <img
                      src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png"
                      className="mama-naira"
                      alt=""
                    />
                    {card.price}
                  </span>
                </div>
              </div>
              <div className="mama-meal-table-images-text">
                <div className="mama-text-00091">
                  <p>{card.productName}</p>
                </div>
                <div className="mama-text-00092-cart">
                  <div className="mama-text-cart-text">
                    <span>Add to Cart </span>
                  </div>
                  <div className="mama-text-cart-icons">
                    <MdOutlineShoppingCart />
                  </div>
                </div>
            </div>
            <div className="mama-meal-table-images-text-btn">
                <button className='mama-btn00091'  onClick={()=> {setModel(true); setSelectedProduct(card);}}>Order Now</button>
            </div>
            </div>
              ))
            }
            
          </div>
          {/* Classic & Comfort Breakfasts 66 ending*/}

          <div className="mama-meal-title-box2">
            <div className="mama-title">
              <p>Quick Grab-and-Go</p>
            </div>
          </div>
          <div className="mama-meal-table-cover">
            {/* Quick Grab-and-Go 88 */}

            <div className="mama-meal-table-box">
              <div className="mama-meal-table-images">
                <img
                  src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759094992/512a1066dcba1d8777e637f5131ee42e5a6b30f6_fgpks0.jpg"
                  alt=""
                  className="mama-meal-table-images-image"
                />
                <div className="mama-meal-table-images-price">
                  <span>
                    {" "}
                    <img
                      src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png"
                      className="mama-naira"
                      alt=""
                    />
                    1,500
                  </span>
                </div>
              </div>
              <div className="mama-meal-table-images-text">
                <div className="mama-text-00091">
                  <p>Sausage Roll</p>
                </div>
                <div className="mama-text-00092-cart">
                  <div className="mama-text-cart-text">
                    <span>Add to Cart </span>
                  </div>
                  <div className="mama-text-cart-icons">
                    <MdOutlineShoppingCart />
                  </div>
                </div>
            </div>
            <div className="mama-meal-table-images-text-btn">
                <button className='mama-btn00091'  onClick={()=> {setModel(true); setSelectedProduct(card);}}>Order Now</button>
            </div>
            </div>

            {/* Quick Grab-and-Go 88 */}
          </div>

          {/* <div className="">
                Beverage
                Beverage
                Beverage
            </div> */}

          <div className="mama-Beverage-container">
            <div className="mama-Beverage-meal-title-box2">
              <div className="mama-Beverage-title">
                <p>Beverage Add-Ons</p>
              </div>
            </div>

            <div className="mama-Beverage-meal-table-cover">

              {
                product?.map((good)=> (
                  <div className="mama-Beverage-meal-table-box" key={good._id}>
                <div className="mama-Beverage-meal-table-images">
                  <img
                    src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759095543/bab6f1e994869aed15f8cf6418867e76f5200532_nyze0v.jpg"
                    alt=""
                    className="mama-Beverage-meal-table-images-image"
                  />
                  <div className="mama-Beverage-meal-table-images-price">
                    <span>
                      {" "}
                      <img
                        src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png"
                        className="mama-Beverage-naira"
                        alt=""
                      />
                      {good.price}
                    </span>
                  </div>
                </div>
                <div className="mama-Beverage-meal-table-images-text">
                  <div className="mama-Beverage-text-00091">
                    <p>{good.productName}</p>
                  </div>
                  <div className="mama-Beverage-text-00092-cart">
                    <div className="mama-Beverage-text-cart-text">
                      <span>Add to Cart </span>
                    </div>
                    <div className="mama-Beverage-text-cart-icons">
                      <MdOutlineShoppingCart />
                    </div>
                    
                </div>
            </div>
            <div className="mama-Beverage-meal-table-images-text-btn">
                <button className='mama-Beverage-btn00091' onClick={()=> {setModel(true); setSelectedProduct(good);}}>Order Now</button>
            </div>
            </div>
                ))
              }
              
            
            </div>
          </div>
        </div>
      </div>




      {
            model && (
                <div className="model-background-back">
                    <div className="model-block01">
                    <div className="image-holder-model">
                        <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759413064/748750610b538c0315d185d9820a2fdfee97cf45_czkpwe.jpg" alt=""  className='model-img'/>

                        <div className="close-model-22" >
                            <MdCancel  onClick={()=> setModel(false)}/>
                        </div>
                        <div className="model-text-wrap">
                            <div className="model-discretion">
                                <p>{selectedProduct.productName}</p>
                                <span>Sausage Roll With a glass of orange juice </span>
                            </div>
                            <div className="model-drive">
                                <span className='molde-car01'><IoCarSportSharp /></span>
                                <span>20 - 30 mins</span>
                            </div>                          
                        </div>
                        <div className="model-price1">
                            <span>₦ {selectedProduct.price}</span>
                        </div>
                        <div className="count-payment">
                            <div className="count-model-qty">
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </div>
                            <button>Proceed to checkout</button>
                        </div>
                    </div>
                    </div>
                </div>
            )
        }

    </>
  );
};

export default MamaKitchen;
