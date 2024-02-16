import React from "react";
import Rasm1 from "../../assets/populer-products/p1.png";
import Rasm2 from "../../assets/populer-products/p2.png";
import Rasm3 from "../../assets/populer-products/p3.png";
import "./index.css";
const AkmaljonCart = () => {
  return (
    <div className="grid md:grid gap-10 w-[60%] md:w-[90%] m-auto lg:flex xl:flex xl:gap-10 my-10 px-0 lg:px-52 xl:px-56">
      <div className="xl:py-20 lg:py-16  px-2 md:w-[50%] m-auto xl:w-[300px] bg-[#f8f9fc] flex justify-center">
        <div className="text-center">
          <div className="flex justify-center w-[80%] m-auto">
            <img src={Rasm1} alt="" />
          </div>
          <div className="my-9">
            <h4>Arm Chair</h4>
          </div>
          <div>
            <p className="text-[14px] text-[#a09e9c] xl:mx-auto w-[92%]">
              Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit aut
            </p>
          </div>
        </div>
      </div>
      <div className="xl:py-16 lg:py-10  w-[100%] md:w-[50%] m-auto xl:w-[60%] lg:w-[80%] bg-[#f8f9fc] flex justify-center">
        <div className="text-start xl:flex xl:ml-10 grid">
          <div className="flex justify-center xl:w-[70%] lg:w-[100%]">
            <img
              className="xl:w-20%  xl:mt-0 lg:h-[150px] "
              src={Rasm2}
              alt=""
            />
          </div>
          <div className="ml-5">
            <h4 className="ml-4 text-[#5f5b57] cursor-pointer font-semibold hover:text-[#E99C2E] hover:duration-500">
              Latest Designed Stool and Chair
            </h4>
            <br />
            <p className="text-[14px] lg:w-[60%] xl:w-[80%] text-[#a09e9c] xl:ml-5">
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
      <div className="pb-0 xl:py-12 w-full  xl:h-[300px] md:w-[50%] m-auto  xl:w-[30%] bg-[#f8f9fc] flex justify-center">
        <div className="text-center">
          <div className="flex justify-center ">
            <img src={Rasm3} alt="" />
          </div>
          <div className="my-9">
            <h4>Hanging Lamp</h4>
          </div>
          <div>
            <p className="text-[14px] w-[90%] text-[#a09e9c] xl:mx-auto">
              Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit aut
            </p>
          </div>
        </div>
      </div>
    </div>

    // <div className="xl:mx-64 card justify-items-center grid my-24 xl:grid-cols-3 grid-cols-1">
    //   <div className="w-[85%] bg-red-500 flex justify-center">
    //     <div className="text-center grid justify-items-center">
    //       <div>
    //         <img src={Rasm1} alt="" className="mt-10" />
    //       </div>
    //       <div>
    //         <div>
    //           <h4 className="text-[18px]">Arm Chair</h4>
    //         </div>
    //         <div>
    //           <p className="text-[14px] text-[#a09e9c] xl:w-[90%] mx-auto">
    //             Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit
    //             aut
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="w-[100%] pt-10 pb-10 bg-red-500">
    //     <div className="grid xl:grid-cols-2 md:grid-cols-1 grid-cols-1 items-center justify-items-start px-10">
    //       <div>
    //         <img src={Rasm2} alt="" />
    //       </div>
    //       <div className="xl:-ml-36">
    //         <p className="text-[18px]">Latest Designed Stool and Chair</p>
    //         <p
    //           style={{ lineHeight: "1.8" }}
    //           className="text-[14px] mt-5 w-[84%]"
    //         >
    //           Edi Ut Perspiciatis Unde Omnis Iste Natusina Error Sit Voluptatem
    //           Accusantium Doloret Mque Laudantium, Totam Rem Aperiam.
    //         </p>

    //         <h4 className="mt-5 text-[14px]">
    //           Sales Start from{" "}
    //           <span className="text-[#E99C2e] font-bold">$99.00</span>
    //         </h4>
    //         <button className="w-[118px] mt-8 h-[40px] text-[14px] text-[#5f5b57] border border-[#5f5b57] hover:bg-[#5f5b57] hover:text-[white] hover:duration-1000">
    //           Discover More
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="w-[85%] pt-10 bg-red-500">
    //     <div className="text-center grid justify-items-center">
    //       <div>
    //         <img src={Rasm1} alt="" />
    //       </div>
    //       <br />
    //       <div>
    //         <h4 className="text-[18px]">Hanging Lamp</h4>
    //       </div>
    //       <div>
    //         <p className="text-[14px] text-[#a09e9c] xl:w-[90%] mx-auto">
    //           Nemo enim ipsam voluptatem quia volu ptas sit asperna aut odit aut
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AkmaljonCart;
