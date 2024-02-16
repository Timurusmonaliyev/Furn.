import { AiOutlineHeart } from "react-icons/ai"; 
import { AiOutlineShoppingCart } from "react-icons/ai"; 
import React from "react";

const Cartochka = ({ img, title, sale, status }) => {
  return (
    <div>
      <div class="col-md-3 col-sm-4">
        <div class="single-new-arrival">
          <div class="single-new-arrival-bg">
            <img src={img} alt="new-arrivals images" />
            <div class="single-new-arrival-bg-overlay"></div>
            <div
              className={`flex ${
                status ? "bg-[#D08D49] " : "bg-transparent"
              } top-5 text-white  right-0 absolute p-2 px-8`}
            >
              {sale}
            </div>
            <div class="new-arrival-cart">
              <p>
                <span class="lnr lnr-cart"> 🛒</span>
                <a href="#">
               add <span>to </span> cart
                </a>
              </p>
            </div>
          </div>
          <h4 className="pt-10 pb-6">
            <a href="#" style={{fontWeight:'bold'}}> {title}</a>
          </h4>
          <p class="arrival-product-price">$65.00</p>
        </div>
      </div>
    </div>
  );
};

export default Cartochka;
