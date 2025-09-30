import "./DeliveryLocations.css";
import DelivBtn from "./DelivBtn";

const DeliveryLocations = () => {
  const Delivery_locations_text = [
    "Ikeja",
    "Lekki",
    "Ikoyi",
    "Victoria Island",
    "Marina",
    "Yaba",
    "Gbagada",
    "Magodo",
    "Wuse",
    "Gaki",
    "Mahitama",
    "Asokoro",
    "Apapa",
    "Festac",
    "Coconut",
    "Alaba",
  ];

  return (
    <div className="delivery_locations_cont">
      <div className="delivery_locations_child">
        {/* Image and heading */}
        <div className="Image_heading">
          <img
            className="delivery_locations_image"
            // style={{ border: "2px solid orange", width: "15rem" }}
            src="https://res.cloudinary.com/dp75oveuw/image/upload/v1759235659/9124c97bb8e5d251a469d18710a95a3273d8b1ef-removebg-preview_hakco5.png"
            alt=""
          />

          <h1 className="delivry_locations_heading">Locations we deliver to</h1>
        </div>

        {/* Locations button */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          {Delivery_locations_text.map((ele, idx) => (
            <DelivBtn text={ele} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveryLocations;
