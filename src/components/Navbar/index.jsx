import React, { useState, useEffect } from "react";
import { FaX } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
// styles
// import "./style.css";
import { IoSettingsOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
// import DataCard from "./DataCard";
import NavCard from "./NavCard";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#hero");
  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position and update the state
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed left-0 w-full z-[9999] ${
        scrolled
          ? "bg-white shadow-lg py-[20px] "
          : "bg-[#F8F9FD] py-[40px] max-[1000px]:py-[20px] max-md:py-[10px] pl-[2%] pr-[4%] md:px-0"
      }`}
    >
      <div className="flex items-center justify-between xl:px-[12%] max-2xl:pl-[9%]md:px-[9%] max-2xl:pr-[10.5%] max-md:pl-[3%]  max-md:pr-[5%] max-[1000px]:px-[7%]">
        {!menu && (
          <div
            onClick={() => setMenu(true)}
            className="px-[5px] hidden max-[1000px]:flex  py-[10px] rounded-lg border border-red-700"
          >
            <p className=" text-[1.5em]">
              <IoMenu />
            </p>
          </div>
        )}
        {menu && (
          <div>
            <div
              onClick={() => setMenu(false)}
              className="px-[10.5px] hidden max-[1000px]:flex  py-[15.6px] rounded-lg border border-red-700"
            >
              <p className=" text-[0.8em]">
                <FaX />
              </p>
            </div>
            <div className="flex flex-col  bg-black px-[15px] bg-opacity-[0.5] py-[10px] text-[1em] absolute items-start left-[5%] mt-[5%] justify-start gap-[1.5em]">
              <p
                onClick={() => {
                  setActive("#hero");
                }}
                className={`text-[0.9em] ${
                  active === "#hero" ? "text-[red]" : "text-white"
                }`}
              >
                Home
              </p>
              <p
                onClick={() => {
                  setActive("#arrival");
                }}
                className={`text-[0.9em]  ${
                  active === "#arrival" ? "text-[red]" : "text-white"
                }`}
              >
                New Arrival
              </p>
              <p
                onClick={() => {
                  setActive("#feature");
                }}
                className={`text-[0.9em] ${
                  active === "#feature" ? "text-[red]" : "text-white"
                }`}
              >
                Features
              </p>
              <p
                onClick={() => {
                  setActive("#blog");
                }}
                className={`text-[0.8em] ${
                  active === "#blog" ? "text-[red]" : "text-white"
                }`}
              >
                Blog
              </p>
              <p
                onClick={() => {
                  setActive("#contact");
                }}
                className={`text-[0.9em] ${
                  active === "#contact" ? "text-[red]" : "text-white"
                }`}
              >
                Contact
              </p>
            </div>
          </div>
        )}
        <p className="text-[1.5em] max-md:text-[1.2em]">Furn.</p>
        <div className="flex items-center ml-[5.2%] max-[1000px]:hidden justify-center gap-[3.1em]">
          <p
            onClick={() => {
              setActive("#hero");
            }}
            className={`${active === "#hero" ? "text-[red]" : "text-black"}`}
          >

Home</p>
          <p
            onClick={() => {
              setActive("#arrival");
            }}
            className={`${active === "#arrival" ? "text-[red]" : "text-black"}`}
          >
            New Arrival
          </p>
          <p
            onClick={() => { setActive("#feature")
            }}
            className={`${active === "#feature" ? "text-[red]" : "text-black"}`}
          >
            Features
          </p>
          <p
            onClick={() => { setActive("#blog")}}
            className={`${active === "#blog" ? "text-[red]" : "text-black"}`}
          >
            Blog
          </p>
          <p
            onClick={() => {
              setActive("#contact");
            }}
            className={`${active === "#contact" ? "text-[red]" : "text-black"}`}
          >
            Contact
          </p>
        </div>
        <div className="flex items-center gap-[1.8em] max-md:gap-[1em] justify-center">
          <p className="text-[1.3em] max-md:text-[1.2em]">
            <GoSearch />
          </p>
          <p className="text-[1.3em] max-md:text-[1.2em]">
            <IoSettingsOutline />
          </p>
          {!show && (
            <div>
              <p className="text-[1.3em] max-md:text-[1.2em]">
                <NavCard />
              </p>
              <p onClick={() => setShow(true)} className="text-[1.1em]">
                <BsCart3 />
                <div className="w-[20px] absolute rounded-[30px] mt-[-29px] ml-[10px] bg-[#e99c2e] h-[20px] flex items-center justify-center">
                  <p className="text-[9.5px] font-bold text-white">2</p>
                </div>
              </p>
            </div>
          )}
          {show && (
            <div>
              <p onClick={() => setShow(false)} className="text-[1.1em]">
                <BsCart3 />
                <div className="w-[20px] absolute rounded-[30px] mt-[-29px] ml-[10px] bg-[#e99c2e] h-[20px] flex items-center justify-center">
                  <p className="text-[9.5px] font-bold text-white">2</p>
                </div>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
