import React, { useEffect, useState } from "react";
import { MdCancel, MdOutlineShoppingCart } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { IoCarSportSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
import "./KaylizsKitchen.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const KaylizsKitchen = () => {

    const [getproduct, setGetproduct] = useState([]);
    const [buyproduct, setBuyproduct] = useState([]);
    const [product, setProduct] = useState([]);

    const [model, setModel] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null)

    const Classickay = async ()=> {
        try{
            const res = await axios.get("https://go-meal-group3-projectwork.onrender.com/api/v1/products/category/68de62c6c890bbac3b5f76b6")
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
            const res = await axios.get("https://go-meal-group3-projectwork.onrender.com/api/v1/products/category/68de62c6c890bbac3b5f76b7")
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
            const res = await axios.get("https://go-meal-group3-projectwork.onrender.com/api/v1/products/category/68de62c6c890bbac3b5f76b8")
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
    <div className="Kayliz-container">
        
        <div className="Kayliz-hero1">
                <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759247850/960f3477fb95917c4b34d395afeeb824_1_sor3kp.jpg" className="Kayliz-main" alt="" />
                <div className="Kayliz-big-name">
                    <p>KAYLIZ'S KITCHEN</p>
                </div>
                <div className="Kayliz-rapper">
                    <span className='Kayliz-back-arrow' onClick={handleGoTopreferredKitchen}><FaArrowLeftLong /></span>
                    <div className="Kayliz-arriver-time">
                        <span className='Kayliz-drive'><IoCarSportSharp /></span>
                        <span className=''>30 - 50 mins</span>
                    </div>
                </div>
                <div className="Kayliz-hero-rating">
                    <span>4.0 ratings</span>
                    <div className="Kayliz-star">
                        <span><IoStar /></span>
                        <span><IoStar /></span>
                        <span><IoStar /></span>
                        <span><IoStar /></span>
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

            {
                getproduct?.map((item)=> (
                    <div className="Kayliz-meal-table-box" key={item._id}>
            <div className="Kayliz-meal-table-images">
                <img src={item.productImage} alt=""  className='Kayliz-meal-table-images-image'/>
                <div className="Kayliz-meal-table-images-price">
                    <span> <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png" className='Kayliz-naira' alt="" />{item.price}</span>
                </div>
            </div>
            <div className="Kayliz-meal-table-images-text">
                <div className="Kayliz-text-00091">
                    <p>{item.productName}</p>
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
                <button className='Kayliz-btn00091' onClick={()=> {setModel(true); setSelectedProduct(item);}}>Order Now</button>
            </div>
            </div>
                ))
            }

            
            
            </div>
            {/* Classic & Comfort Breakfasts 66 ending*/}

            <div className="Kayliz-meal-title-box2">
                <div className="Kayliz-title">
                <p>Healthy Picks</p>
                </div>
            </div>
            <div className="Kayliz-meal-table-cover">
            
            {/* Quick Grab-and-Go 88 */}

            {
                buyproduct?.map((ites)=> (
                    <div className="Kayliz-meal-table-box"  key={ites._id}>
            <div className="Kayliz-meal-table-images">
                <img src={ites.productImage} alt=""  className='Kayliz-meal-table-images-image'/>
                <div className="Kayliz-meal-table-images-price">
                    <span> <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png" className='Kayliz-naira' alt="" />{ites.price}</span>
                </div>
            </div>
            <div className="Kayliz-meal-table-images-text">
                <div className="Kayliz-text-00091">
                    <p>{ites.productName}</p>
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
                <button className='Kayliz-btn00091'  onClick={()=> {setModel(true); setSelectedProduct(ites);}}>Order Now</button>
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

            {
               product?.map((goods)=> (
                    <div className="Kayliz-Beverage-meal-table-box"  key={goods._id}>
            <div className="Kayliz-Beverage-meal-table-images">
                <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759095543/bab6f1e994869aed15f8cf6418867e76f5200532_nyze0v.jpg" alt="food"  className='Kayliz-Beverage-meal-table-images-image'/>
                <div className="Kayliz-Beverage-meal-table-images-price">
                    <span> <img src="https://res.cloudinary.com/dmqhseusw/image/upload/v1759093602/mdi_naira_ekest5.png" className='Kayliz-Beverage-naira' alt="Naira" />{goods.price}</span>
                </div>
            </div>
            <div className="Kayliz-Beverage-meal-table-images-text">
                <div className="Kayliz-Beverage-text-00091">
                    <p>{goods.productName}</p>
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
                <button className='Kayliz-Beverage-btn00091'  onClick={()=> {setModel(true); setSelectedProduct(goods);}}>Order Now</button>
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

export default KaylizsKitchen;
