import React from "react";

const Cartochka = ({img}, {title}) => {
  return (
    <div className="grid p-8 bg-[#F8F9FC] w-[100%] items-center justify-center h-[40vh]">
      <img src={img} alt="" className="w-full flex"/>
      <p className="bg-red-900">{title}</p>
    </div>
  );
};

export default Cartochka;
