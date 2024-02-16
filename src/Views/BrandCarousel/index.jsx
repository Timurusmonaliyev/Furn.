import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import CaruselImg from "../../assets/clients/c1.png";
import CaruselImg2 from "../../assets/clients/c2.png";
import CaruselImg3 from "../../assets/clients/c3.png";
import CaruselImg4 from "../../assets/clients/c4.png";
import CaruselImg5 from "../../assets/clients/c5.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function BrandCarousel() {
  return (
    <div className="bg-[#F4F5F9] py-[80px] cursor-pointer">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 90,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 180,
          },

          1350: {
            slidesPerView: 5,
          },
        }}
        slidesPerView={5}
        spaceBetween={160}
        loop={true}
        modules={[Pagination]}
        className="Carusel w-[78%] m-auto cursor-pointer"
      >
        <div className="">
          <SwiperSlide>
            <img src={CaruselImg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CaruselImg2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CaruselImg3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CaruselImg4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CaruselImg5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CaruselImg4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CaruselImg5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CaruselImg4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CaruselImg5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CaruselImg4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CaruselImg5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CaruselImg4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={CaruselImg5} alt="" />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}
