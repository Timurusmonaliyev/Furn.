import { AiOutlineUp } from "react-icons/ai"; 
import React from "react";
import HeaderCarousel from "./Views/HeaderCarousel";
import BrandCarousel from "./Views/BrandCarousel";
import LastestBlogCard from "./Views/LastestBlogCard";
import NewArrivals from "./Views/NewArrivals";
import AkmaljonCarousel from "./Views/AkmaljonCarousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FeaturedProducts from "./Views/FeaturedProducts";
import AkmaljonCart from "./Views/AkmaljonCart";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <HeaderCarousel />
        <AkmaljonCart />
        <NewArrivals />
        <AkmaljonCarousel />
        <FeaturedProducts />
        <LastestBlogCard />
        <BrandCarousel />
        <Footer />
      </div>
      <div>
        <a
          href="#"
          className="bottom-[30px] right-[32px] flex items-center fixed bg-[#e99c2e] w-14 h-14 anime2"
        >
           <AiOutlineUp className="text-white anime"/>
        </a>
      </div>
    </div>
  );
};

export default App;
