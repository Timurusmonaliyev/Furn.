import React from "react";
import Cartochka from "./Cartochka";
import Image from '../.././assets/collection/arrivals1.png'

const NewArrivals = () => {
  return (
    <div className="pt-28">
      <p className="flex text-[30px] font-semibold font-sans items-center justify-center">
        New Arrivals
      </p>
      <div className="grid md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4 w-[80%] m-auto gap-10">
        <Cartochka img={Image} title="salom"/>
        <Cartochka img={Image} title="salom"/>
        <Cartochka img={Image} title="salom"/>
        <Cartochka img={Image} title="salom"/>
        <Cartochka img={Image} title="salom"/>
        <Cartochka img={Image} title="salom"/>
        <Cartochka img={Image} title="salom"/>
        <Cartochka img={Image} title="salom"/>
      </div>
    </div>
  );
};

export default NewArrivals;
