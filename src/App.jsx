import React from "react";
import LastestBlogCard from "./Views/LastestBlogCard";
import BrandCarousel from "./Views/BrandCarousel";

const App = () => {
  return (
    <div>
      <div>
        <LastestBlogCard />
        <BrandCarousel />
        <div className="h-[200px]"></div>
      </div>
    </div>
  );
};

export default App;
