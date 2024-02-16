import React from "react";
import HeaderCarousel from "./Views/HeaderCarousel";
import BrandCarousel from "./Views/BrandCarousel";
import LastestBlogCard from "./Views/LastestBlogCard";
import NewArrivals from "./Views/NewArrivals";
import AkmaljonCarousel from "./Views/AkmaljonCarousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeaderCarousel />
      <NewArrivals />
      <AkmaljonCarousel />
      <LastestBlogCard />
      <BrandCarousel />
        <Footer/>
    </div>
  );
};

export default App;
