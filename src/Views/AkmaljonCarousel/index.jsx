import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../App.css";
import { Autoplay } from "swiper/modules";

const AkmaljonCarousel = () => {
  return (
    <div className="">
      <Swiper
        autoplay={{
          delay: 300,
          disableOnInteraction: true,
        }}
        loop={true}
        className="mySwiperim h-[600px]"
      >
        <SwiperSlide>
          <div className="img text-white  border  grid items-center">
            <div className="w-[90%] grid xl:gap-10 lg:gap-6 xl:ml-72 lg:ml-16 md:ml-10 ml-6">
              <h4 className="xl:text-[36px] lg:text-[32px] md:text-[30px] text-[30px] font-bold ">
                Unlimited sofa collection
              </h4>
              <p
                style={{ lineHeight: "1.8" }}
                className="xl:w-[48%] xl:text-[17px] capitalize lg:text-[16px] md:text-[15px] text-[14px] lg:w-[67%] md:w-[94%] w-[96%] font-semibold"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                <p>
                  strting from <span className="text-[#e99c2e]">$ 199</span>
                </p>
                <br />
                <button className="w-[170px] h-[50px] bg-[#e99c2e] font-medium">
                  View More
                </button>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img2 text-white  border  grid items-center">
            <div className="w-[90%] grid xl:gap-10 lg:gap-6 xl:ml-72 lg:ml-16 md:ml-10 ml-6">
              <h4 className="xl:text-[36px] lg:text-[32px] md:text-[30px] text-[30px] font-bold ">
                Unlimited sofa collection
              </h4>
              <p
                style={{ lineHeight: "1.8" }}
                className="xl:w-[48%] xl:text-[17px] capitalize lg:text-[16px] md:text-[15px] text-[14px] lg:w-[67%] md:w-[94%] w-[96%] font-semibold"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                <p>
                  strting from <span className="text-[#e99c2e]">$ 199</span>
                </p>
                <br />
                <button className="w-[170px] h-[50px] bg-[#e99c2e] font-medium">
                  View More
                </button>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AkmaljonCarousel;
