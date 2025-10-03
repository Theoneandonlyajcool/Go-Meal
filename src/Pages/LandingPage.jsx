import Header from "../Components/Header/Header";
import Hero from "../Components/Landing_hero/Hero";
import DeliveryLocations from "../Components/Delivery_Locations/DeliveryLocations";
import StandOut from "../Components/StandOut/StandOut";
import Hero_carousel from "../Components/HeroCarousel/Hero_carousel";
import Footer from "../Components/Footer/Footer";
import CardCarousel from "../Components/CardCarousel/CardCarousel";
import Successstory from "../Components/Succes_story/Successstory";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CardCarousel />
      <DeliveryLocations />
      <StandOut />
      <Successstory />
      <Footer />
    </div>
  );
};

export default LandingPage;
