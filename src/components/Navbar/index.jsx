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
  const [search, setSearch] = useState(false);

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
    <div>
      {search && (
        <div className="bg-[#333333] search flex justify-between items-center h-[60px] px-[7%] pr-[13%]">
          <div className="flex gap-[1em] items-center justify-center w-[30%]">
            <p className="text-[white]">
              <GoSearch />
            </p>
            <input
              className="bg-transparent placeholder:text-[0.9em] placeholder:text-[#999]"
              placeholder="Search"
              type="text"
              name=""
              id=""
            />
          </div>{" "}
          <p className="text-[white] text-[0.7em]">
            <FaX />
          </p>
        </div>
      )}

      <div
        className={`fixed left-0 w-full z-[9999] ${
          scrolled
            ? "navbarikki bg-white shadow-lg py-[20px] "
            : "navbarbir bg-[#F8F9FD] py-[40px] max-[1000px]:py-[20px] max-md:py-[10px] pl-[2%] pr-[4%] md:px-0"
        }`}
      >
        <div className="flex items-center justify-between xl:px-[12%] max-2xl:pl-[9%]md:px-[9%] max-2xl:pr-[10.5%] max-md:pl-[3%]  max-md:pr-[5%] max-[1000px]:px-[7%]">
          {!menu && (
            <div
              onClick={() => setMenu(true)}
              className="px-[5px] hidden max-[1000px]:flex  py-[10px] rounded-lg border border-[#e99c2e]"
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
                    active === "#hero" ? "text-[#e99c2e]" : "text-white"
                  }`}
                >
                  Home
                </p>
                <p
                  onClick={() => {
                    setActive("#arrival");
                  }}
                  className={`text-[0.9em]  ${
                    active === "#arrival" ? "text-[#e99c2e]" : "text-white"
                  }`}
                >
                  New Arrival
                </p>
                <p
                  onClick={() => {
                    setActive("#feature");
                  }}
                  className={`text-[0.9em] ${
                    active === "#feature" ? "text-[#e99c2e]" : "text-white"
                  }`}
                >
                  Features
                </p>
                <p
                  onClick={() => {
                    setActive("#blog");
                  }}
                  className={`text-[0.8em] ${
                    active === "#blog" ? "text-[#e99c2e]" : "text-white"
                  }`}
                >
                  Blog
                </p>
                <p
                  onClick={() => {
                    setActive("#contact");
                  }}
                  className={`text-[0.9em] ${
                    active === "#contact" ? "text-[#e99c2e]" : "text-white"
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
              className={`${
                active === "#hero" ? "text-[#e99c2e]" : "text-black"
              }`}
            >
              Home
            </p>
            <p
              onClick={() => {
                setActive("#arrival");
              }}
              className={`${
                active === "#arrival" ? "text-[#e99c2e]" : "text-black"
              }`}
            >
              New Arrival
            </p>
            <p
              onClick={() => {
                setActive("#feature");
              }}
              className={`${
                active === "#feature" ? "text-[#e99c2e]" : "text-black"
              }`}
            >
              Features
            </p>
            <p
              onClick={() => {
                setActive("#blog");
              }}
              className={`${
                active === "#blog" ? "text-[#e99c2e]" : "text-black"
              }`}
            >
              Blog
            </p>
            <p
              onClick={() => {
                setActive("#contact");
              }}
              className={`${
                active === "#contact" ? "text-[#e99c2e]" : "text-black"
              }`}
            >
              Contact
            </p>
          </div>
          <div className="flex items-center gap-[1.8em] max-md:gap-[1em] justify-center">
            <p className="text-[1.3em] max-md:text-[1.2em]">
              {!search && (
                <p
                  onClick={() => {
                    setSearch(true);
                  }}
                  className="text-[1.3em] max-md:text-[1.2em]"
                >
                  <GoSearch />
                </p>
              )}
              {search && (
                <p
                  onClick={() => {
                    setSearch(false);
                  }}
                  className="text-[1.3em] max-md:text-[1.2em]"
                >
                  <GoSearch />
                </p>
              )}
            </p>
            <p className="text-[1.3em] max-md:text-[1.2em]">
              <IoSettingsOutline />
            </p>
            {show && (
              <div>
                <p className="text-[1.3em] max-md:text-[1.2em]">
                  <NavCard />
                </p>
                <p onClick={() => setShow(false)} className="text-[1.1em]">
                  <BsCart3 />
                  <div className="w-[20px] absolute rounded-[30px] mt-[-29px] ml-[10px] bg-[#e99c2e] h-[20px] flex items-center justify-center">
                    <p className="text-[9.5px] font-bold text-white">2</p>
                  </div>
                </p>
              </div>
            )}
            {!show && (
              <div>
                <p onClick={() => setShow(true)} className="text-[1.1em]">
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
    </div>
  );
};

export default Navbar;
