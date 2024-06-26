import React, { useState } from "react";
import logo from "../assets/omtrans_logo.png";
import { CiClock1, CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [showNav, setshowNav] = useState("translate-x-full");

  const clickNav = () => {
    setshowNav("translate-x-1/4");
  };

  const closeNav = () => {
    setshowNav("translate-x-full");
  };

  const toggleBtn = () => {
    if (showNav === "translate-x-full") {
      clickNav();
    } else {
      closeNav();
    }
  };

  return (
    <div>
      <div className="bg-[#091242] flex items-center justify-evenly h-24">
        <div>
          <img src={logo} alt="" className="w-36" />
        </div>
        <div className="sm:hidden text-4xl text-white cursor-pointer">
          {showNav === "translate-x-full" ? (
            <GiHamburgerMenu onClick={toggleBtn} />
          ) : (
            <RxCross2 onClick={toggleBtn} />
          )}
        </div>
        <div className="sm:flex  hidden">
          <div className=" flex items-center  text-white pr-3">
            <div className="bg-[#273270] py-3 px-3 rounded-full mr-2">
              <CiClock1 className=" text-[#F6B426] text-2xl" />
            </div>
            Mon - Sat 9:30 - 06:00 <br></br>Sunday Closed
          </div>
          <div className=" flex items-center  text-white pr-3">
            <div className="bg-[#273270] py-3 px-3 rounded-full mr-2">
              <CiMail className=" text-[#F6B426] text-2xl" />
            </div>
            Email <br></br>info@omtrans.in
          </div>
          <div className=" flex items-center  text-white pr-3">
            <div className="bg-[#273270] py-3 px-3 rounded-full mr-2">
              <IoCallOutline className=" text-[#F6B426] text-2xl" />
            </div>
            Call Us<br></br>+91-11-48316700
          </div>
        </div>
      </div>
      <div className="absolute  w-[-webkit-fill-available]">
        <div className=" text-white sm:flex justify-evenly items-center sm:mb-[-56px] sm:relative z-10">
          <div
            className={`sm:flex flex-col flex sm:flex-row sm:px-0 sm:py-0 sm:text-xl px-5 bg-[#F6B426] sm:bg-transparent  py-5 text-2xl ${showNav} transition-transform duration-300 sm:translate-x-0 `}
          >
            <NavLink
              to="/"
              className={(e) => {
                return e.isActive
                  ? "border-b-2 pb-1 border-[#FFB82B] w-16 sm:w-auto px-1 mx-2"
                  : " pb-1 border-[#FFB82B] transition duration-300 ease-in-out hover:border-b-2 px-1 mx-2";
              }}
            >
              Home
            </NavLink>
            <NavLink to="#" className="px-1 mx-2">
              About
            </NavLink>
            <NavLink
              to="/services"
              className={(e) => {
                return e.isActive
                  ? "border-b-2 pb-1 border-[#FFB82B] w-20 sm:w-auto px-1 mx-2"
                  : "px-1 mx-2 pb-1 border-[#FFB82B] transition duration-300 ease-in-out hover:border-b-2";
              }}
            >
              Services
            </NavLink>
            <NavLink to="#" className="px-1 mx-2 ">
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={(e) => {
                return e.isActive
                  ? "border-b-2 pb-1 border-[#FFB82B]  w-20 sm:w-auto px-1 mx-2"
                  : "px-1 mx-2 pb-1 border-[#FFB82B] transition duration-300 ease-in-out hover:border-b-2  ";
              }}
            >
              Contact
            </NavLink>
            <button className="bg-white text-black py-3 px-1 mx-2 sm:hidden mb-5 mt-10 w-7/12">
              Request Quote
            </button>
          </div>
          <div className="text-white flex sm:gap-3 items-center ">
            <div className="px-5 sm:flex  sm:items-center hidden text-2xl cursor-pointer">
              <div className="px-1 hover:text-red-600 hover:scale-110 duration-300">
                <FaInstagram />
              </div>
              <div className="px-1 hover:text-red-600 hover:scale-110 duration-300">
                <FaFacebook />
              </div>
              <div className="px-1 hover:text-red-600 hover:scale-110 duration-300">
                <FaLinkedin />
              </div>
             
            </div>
            <button className="bg-white text-black py-4 px-4 hidden sm:block hover:scale-110 duration-300 hover:bg-[#E31E24] hover:text-white">
              Request Quote
            </button>
          </div>
        </div>
        <div className="sm:bg-[#091242] sm:opacity-50 sm:relative sm:mb-[-56px] h-14"></div>
      </div>
    </div>
  );
}

export default Navbar;
