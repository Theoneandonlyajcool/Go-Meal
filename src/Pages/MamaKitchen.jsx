import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { IoCarSportSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./MamaKitchen.css"
import { useNavigate } from 'react-router-dom';

const MamaKitchen = () => {

  const navigate = useNavigate()

  const handleGoTopreferredKitchen =()=>{
    navigate("/preffered")
  }

  return (
    <>
      <div className="mama-kitchen-block">
        
        <div className="mama-kitchen-hero">
                <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759256034/7bce05956da5483ddf098e09db1df986_djgt8p.jpg" className="mama-kitchen-hero-image" alt="" />
                <div className="mama-kitchen-hero-image-text">
                    <p>MAMA KITCHEN</p>
                </div>
                <div className="mama-hero-back-timer-rapper">
                    <span className='mama-back-arrow' onClick={handleGoTopreferredKitchen}><FaArrowLeftLong /></span>
                    <div className="mama-arriver-time">
                        <span className='mama-drive'><IoCarSportSharp /></span>
                        <span className=''>20 - 30 mins</span>
                    </div>
                </div>
                <div className="mama-hero-rating">
                    <span>5.0 ratings</span>
                    <div className="mama-star">
                        <span><IoStar /></span>
                        <span><IoStar /></span>
                        <span><IoStar /></span>
                        <span><IoStar /></span>
                        <span><IoStar /></span>
                    </div>
                </div>
        </div>
        <div className="mama-meal-title-box1">



            <div className="mama-meal-title-box2">
                <div className="mama-title">
                <p>Classic & Comfort Breakfasts</p>
                </div>
            </div>
            <div className="mama-meal-table-cover">

            {/* Classic & Comfort Breakfasts 66 */}

            <div className="mama-meal-table-box">
            <div className="mama-meal-table-images">
                <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759058700/8c4601b386613c4a722b00ea8c3c92d64bad0fd3_ieghwd.jpg" alt=""  className='mama-meal-table-images-image'/>
                <div className="mama-meal-table-images-price">
                    <span> <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png" className='mama-naira' alt="" />1,500</span>
                </div>
            </div>
            <div className="mama-meal-table-images-text">
                <div className="mama-text-00091">
                    <p>Custard and Akara</p>
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
                <button className='mama-btn00091'>Order Now</button>
            </div>
            </div>
            
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
                <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759094992/512a1066dcba1d8777e637f5131ee42e5a6b30f6_fgpks0.jpg" alt=""  className='mama-meal-table-images-image'/>
                <div className="mama-meal-table-images-price">
                    <span> <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png" className='mama-naira' alt="" />1,500</span>
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
                <button className='mama-btn00091'>Order Now</button>
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


            <div className="mama-Beverage-meal-table-box">
            <div className="mama-Beverage-meal-table-images">
                <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759095543/bab6f1e994869aed15f8cf6418867e76f5200532_nyze0v.jpg" alt=""  className='mama-Beverage-meal-table-images-image'/>
                <div className="mama-Beverage-meal-table-images-price">
                    <span> <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png" className='mama-Beverage-naira' alt="" />500</span>
                </div>
            </div>
            <div className="mama-Beverage-meal-table-images-text">
                <div className="mama-Beverage-text-00091">
                    <p>Bottle Water</p>
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
                <button className='mama-Beverage-btn00091'>Order Now</button>
            </div>
            </div>
            
            </div>
            </div>



        </div>
        
      </div>
    </>
  )
}

export default MamaKitchen

