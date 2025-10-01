import "./StandoutCard.css";

const StandoutCard = ({ contents }) => {
  return (
    <div className="standout_card_cont">
      {/* image */}
      <div className="standoout_image_cont"></div>

      {/* text */}
      <div className="standout_text_cont">
        <h3>{contents.heading}</h3>
        <p>{contents.paragraph}</p>
      </div>
    </div>
  );
};

export default StandoutCard;
