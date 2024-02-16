import React from "react";
import Rasm1 from "../../assets/populer-products/p1.png";
import Rasm2 from "../../assets/populer-products/p2.png";
import Rasm3 from "../../assets/populer-products/p3.png";
const AkmaljonCart = () => {
  return (
    <div className="grid md:grid mr-44 md:mr-16 lg:mr-20 md:grid-cols-1 gap-10 mt-44 w-[60%] lg:w-[95%] lg:ml-9 md:w-[90%] m-auto lg:flex xl:flex xl:gap-10 my-10 px-0 lg:px-0 xl:px-56">
      <div className="pb-0 xl:py-12 h-[270px] pt-14 w-[280px] xl:h-[300px] lg:h-[280px] lg:w-[100%]  md:w-[50%] m-auto xl:w-[34%] bg-[#f8f9fc] flex justify-center">
        <div className="text-center">
          <div className="flex justify-center w-[80%] m-auto">
            <img src={Rasm1} alt="" />
          </div>
          <div className="my-9">
            <h4>Arm Chair</h4>
          </div>
          <div>
            <p className="text-[14px] text-[#a09e9c] mx-auto w-[92%]">
              Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit aut
            </p>
          </div>
        </div>
      </div>
      <div className="xl:py-11  md:p-8 lg:py-[17px] lg:p-0 w-[100%] md:w-[50%] m-auto xl:w-[60%] lg:w-[180%] bg-[#f8f9fc] flex justify-center">
        <div className="text-start xl:flex lg:flex xl:ml-10 grid lg:w-full xl:w-[90%]">
          <div className="flex justify-center xl:w-[70%] lg:w-[100%]">
            <img
              className="xl:w-[100%] xl:mt-10 lg:h-[150px] "
              src={Rasm2}
              alt=""
            />
          </div>
          <div className="ml-5 mt-5">
            <h4 className="ml-4 text-[#5f5b57] cursor-pointer font-semibold hover:text-[#E99C2E] hover:duration-500">
              Latest Designed Stool and Chair
            </h4>
            <br />
            <p className="text-[14px] lg:w-[100%] xl:w-[80%] text-[#a09e9c] xl:ml-5">
              Edi Ut Perspiciatis Unde Omnis Iste Natusina Error Sit Voluptatem
              Accusantium Doloret Mque Laudantium, Totam Rem Aperiam.
            </p>
            <div className="ml-4 mt-5">
              <p>
                Sales Start from{" "}
                <span className="text-[#E99C2E] text-[14px]">$99.00</span>
              </p>
              <button className="mt-10 w-[118px] h-[40px] border border-[#5f5b57] text-[14px] text-[#5f5b57] font-semibold hover:bg-[#5f5b57] hover:text-white hover:duration-1000">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-0 xl:py-14 h-[280px] pt-14 w-[100%] xl:h-[300px] lg:w-[100%] md:w-[50%] m-auto xl:w-[34%] bg-[#f8f9fc] flex justify-center">
        <div className="text-center">
          <div className="flex justify-center -mt-12 w-[80%] m-auto">
            <img src={Rasm3} alt="" />
          </div>
          <div className="my-9">
            <h4>Arm Chair</h4>
          </div>
          <div>
            <p className="text-[14px] text-[#a09e9c] mx-auto w-[92%]">
              Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit aut
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AkmaljonCart;
