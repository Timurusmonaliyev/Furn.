import React from "react";
import HeaderCarousel from "./Views/HeaderCarousel";
import BrandCarousel from "./Views/BrandCarousel";
import LastestBlogCard from "./Views/LastestBlogCard";
import NewArrivals from "./Views/NewArrivals";
import AkmaljonCarousel from "./Views/AkmaljonCarousel";

const App = () => {
  return (
    <div>
      <HeaderCarousel />
      <NewArrivals />
      <LastestBlogCard />
      <BrandCarousel />
      <AkmaljonCarousel />
    </div>
  );
};

export default App;
