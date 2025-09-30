import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import "./PreferredKitchen.css";

const PreferredKitchen = () => {
  const [selectedKitchen, setSelectedKitchen] = useState(null);

  const kitchens = [
    {
      id: 1,
      name: "Heritage Kitchen",
      logo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
      bgColor: "red",
      description: "Heritage Kitchen is a culinary collective devoted to bringing timeless Nigerian breakfast classics to the modern plate. Founded by a family of passionate cooks, the kitchen blends age-old recipes with fresh, locally sourced ingredients to create meals that feel like home, yet fit the pace of today's busy lifestyle."
    },
    {
      id: 2,
      name: "Renee's Kitchen",
      logo: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80",
      bgColor: "gray",
      description: "Renee's Kitchen is a bright, contemporary breakfast brand that specializes in clean, wholesome meals designed for people on the go. Founded by Chef Renee Okoro, the kitchen started as a small home project and has grown into a trusted name for innovative morning dishes."
    },
    {
      id: 3,
      name: "Mama Kitchen",
      logo: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80",
      bgColor: "orange",
      description: "Mama Kitchen is everyone's destination for hearty, home-style breakfasts inspired by Nigeria's most loved family recipes. What began as a neighborhood food stand has grown into a trusted breakfast hub for professionals and remote workers alike."
    },
    {
      id: 4,
      name: "Kayliz's Kitchen",
      logo: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
      bgColor: "black",
      description: "Kayliz's Kitchen brings you Warri-inspired, on-the-go fresh, health-forward breakfasts that don't compromise on taste. Founded by wellness enthusiast Kayliz Ilo, the kitchen started with a mission to give busy professionals and remote workers cleaner, smarter morning meals."
    }
  ];

  return (
    <div className="preferred-kitchen-container">
      
      <div 
        className="hero-section"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80')",
        }}
      >
       
        <div className="hero-overlay"></div>
        
      
        <button className="back-button">
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
            <div
              key={kitchen.id}
              onClick={() => setSelectedKitchen(kitchen.id)}
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

              {/* Kitchen Name */}
              <h2 className="kitchen-name">
                {kitchen.name}
              </h2>

              <p className="kitchen-description">
                {kitchen.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreferredKitchen;