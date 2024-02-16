import { AiFillStar } from "react-icons/ai";
import React from "react";

const ProductsCarts = ({ img, rating, title, price }) => {
  return (
    <div>
      <img className="w-[90%] flex justify-end" src={img} alt="" />
     <div className="grid gap-2 text-center justify-center pt-10 items-center">
     <p className="flex justify-center items-center gap-2">
        <AiFillStar color="#efce4a"/>
        <AiFillStar color="#efce4a"/> <AiFillStar color="#efce4a"/> <AiFillStar color="#efce4a"/> <AiFillStar color="#a9a9a9"/> {rating}
      </p>
      <p className="font-semibold text-[14px]"> {title}</p>
      <p className="text-[16px]"> {price}</p>
     </div>
    </div>
  );
};

export default ProductsCarts;
