import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../App.css";
import { Autoplay } from "swiper/modules";

const AkmaljonCarousel = () => {
  return (
    <div className="">
      <Swiper>
        <SwiperSlide>
          <div class="sofa-collection collectionbg2">
            <div class="container">
              <div class="sofa-collection-txt xl:ml-[185px] md:ml-10 lg:ml-16 ml-5">
                <h2>Unlimited Daining Table Collection</h2>
                <p style={{ lineHeight: "1.8" }} className="text-[18px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div class="sofa-collection-price">
                  <h4>
                    strting from <span>$ 199</span>
                  </h4>
                </div>
                <br />
                <button
                  class="btn-cart welcome-add-cart sofa-collection-btn w-[170px] h-[50px] text-white bg-[#E99C2E]"
                  onclick="window.location.href='#'"
                >
                  view more
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="sofa-collection collectionbg2">
            <div class="container">
              <div class="sofa-collection-txt xl:ml-[185px] md:ml-10 lg:ml-16 ml-5">
                <h2>Unlimited Daining Table Collection</h2>
                <p style={{ lineHeight: "1.8" }} className="text-[18px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div class="sofa-collection-price">
                  <h4>
                    strting from <span>$ 199</span>
                  </h4>
                </div>
                <br />
                <button
                  class="btn-cart welcome-add-cart sofa-collection-btn w-[170px] h-[50px] text-white bg-[#E99C2E]"
                  onclick="window.location.href='#'"
                >
                  view more
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AkmaljonCarousel;
