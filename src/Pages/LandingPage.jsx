import Header from "../Components/Header/Header";
import Hero from "../Components/Landing_hero/Hero";
import DeliveryLocations from "../Components/Delivery_Locations/DeliveryLocations";
import StandOut from "../Components/StandOut/StandOut";

const LandingPage = () => {
  return (
    <div>
      <Header />
      {/* <Hero /> */}
      <DeliveryLocations />
      <StandOut />
    </div>
  );
};

export default LandingPage;
