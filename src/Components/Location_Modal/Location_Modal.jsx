import "./Location_Modal.css";

const Location_Modal = ({ toclose }) => {
  return (
    <div className="Location_modal_bg">
      {/* main */}

      <div className="Location_modal_cont">
        <div className="Location_modal_child"></div>
        <p onClick={() => toclose(false)}>close</p>
      </div>
    </div>
  );
};

export default Location_Modal;
