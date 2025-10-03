import React, { useEffect, useState } from "react";
import { MdCancel, MdOutlineShoppingCart } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { IoCarSportSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import "../Pages/HeritageKitchen.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HeritageKitchen = () => {

    const [getproduct, setGetproduct] = useState([]);
    const [buyproduct, setBuyproduct] = useState([]);
    const [product, setProduct] = useState([]);

    const [model, setModel] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null)

    const Classic = async ()=> {
        try{
            const res = await axios.get("https://go-meal-group3-projectwork.onrender.com/api/v1/products/category/68de62c4c890bbac3b5f76a4")
            setGetproduct(res.data.data)
            console.log(res.data.data)

        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=> {
        Classic()
    }, [])

    const Quick = async ()=> {
        try{
            const res = await axios.get("https://go-meal-group3-projectwork.onrender.com/api/v1/products/category/68de62c4c890bbac3b5f76a5")
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
            const res = await axios.get("https://go-meal-group3-projectwork.onrender.com/api/v1/products/category/68de62c4c890bbac3b5f76a6")
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

  const handleGoTopreferredKitchen =()=>{
    navigate("/preffered")
  }

  return (
    <>
      <div className="kitchen-block">
        
        <div className="kitchen-hero">
                <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759070482/68c81f17625db7bdbe7b56e23de6539d9cc2b994_fjpaiq.jpg" className="kitchen-hero-image" alt="" />
                <div className="kitchen-hero-image-text">
                    <p>HERITAGE KITCHEN</p>
                </div>
                <div className="hero-back-timer-rapper">
                    <span className='back-arrow' onClick={handleGoTopreferredKitchen}><FaArrowLeftLong /></span>
                    <div className="arriver-time">
                        <span className='drive'><IoCarSportSharp /></span>
                        <span className=''>20 - 30 mins</span>
                    </div>
                </div>
                <div className="hero-rating">
                    <span>5.0 ratings</span>
                    <div className="star">
                        <span><IoStar /></span>
                        <span><IoStar /></span>
                        <span><IoStar /></span>
                        <span><IoStar /></span>
                        <span><IoStar /></span>
                    </div>
                </div>
        </div>
        <div className="meal-title-box1">



            <div className="meal-title-box2">
                <div className="title">
                <p>Classic & Comfort Breakfasts</p>
                </div>
            </div>
            <div className="meal-table-cover">

            {/* Classic & Comfort Breakfasts 66 */}

            {
                getproduct?.map((item)=> (
                    <div className="meal-table-box"  key={item._id}>
            <div className="meal-table-images">
                <img src={item.productImage} alt=""  className='meal-table-images-image'/>
                <div className="meal-table-images-price">
                    <span> <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png" className='naira' alt="" />{item.price}</span>
                </div>
            </div>
            <div className="meal-table-images-text">
                <div className="text-00091">
                    <p>{item.productName}</p>
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
                <button className='btn00091' onClick={()=> {setModel(true); setSelectedProduct(item);}}>Order Now</button>
            </div>
            </div>
                ))
            }
            
            </div>
            {/* Classic & Comfort Breakfasts 66 ending*/}

            <div className="meal-title-box2">
                <div className="title">
                <p>Quick Grab-and-Go</p>
                </div>
            </div>
            <div className="meal-table-cover">
            
            {/* Quick Grab-and-Go 88 */}


            {
                buyproduct?.map((itemquick)=> (
                     <div className="meal-table-box"  key={itemquick._id}>
            <div className="meal-table-images">
                <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759094992/512a1066dcba1d8777e637f5131ee42e5a6b30f6_fgpks0.jpg" alt=""  className='meal-table-images-image'/>
                <div className="meal-table-images-price">
                    <span> <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png" className='naira' alt="" />{itemquick.price}</span>
                </div>
            </div>
            <div className="meal-table-images-text">
                <div className="text-00091">
                    <p>{itemquick.productName}</p>
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
                <button className='btn00091'  onClick={()=> {setModel(true); setSelectedProduct(itemquick);}}>Order Now</button>
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

            <div className="Beverage-container">
            <div className="Beverage-meal-title-box2">
                <div className="Beverage-title">
                <p>Beverage Add-Ons</p>
                </div>
            </div>
            <div className="Beverage-meal-table-cover">


                {
                    product?.map((items)=> (
                        <div className="Beverage-meal-table-box" key={items._id}>
                    <div className="Beverage-meal-table-images">
                <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759095543/bab6f1e994869aed15f8cf6418867e76f5200532_nyze0v.jpg" alt=""  className='Beverage-meal-table-images-image'/>
                <div className="Beverage-meal-table-images-price">
                    <span> <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png" className='Beverage-naira' alt="" />{items.price}</span>
                </div>
                 </div>
                <div className="Beverage-meal-table-images-text">
                <div className="Beverage-text-00091">
                    <p>{items.productName}</p>
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
                <button className='Beverage-btn00091'  onClick={()=> {setModel(true); setSelectedProduct(items);}}>Order Now</button>
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

export default HeritageKitchen;
