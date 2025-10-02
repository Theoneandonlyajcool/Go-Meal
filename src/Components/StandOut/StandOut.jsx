import "./StandOut.css";
import StandoutCard from "./StandoutCard";

const StandOut = () => {
  const standout_cards_content = [
    {
      image:
        "https://res.cloudinary.com/dp75oveuw/image/upload/v1759255102/Standout_image_oq6vsg.jpg",
      heading: "Right on Time,Wherever You Are",
      paragraph:
        "Our reliable delivery network brings breakfast to your home,office, or even on the go",
    },

    {
      image:
        "https://res.cloudinary.com/dp75oveuw/image/upload/v1759255102/Standout_image_oq6vsg.jpg",
      heading: "Healthy Options for every lifestyle",
      paragraph:
        "From quick grab-n-go breakfast to packed meals we having choices that fit busy professionals",
    },

    {
      image:
        "https://res.cloudinary.com/dp75oveuw/image/upload/v1759255102/Standout_image_oq6vsg.jpg",
      heading: "Transparent pricing & Easy payments",
      paragraph:
        "See yout total upfront. pay byt the card wallet, cash or POS whatever is mos conveinent for you",
    },

    {
      image:
        "https://res.cloudinary.com/dp75oveuw/image/upload/v1759255102/Standout_image_oq6vsg.jpg",
      heading: "Freshly Prepared, Every Morning",
      paragraph:
        "We partner with trusted kitchens to craft wholesome breakfasts made from fresh ingredients, always nutritious",
    },
  ];

  const mapped = standout_cards_content.map((ele, idx) => (
    <StandoutCard contents={ele} key={idx} />
  ));

  return (
    <div className="standout_cont">
      <div className="standout_child">
        <div className="standout_heading_cont">
          <h1 className="standout_heading">What Makes Us Stand Out</h1>
          <p className="standout_paragraph">
            We're redefining mornings with fresh, and reliable breakfast
            delivery <br /> built for your busy lifestyle
          </p>
        </div>

        {/* Cards */}
        <div className="standout_cards_cont">{mapped}</div>
      </div>
    </div>
  );
};

export default StandOut;
