import ContactCTA from "../Components/Foodnetworksection/ContactCTA";
import ContactForm from "../Components/Foodnetworksection/ContactForm";
import FoodSafety from "../Components/Foodnetworksection/FoodSafety";
import Gallery from "../Components/Foodnetworksection/Gallery";
import Hero from "../Components/Foodnetworksection/Hero";
import HowItWorks from "../Components/Foodnetworksection/HowItWorks";
import Industries from "../Components/Foodnetworksection/Industries";
import ProductRange from "../Components/Foodnetworksection/ProductRange";
import Services from "../Components/Foodnetworksection/Services";

export default function Foodnetwork() {
  return (
    <>
      <Hero />
      <Industries />

      <Services />
      <ProductRange />
      <HowItWorks />
      <FoodSafety />
      <Gallery />
      <ContactCTA />
      <ContactForm />
    </>
  );
}
