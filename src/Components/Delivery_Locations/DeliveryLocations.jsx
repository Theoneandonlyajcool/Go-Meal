import "./DeliveryLocations.css";
import DelivBtn from "./DelivBtn";

const DeliveryLocations = () => {
  return (
    <div className="delivery_locations_cont">
      <div className="delivery_locations_child">
        {/* Image and heading */}
        <div>
          <img
            style={{ border: "2px solid orange", width: "15rem" }}
            src="https://res.cloudinary.com/dp75oveuw/image/upload/v1759235659/9124c97bb8e5d251a469d18710a95a3273d8b1ef-removebg-preview_hakco5.png"
            alt=""
          />

          <h1>Locations we deliver to</h1>
        </div>

        {/* Locations button */}
        <div>
          <DelivBtn />
        </div>
      </div>
    </div>
  );
};

export default DeliveryLocations;
