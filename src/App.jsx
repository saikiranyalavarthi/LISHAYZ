import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navabr";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";
import Home from "./Pages/Home";
import OrderOnline from "./Pages/OrderOnline";

import Foodnetwork from "./Pages/Foodnetwork.jsx";

function App() {
  return (
    <>
      <Loader />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/food-network" element={<Foodnetwork />} />
        {/* <Route path="/catering" element={<Catering />} />
        
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/signin" element={<SignIn />} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
