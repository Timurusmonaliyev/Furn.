import React from "react";
import ProductsCarts from "./ProductsCarts";
import Image from "../.././assets/features/f1.jpg";
import Image2 from "../.././assets/features/f2.jpg";
import Image3 from "../.././assets/features/f3.jpg";
import Image4 from "../.././assets/features/f4.jpg";

const FeaturedProducts = () => {
  return (
    <div>
      <div>
        <p className="text-2xl text-[26px] font-semibold flex justify-center pt-40 pb-32"> Featured Products</p>
      </div>
      <div className="grid md:grid-cold-3 lg:flex xl:flex justify-center">
        <ProductsCarts
          img={Image}
          rating="(45 Review)"
          title="Designed sofa"
          price="$160.00"
        />
        <ProductsCarts
          img={Image2}
          rating="(45 Review)"
          title="Dinning Table"
          price="$200.00"
        />
        <ProductsCarts
          img={Image3}
          rating="(45 Review)"
          title="Chair And Table"
          price="$100.00"
        />
        <ProductsCarts
          img={Image4}
          rating="(45 Review)"
          title="Modern Arm Chair"
          price="$299.00"
        />
      </div>
    </div>
  );
};

export default FeaturedProducts;
