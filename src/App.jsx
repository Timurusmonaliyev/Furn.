import React from "react";
import LastestBlogCard from "./Views/LastestBlogCard";
import BrandCarousel from "./Views/BrandCarousel";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <div>
        <LastestBlogCard />
        <BrandCarousel />
        <Footer />
      </div>
    </div>
  );
};

export default App;
