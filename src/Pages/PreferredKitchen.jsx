import React, { useState } from "react";

import { IoArrowBack } from "react-icons/io5";

import "./PreferredKitchen.css";



const PreferredKitchen = () => {

  const [selectedKitchen, setSelectedKitchen] = useState(null);

  const [currentView, setCurrentView] = useState("selection"); 



  const kitchens = [

    {

      id: 1,

      name: "Heritage Kitchen",

      route: "heritage",

      logo: "https://res.cloudinary.com/dmqhseusw/image/upload/v1759321124/Heritage-menu6-724x1024_zygcmw.webp",

      description: "Heritage Kitchen is a culinary collective devoted to bringing timeless Nigerian breakfast classics to the modern plate. Founded by a family of passionate cooks, the kitchen blends age-old recipes with fresh, locally sourced ingredients to create meals that feel like home, yet fit the pace of today's busy lifestyle."

    },

    {

      id: 2,

      name: "Renee's Kitchen",

      route: "renee",

      logo: "https://res.cloudinary.com/dmqhseusw/image/upload/v1759324024/reneeskitchen-window-mockup_yaqkzs.jpg",

      description: "Renee's Kitchen is a bright, contemporary breakfast brand that specializes in clean, wholesome meals designed for people on the go. Founded by Chef Renee Okoro, the kitchen started as a small home project and has grown into a trusted name for innovative morning dishes."

    },

    {

      id: 3,

      name: "Mama Kitchen",

      route: "mama",

      logo: "https://res.cloudinary.com/dmqhseusw/image/upload/v1759324023/imageye___-_imgi_1_chef-mama-kitchen-logo_25327-241_qinutv.jpg",

      description: "Mama Kitchen is everyone's destination for hearty, home-style breakfasts inspired by Nigeria's most loved family recipes. What began as a neighborhood food stand has grown into a trusted breakfast hub for professionals and remote workers alike."

    },

    {

      id: 4,

      name: "Kayliz's Kitchen",

      route: "kayliz",

      logo: "https://res.cloudinary.com/dmqhseusw/image/upload/v1759323998/IMG_0424_bbn40x.webp",

      description: "Kayliz's Kitchen brings you Warri-inspired, on-the-go fresh, health-forward breakfasts that don't compromise on taste. Founded by wellness enthusiast Kayliz Ilo, the kitchen started with a mission to give busy professionals and remote workers cleaner, smarter morning meals."

    }

  ];



  const handleKitchenSelect = (kitchen) => {

    setSelectedKitchen(kitchen.id);

    setCurrentView(kitchen.route);

  };



  const handleBackToSelection = () => {

    setCurrentView("selection");

    setSelectedKitchen(null);

  };



 

  const HeritageKitchen = () => (

    <div className="kitchen-detail">

      <div className="detail-hero" style={{ backgroundImage: "url('https://res.cloudinary.com/dmqhseusw/image/upload/v1759321124/Heritage-menu6-724x1024_zygcmw.webp')" }}>

        <div className="hero-overlay"></div>

        <button className="back-button" onClick={handleBackToSelection}>

          <IoArrowBack className="back-icon" />

        </button>

        <div className="hero-content">

          <h1 className="hero-title">Heritage Kitchen</h1>

        </div>

      </div>

      <div className="detail-content">

        <h2>Welcome to Heritage Kitchen</h2>

        <p>Experience timeless Nigerian breakfast classics brought to the modern plate.</p>

      </div>

    </div>

  );



  const ReneeKitchen = () => (

    <div className="kitchen-detail">

      <div className="detail-hero" style={{ backgroundImage: "url('https://res.cloudinary.com/dmqhseusw/image/upload/v1759324024/reneeskitchen-window-mockup_yaqkzs.jpg')" }}>

        <div className="hero-overlay"></div>

        <button className="back-button" onClick={handleBackToSelection}>

          <IoArrowBack className="back-icon" />

        </button>

        <div className="hero-content">

          <h1 className="hero-title">Renee's Kitchen</h1>

        </div>

      </div>

      <div className="detail-content">

        <h2>Welcome to Renee's Kitchen</h2>

        <p>Clean, wholesome meals designed for people on the go.</p>

      </div>

    </div>

  );



  const MamaKitchen = () => (

    <div className="kitchen-detail">

      <div className="detail-hero" style={{ backgroundImage: "url('https://res.cloudinary.com/dmqhseusw/image/upload/v1759324023/imageye_-_imgi_1_chef-mama-kitchen-logo_25327-241_qinutv.jpg')" }}>

        <div className="hero-overlay"></div>

        <button className="back-button" onClick={handleBackToSelection}>

          <IoArrowBack className="back-icon" />

        </button>

        <div className="hero-content">

          <h1 className="hero-title">Mama Kitchen</h1>

        </div>

      </div>

      <div className="detail-content">

        <h2>Welcome to Mama Kitchen</h2>

        <p>Hearty, home-style breakfasts inspired by Nigeria's most loved family recipes.</p>

      </div>

    </div>

  );



  const KaylizKitchen = () => (

    <div className="kitchen-detail">

      <div className="detail-hero" style={{ backgroundImage: "url('https://res.cloudinary.com/dmqhseusw/image/upload/v1759324023/imageye_-_imgi_1_chef-mama-kitchen-logo_25327-241_qinutv.jpg')" }}>

        <div className="hero-overlay"></div>

        <button className="back-button" onClick={handleBackToSelection}>

          <IoArrowBack className="back-icon" />

        </button>

        <div className="hero-content">

          <h1 className="hero-title">Kayliz's Kitchen</h1>

        </div>

      </div>

      <div className="detail-content">

        <h2>Welcome to Kayliz's Kitchen</h2>

        <p>Warri-inspired, fresh, health-forward breakfasts that don't compromise on taste.</p>

      </div>

    </div>

  );



  

  if (currentView === "heritage") return <HeritageKitchen />;

  if (currentView === "renee") return <ReneeKitchen />;

  if (currentView === "mama") return <MamaKitchen />;

  if (currentView === "kayliz") return <KaylizKitchen />;



  return (

    <div className="preferred-kitchen-container">

      <div 

        className="hero-section"

        style={{

          backgroundImage: "url('https://res.cloudinary.com/dsx0ohm36/image/upload/v1759370889/preferred_kitchen_tvoxdd.jpg')",

        }}

      >

        <div className="hero-overlay"></div>

        

        <button className="back-button" onClick={handleBackToSelection}>

          <IoArrowBack className="back-icon" />

        </button>



        <div className="hero-content">

          <h1 className="hero-title">

            Select Your Preferred Kitchen

          </h1>

        </div>

      </div>



      <div className="kitchen-grid-container">

        <div className="kitchen-grid">

          {kitchens.map((kitchen) => (

            <>

              <div

                key={kitchen.id}

                onClick={() => handleKitchenSelect(kitchen)}

                className={`kitchen-card ${

                  selectedKitchen === kitchen.id ? "selected" : ""

                }`}

              >

                <div className="logo-container">

                  <div 

                    className={`logo-circle logo-${kitchen.bgColor}`}

                  >

                    <img 

                      src={kitchen.logo} 

                      alt={kitchen.name}

                      className="logo-image"

                    />

                  </div>

                </div>



                <h2 className="kitchen-name">

                  {kitchen.name}

                </h2>



                <p className="kitchen-description">

                  {kitchen.description}

                </p>

              </div>

            </>

          ))}

        </div>

      </div>

    </div>

  );

};



export default PreferredKitchen;