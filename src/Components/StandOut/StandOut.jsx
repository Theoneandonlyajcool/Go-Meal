import "./StandOut.css";
import StandoutCard from "./StandoutCard";

const StandOut = () => {
  return (
    <div className="standout_cont">
      <div className="standout_child">
        <div className="standout_heading_cont">
          <h1>What Makes Us Stand Out</h1>
          <p>
            We're redefining mornings with fresh, and reliable breakfast
            delivery built for your busy lifestyle
          </p>
        </div>

        {/* Cards */}
        <div className="standout_cards_cont">
          <StandoutCard />
        </div>
      </div>
    </div>
  );
};

export default StandOut;
