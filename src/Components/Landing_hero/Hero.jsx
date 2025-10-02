import "./Hero.css";
import Location_Modal from "../Location_Modal/Location_Modal";
import HeroSideImage from "/Landing_page_hero_side_image-removebg-preview.png";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";

const Hero = () => {
  const [Show_Location_Modal, Set_Show_Location_Modal] = useState(false);

  return (
    <div className="Hero_cont">
      <div className="Hero_child">
        {/* Text, location container*/}

        <div className="left_side_cont">
          {/* Texts */}

          <div className="hero_page_heading_cont">
            {/* Headings  */}

            <div className="hero_page_heading">
              <h1 className="hero_page_first_heading">Breakfast Made Easy</h1>
              <h1>
                Quick, Nutritious, <br /> and Hassle-Free
              </h1>
            </div>

            {/* Paragraph */}

            <div>
              <p>
                Skip the rush, not your breakfast, Fuel your day without the
                wait
              </p>
            </div>
          </div>

          {/* Search location */}
          <div>
            <div className="location_input_cont">
              {/* location icon */}
              <CiLocationOn
                style={{ fontSize: "1.5rem", color: "rgba(28, 28, 28, 1)" }}
              />

              {/* localtion */}
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  cursor: "pointer",
                  color: "rgba(28, 28, 28, 1)",
                }}
                onClick={() => Set_Show_Location_Modal(true)}
              >
                Select your location <IoChevronDown />
              </p>

              {/* button */}
              <button className="Hero_search_location_btn">Order Now</button>
            </div>
          </div>
        </div>

        {/* Image container */}
        <div className="hero_side_image_cont">
          <img className="hero_side_image" src={HeroSideImage} alt="" />
        </div>

        {Show_Location_Modal && (
          <Location_Modal toclose={Set_Show_Location_Modal} />
        )}
      </div>
    </div>
  );
};

export default Hero;
