import { AiOutlineBehance } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { FaLocationArrow } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 md:grid md:grid-cols-2 xl:w-[78%] w-[87%] py-[100px] lg:w-[90%] md:w-[90%] m-auto lg:grid lg:grid-cols-4">
          <div>
            <div>
              <p className="text-[18px] text-[#5f5b57] font-bold">
                Information
              </p>
            </div>
            <div className="flex flex-col gap-5 mt-12">
              <p
                style={{ transition: "all .3s" }}
                className="text-[16px] text-[#a09e9c] hover:text-[#e99c2e] font-normal hover:pl-5 "
              >
                About Us
              </p>
              <p
                style={{ transition: "all .3s" }}
                className="text-[16px] text-[#a09e9c] hover:text-[#e99c2e] font-normal hover:pl-5 "
              >
                Contact Us
              </p>
              <p
                style={{ transition: "all .3s" }}
                className="text-[16px] text-[#a09e9c] hover:text-[#e99c2e] font-normal hover:pl-5 "
              >
                News
              </p>
              <p
                style={{ transition: "all .3s" }}
                className="text-[16px] text-[#a09e9c] hover:text-[#e99c2e] font-normal hover:pl-5 "
              >
                Store
              </p>
            </div>
          </div>
          <div>
            <div>
              <p className="text-[18px] text-[#5f5b57] font-bold">
                Collections
              </p>
            </div>
            <div className="flex flex-col gap-5  mt-12">
              <p
                style={{ transition: "all .3s" }}
                className="text-[16px] text-[#a09e9c] hover:text-[#e99c2e] font-normal hover:pl-5 "
              >
                Wooden Chair
              </p>
              <p
                style={{ transition: "all .3s" }}
                className="text-[16px] text-[#a09e9c] hover:text-[#e99c2e] font-normal hover:pl-5 "
              >
                Royal Cloth Sofa
              </p>
              <p
                style={{ transition: "all .3s" }}
                className="text-[16px] text-[#a09e9c] hover:text-[#e99c2e] font-normal hover:pl-5 "
              >
                Accent Chair
              </p>
              <p
                style={{ transition: "all .3s" }}
                className="text-[16px] text-[#a09e9c] hover:text-[#e99c2e] font-normal hover:pl-5 "
              >
                Bed
              </p>
              <p
                style={{ transition: "all .3s" }}
                className="text-[16px] text-[#a09e9c] hover:text-[#e99c2e] font-normal hover:pl-5 "
              >
                Hanging Lamp
              </p>
            </div>
          </div>
          <div className="md:mt-[50px] mt-9 lg:mt-0 xl:mt-0">
            <div>
              <p className="text-[18px] text-[#5f5b57] font-bold">
                My Accounts
              </p>
            </div>
            <div className="flex flex-col gap-5 mt-12">
              <p
                style={{ transition: "all .3s" }}
                className="text-[16px] text-[#a09e9c] hover:text-[#e99c2e] font-normal hover:pl-5 "
              >
                My Account
              </p>
              <p
                style={{ transition: "all .3s" }}
                className="text-[16px] text-[#a09e9c] hover:text-[#e99c2e] font-normal hover:pl-5 "
              >
                Wishlist
              </p>
              <p
                style={{ transition: "all .3s" }}
                className="text-[16px] text-[#a09e9c] hover:text-[#e99c2e] font-normal hover:pl-5 "
              >
                Community
              </p>
              <p
                style={{ transition: "all .3s" }}
                className="text-[16px] text-[#a09e9c] hover:text-[#e99c2e] font-normal hover:pl-5 "
              >
                Order History
              </p>
              <p
                style={{ transition: "all .3s" }}
                className="text-[16px] text-[#a09e9c] hover:text-[#e99c2e] font-normal hover:pl-5 "
              >
                My Cart
              </p>
            </div>
          </div>
          <div className="md:mt-[50px] mt-9 lg:mt-0 xl:mt-0">
            <div>
              <p className="text-[18px] text-[#5f5b57] font-bold">Newsletter</p>
            </div>
            <div>
              <p className="text-[14px] text-[#a09e9c] mt-12">
                Subscribe to get latest news,update and information.
              </p>
            </div>
            <div className="w-full flex mt-11 items-center  text-[14px] shadow-[0_5px_15px_rgba(0,0,0,.2);] hover:shadow-[0_5px_15px_rgba(0,0,0,.4)]">
              <input
                className="w-full inpfut p-6 text-[14px] text-[#bcb7b2]"
                placeholder="Enter Email Hero..."
                type="text"
              />
              <div>
                <FaLocationArrow
                  color="#E99C2E"
                  size={"20px"}
                  className="mr-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F8F9FD] py-16">
          <div className="flex gap-6 text-[18px] text-[#A4AAAF] justify-center">
            <p>
              <CgFacebook />
            </p>
            <p>
              <AiOutlineInstagram />
            </p>
            <p>
              <FaLinkedinIn />
            </p>
            <p>
              <BsPinterest />
            </p>
            <p>
              <AiOutlineBehance />
            </p>
          </div>
          <div className="flex justify-center mt-9">
            <p className="text-[14px] text-center text-[#a5adb3]">
              ©Copyright. Designed And Developed By Themesine
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
