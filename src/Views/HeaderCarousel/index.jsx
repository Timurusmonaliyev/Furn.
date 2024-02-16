import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "../../assets/slider/slider1.png";
import Image2 from "../../assets/slider/slider2.png";
import Image3 from "../../assets/slider/slider3.png";

export default function App() {
  return (
    <div className="h-[160vh] lg:h-[100vh] md:h-[100vh] xl:h-[110vh] bg-[#F8F9FD] flex items-center justify-center">
      <Swiper
      loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid gap-72 md:flex lg:gap-10 md:gap-10 xl:gap-10 lg:flex xl:flex w-[90%] m-auto justify-center lg:items-center xl:items-center">
            <div className="grid gap-6 w-full md:w-[60%] xl:w-[46%]">
              <p className="text-[24px] xl:text-[28px] text-[#998d80] font-normal">
                Great Design Collection
              </p>
              <p className="text-[30px] xl:text-[48px] text-[#616060]">
                Mapple Wood Accent Chair
              </p>
              <p className="leading-10 text-[#a09e9c]">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do
                Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad
                Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut
                Aliquip.
              </p>
              <p>
                $ 399.00 <del className="">$ 499.00</del>
              </p>
            </div>
            <div className="w-full md:w-[40%] xl:w-[40%]">
              <img src={Image} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid gap-72 md:flex lg:gap-10 md:gap-10 xl:gap-10 lg:flex xl:flex w-[90%] m-auto justify-center lg:items-center xl:items-center">
            <div className="grid gap-6 w-full md:w-[60%] xl:w-[46%]">
              <p className="text-[24px] xl:text-[28px] text-[#998d80] font-normal">
                Great Design Collection
              </p>
              <p className="text-[30px] xl:text-[48px] text-[#616060]">
                Mapple Wood Accent Chair
              </p>
              <p className="leading-10 text-[#a09e9c]">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do
                Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad
                Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut
                Aliquip.
              </p>
              <p>
                $ 399.00 <del className="">$ 499.00</del>
              </p>
            </div>
            <div className="w-full md:w-[40%] xl:w-[40%]">
              <img src={Image2} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid gap-72 md:flex lg:gap-10 md:gap-10 xl:gap-10 lg:flex xl:flex w-[90%] m-auto justify-center lg:items-center xl:items-center">
            <div className="grid gap-6 w-full md:w-[60%] xl:w-[46%]">
              <p className="text-[24px] xl:text-[28px] text-[#998d80] font-normal">
                Great Design Collection
              </p>
              <p className="text-[30px] xl:text-[48px] text-[#616060]">
                Valvet Accent Arm Chair
              </p>
              <p className="leading-10 text-[#a09e9c]">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do
                Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad
                Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut
                Aliquip.
              </p>
              <p>
                $ 399.00 <del className="">$ 499.00</del>
              </p>
            </div>
            <div className="w-full md:w-[40%] xl:w-[40%]">
              <img src={Image3} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
