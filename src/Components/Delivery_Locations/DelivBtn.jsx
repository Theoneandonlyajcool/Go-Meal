import "./Delivery.css";

const DelivBtn = ({ text, p, width, br }) => {
  return (
    <button
      style={{
        padding: `${p == "" ? `${p}` : "0.5rem 2rem"}`,
        width: `${width}`,
        borderRadius: `${br ? `${br}` : "1rem"}`,
      }}
      className="locations_btn"
    >
      {text}
    </button>
  );
};

export default DelivBtn;
