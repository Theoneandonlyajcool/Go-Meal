import React, { useState } from "react";
import "./Successstory.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoStar } from "react-icons/io5";

const successStoryPartners = [
  {
    name: "Mama Kitchen",
    image:
      "https://res.cloudinary.com/dmqhseusw/image/upload/v1759324023/imageye___-_imgi_1_chef-mama-kitchen-logo_25327-241_qinutv.jpg",
    customer: "450+ customers from GO-MEAL",
    rating: "5.0 ratings",
    story1: "The Challenge",
    infom1:
      "Despite high demand, Mama Kitchen struggled to serve busy professionals who couldn’t come to the stand before work. Delivery apps were either unreliable in her area or charged high commissions, making it hard to scale.",
    story2: "The Go-Meal Partnership",
    infom2:
      "In 2024, Mama Kitchen partnered with Go-Meal to list its full menu on the platform. With Go-Meal’s focus on early-morning logistics and a curated “Traditional Breakfast” category, Mama Kitchen could reach thousands of commuters and remote workers who wanted a home-style meal delivered on time.",
    story3: "Testimonial",
    infom3:
      "Partnering with Go-Meal transformed our mornings. We can now reach customers across the city without worrying about delivery. Our meals are fresh, our customers are happy, and our business is growing.” — Adaeze, Owner of Mama Kitchen.",
  },
  {
    name: "Heritage Kitchen",
    image:
      "https://res.cloudinary.com/dmqhseusw/image/upload/v1759321124/Heritage-menu6-724x1024_zygcmw.webp",
    customer: "500+ customers from GO-MEAL",
    rating: "5.0 ratings",
    story1: "The Challenge",
    infom1:
      "Heritage Kitchen began as a modest family-run kitchen in Surulere, Lagos, dedicated to preserving authentic Nigerian breakfast recipes — from pap & akara to yam with garden-egg sauce. While customers loved the meals, the kitchen struggled to reach busy office workers and remote professionals who craved home-style cooking but had no time to cook or visit the shop.",
    story2: "The Go-Meal Partnership",
    infom2:
      "After partnering with Go-Meal, Heritage Kitchen’s reach expanded beyond its neighborhood. The app’s streamlined ordering system and reliable early-morning delivery helped the kitchen serve hundreds of professionals craving real, traditional breakfasts before work.",
    story3: "Testimonial",
    infom3:
      "Within six months, Heritage Kitchen saw a 200% increase in daily orders and launched a “Heritage Combo Box” that became a top seller on the app. Customer reviews consistently praised the authentic taste and on-time delivery, giving Heritage Kitchen a reputation as the go-to spot for “home away from home” breakfasts.",
  },
  {
    name: "Kayliz’s Kitchen",
    image:
      "https://res.cloudinary.com/dmqhseusw/image/upload/v1759323998/IMG_0424_bbn40x.webp",
    customer: "450+ customers from GO-MEAL",
    rating: "4.0 ratings",
    story1: "The Challenge",
    infom1:
      "Partnering with Go-Meal has been one of the best decisions for my business. Before joining the platform, Kayliz’s Kitchen was a small, home-based operation serving a handful of health-minded customers around my street. I spent more time worrying about logistics and delivery delays than actually creating meals. But once we joined Go-Meal, everything changed.",
    story2: "The Go-Meal Partnership",
    infom2:
      "The app gave us instant access to thousands of busy professionals who wanted exactly what we offer — wholesome, fresh breakfasts delivered on time.",
    story3: "Testimonial",
    infom3:
      "Today, Kayliz’s Kitchen is no longer just a small kitchen in my home; it’s a growing brand with loyal subscribers and a clear path to expansion. Go-Meal has truly empowered me to bring healthy eating to more people without compromising on freshness or taste.",
  },
  {
    name: "Renee’s Kitchen",
    image:
      "https://res.cloudinary.com/dmqhseusw/image/upload/v1759324024/reneeskitchen-window-mockup_yaqkzs.jpg",
    customer: "300+ customers from GO-MEAL",
    rating: "4.0 ratings",
    story1: "The Challenge",
    infom1:
      "Kayliz’s Kitchen started as a small home-based kitchen run by wellness enthusiast Kayla Izu, preparing healthy smoothies and light breakfast bowls for friends and a few office workers nearby. Like many small food businesses, her biggest challenge was reaching customers outside her immediate area without losing quality or freshness.",
    story2: "The Go-Meal Partnership",
    infom2:
      "After joining Go-Meal as a partner, Kayliz’s Kitchen instantly gained access to a wider audience of busy professionals and remote workers seeking healthy, reliable breakfast options. The platform handled the logistics of orders and delivery, allowing Kayla to focus on what she loved most — creating nourishing recipes.",
    story3: "Testimonial",
    infom3:
      "Within three months of onboarding, Kayliz’s Kitchen increased its daily orders by 250%, built a loyal subscriber base for weekly breakfast boxes, and even expanded its menu to include high-protein wraps and vegan specials based on customer feedback gathered through Go-Meal’s app.",
  },
];

const Successstory = () => {
  const [currentslides, setCurrentslides] = useState(0);

  const slides = successStoryPartners;

  const goToNextSlide = () => {
    setCurrentslides((current) => (current + 1) % slides.length);
  };

  const gotoprevslides = () => {
    setCurrentslides((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  return (
    <>
      <div className="Successstory-block">
        <div className="Successstory-rapper">
          <div className="arrow1">
            <div className="direction-arrow-left" onClick={gotoprevslides}>
              <MdKeyboardArrowLeft />
            </div>
          </div>
          <div className="Successstory-rapper2">
            <div className="story-titile">
              <p>SUCCESS STORY FROM PARTNERS</p>
            </div>
            <div className="writeup-cover">
              <div className="pic-text-story">
                <div className="profile-pic">
                  <img
                    src={slides[currentslides].image}
                    className="profilestoryimage01"
                    alt={slides[currentslides].name}
                  />
                </div>

                <h1 className="pic-text-story-h1">
                  {slides[currentslides].name}
                </h1>
                <span className="pic-text-story-span">
                  {slides[currentslides].customer}
                </span>
                <div className="success-rate">
                  <span>{slides[currentslides].rating}</span>
                  <div className="success-star-5">
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
              <div className="writeup-text-story">
                <div className="The-Challenge">
                  <p>{slides[currentslides].story1}</p>
                  <span>{slides[currentslides].infom1}</span>
                </div>
                <div className="The-Partnership">
                  <p>{slides[currentslides].story2}</p>
                  <span>{slides[currentslides].infom2}</span>
                </div>
                <div className="Testimonial">
                  <p>{slides[currentslides].story3}</p>
                  <span>{slides[currentslides].infom3}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="arrow2">
            <div className="direction-arrow-left" onClick={goToNextSlide}>
              <MdKeyboardArrowRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Successstory;
