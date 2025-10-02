import React, { useState } from 'react'
import { MdCancel, MdOutlineShoppingCart } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { IoCarSportSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./RennesKitchen.css"
import { useNavigate } from 'react-router-dom';

const RennesKitchen = () => {

    const [model, setModel] = useState(false);

  const navigate = useNavigate()

  const handleGoTopreferredKitchen =()=>{
    navigate("/preffered")
  }

  return (
    <>
      <div className="renne-kitchen-block">
        
        <div className="renne-kitchen-hero">
                <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759234735/66aef36f0ba075e40df1c11b76ba9183_hbzmvb.jpg" className="renne-kitchen-hero-image" alt="" />
                <div className="renne-kitchen-hero-image-text">
                    <p>RENNE'S KITCHEN</p>
                </div>
                <div className="renne-hero-back-timer-rapper">
                    <span className='renne-back-arrow' onClick={handleGoTopreferredKitchen}><FaArrowLeftLong /></span>
                    <div className="renne-arriver-time">
                        <span className='renne-drive'><IoCarSportSharp /></span>
                        <span className=''>30 - 40 mins</span>
                    </div>
                </div>
                <div className="renne-hero-rating">
                    <span>4.0 ratings</span>
                    <div className="renne-star">
                        <span><IoStar /></span>
                        <span><IoStar /></span>
                        <span><IoStar /></span>
                        <span><IoStar /></span>
                    </div>
                </div>
        </div>
        <div className="renne-meal-title-box1">



            <div className="renne-meal-title-box2">
                <div className="renne-title">
                <p>Classic Continental Breakfasts</p>
                </div>
            </div>
            <div className="renne-meal-table-cover">

            {/* Classic & Comfort Breakfasts 66 */}

            <div className="renne-meal-table-box">
            <div className="renne-meal-table-images">
                <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759232593/5984649553a31dcf921c89f5304c86f3_irdbk4.jpg" alt=""  className='renne-meal-table-images-image'/>
                <div className="renne-meal-table-images-price">
                    <span> <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png" className='renne-naira' alt="" />1,500</span>
                </div>
            </div>
            <div className="renne-meal-table-images-text">
                <div className="renne-text-00091">
                    <p>Pancake with Egg</p>
                </div>
                <div className="renne-text-00092-cart">
                    <div className="renne-text-cart-text">
                        <span>Add to Cart </span>
                    </div>
                    <div className="renne-text-cart-icons">
                        <MdOutlineShoppingCart />
                    </div>
                    
                </div>
            </div>
            <div className="renne-meal-table-images-text-btn">
                <button className='renne-btn00091'  onClick={()=> setModel(true)}>Order Now</button>
            </div>
            </div>
            
            </div>
            {/* Classic & Comfort Breakfasts 66 ending*/}

            <div className="renne-meal-title-box2">
                <div className="renne-title">
                <p>Healthy Picks</p>
                </div>
            </div>
            <div className="renne-meal-table-cover">
            
            {/* Quick Grab-and-Go 88 */}

            <div className="renne-meal-table-box">
            <div className="renne-meal-table-images">
                <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759232797/0f2080fc037eed5073c96867d93c869f_1_z7h4if.jpg" alt=""  className='renne-meal-table-images-image'/>
                <div className="renne-meal-table-images-price">
                    <span> <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png" className='renne-naira' alt="" />1,500</span>
                </div>
            </div>
            <div className="renne-meal-table-images-text">
                <div className="renne-text-00091">
                    <p>Scrambled Bowl</p>
                </div>
                <div className="renne-text-00092-cart">
                    <div className="renne-text-cart-text">
                        <span>Add to Cart </span>
                    </div>
                    <div className="renne-text-cart-icons">
                        <MdOutlineShoppingCart />
                    </div>
                    
                </div>
            </div>
            <div className="renne-meal-table-images-text-btn">
                <button className='renne-btn00091'  onClick={()=> setModel(true)}>Order Now</button>
            </div>
            </div>

            {/* Quick Grab-and-Go 88 */}
            
            </div>

            {/* <div className="">
                Beverage
                Beverage
                Beverage
            </div> */}

            <div className="renne-gocontainer">
            <div className="renne-gomeal-title-box2">
                <div className="renne-gotitle">
                <p>Beverage Add-Ons</p>
                </div>
            </div>
            <div className="renne-gomeal-table-cover">


            <div className="renne-gomeal-table-box">
            <div className="renne-gomeal-table-images">
                <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759095543/bab6f1e994869aed15f8cf6418867e76f5200532_nyze0v.jpg" alt=""  className='renne-gomeal-table-images-image'/>
                <div className="renne-gomeal-table-images-price">
                    <span> <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png" className='renne-gonaira' alt="" />500</span>
                </div>
            </div>
            <div className="renne-gomeal-table-images-text">
                <div className="renne-gotext-00091">
                    <p>Bottle Water</p>
                </div>
                <div className="renne-gotext-00092-cart">
                    <div className="renne-gotext-cart-text">
                        <span>Add to Cart </span>
                    </div>
                    <div className="renne-gotext-cart-icons">
                        <MdOutlineShoppingCart />
                    </div>
                    
                </div>
            </div>
            <div className="renne-gomeal-table-images-text-btn">
                <button className='renne-gobtn00091'  onClick={()=> setModel(true)}>Order Now</button>
            </div>
            </div>
            
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
                                <p>Pap And Akara</p>
                                <span>Sausage Roll With a glass of orange juice </span>
                            </div>
                            <div className="model-drive">
                                <span className='molde-car01'><IoCarSportSharp /></span>
                                <span>20 - 30 mins</span>
                            </div>                          
                        </div>
                        <div className="model-price1">
                            <span>₦2,500</span>
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
  )
}

export default RennesKitchen

