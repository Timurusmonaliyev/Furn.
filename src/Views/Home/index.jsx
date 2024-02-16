import React from "react";
import HeaderCarousel from "../../Views/HeaderCarousel";
import BrandCarousel from "../../Views/BrandCarousel";
import LastestBlogCard from "../../Views/LastestBlogCard";
import NewArrivals from "../../Views/NewArrivals";
import AkmaljonCarousel from "../../Views/AkmaljonCarousel";


const Home = () => {
  return (
    <div>
      <HeaderCarousel />
      <NewArrivals />
      <AkmaljonCarousel />
      <LastestBlogCard />
      <BrandCarousel />
    </div>
  );
};

export default Home;
