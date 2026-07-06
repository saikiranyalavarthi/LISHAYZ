import AboutSection from "../Components/AboutSection";
import CateringSection from "../Components/CateringSection";
import FoodNetworkSection from "../Components/FoodNetworkSection";
import GallerySection from "../Components/GallerySection";
import Hero from "../Components/Hero";
import LocationSection from "../Components/LocationSection";
import MenuSection from "../Components/MenuSection";
import OrderOnlineSection from "../Components/OrderOnlineSection";
import PartnersSection from "../Components/PartnersSection";


function Home() {
  return (
    <>
    

      <Hero />
      <AboutSection />
      <MenuSection />
      <CateringSection />
      <FoodNetworkSection />
      <OrderOnlineSection/>
      <PartnersSection />
      <GallerySection />
<LocationSection/>

    </>
  );
}

export default Home;
