import React from "react";
import Cartochka from "./Cartochka";
import Image from '../.././assets/collection/arrivals1.png'
import Image2 from '../.././assets/collection/arrivals2.png'
import Image3 from '../.././assets/collection/arrivals3.png'
import Image4 from '../.././assets/collection/arrivals4.png'
import Image5 from '../.././assets/collection/arrivals5.png'
import Image6 from '../.././assets/collection/arrivals6.png'
import Image7 from '../.././assets/collection/arrivals7.png'
import Image8 from '../.././assets/collection/arrivals8.png'


const NewArrivals = () => {
  return (
    <div className="py-28">
      <p className="flex text-[30px] font-semibold font-sans items-center justify-center pb-28">
        New Arrivals
      </p>
      <div className="grid md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4 w-[80%] m-auto gap-10">
        <Cartochka img={Image} title="Wooden Chair" sale="sale" status={true}/>
        <Cartochka img={Image2} title="Single Armchair"  sale="sale" bg={'#47D93C'} status={true}/>
        <Cartochka img={Image3} title="Wooden Armchair"/>
        <Cartochka img={Image4} title="Stylish Chair"/>
        <Cartochka img={Image5} title="Modern Chair" sale="sale" status={true}/>
        <Cartochka img={Image6} title="Mapple Wood Dinning Table"/>
        <Cartochka img={Image7} title="Arm Chair" sale="sale" status={true}/>
        <Cartochka img={Image8} title="Wooden Bed"/>
      </div>
    </div>
  );
};

export default NewArrivals;
