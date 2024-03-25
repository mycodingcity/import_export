import React from "react";
import logo from "../assets/logo.svg";
import { CiClock1, CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <div className="bg-[#091242] flex items-center justify-evenly h-24">
        <div>
          <img src={logo} alt="" className="text-sm" />
        </div>
        <div className="flex gap-4">
          <div className=" flex items-center gap-2 text-white">
            <div className="bg-[#273270] py-3 px-3 rounded-full">
              <CiClock1 className=" text-[#F6B426] text-2xl" />
            </div>
            Mon - Sat 9.00 - 18.00 <br></br>Sunday Closed
          </div>
          <div className=" flex items-center gap-2 text-white">
            <div className="bg-[#273270] py-3 px-3 rounded-full">
              <CiMail className=" text-[#F6B426] text-2xl" />
            </div>
            Email <br></br>contact@logistics.com
          </div>
          <div className=" flex items-center gap-2 text-white">
            <div className="bg-[#273270] py-3 px-3 rounded-full">
              <IoCallOutline className=" text-[#F6B426] text-2xl" />
            </div>
            Call Us<br></br> (00) 112 365 489
          </div>
        </div>
      </div>
      <div className="absolute  w-[-webkit-fill-available]">
        <div className=" text-white flex justify-evenly items-center mb-[-56px] relative z-10">
          <div className=" flex ">
            <a href="#" className="border-r-2 px-5 ">
              Home
            </a>
            <a href="#" className="border-r-2 px-5 ">
              Home
            </a>
            <a href="#" className="border-r-2 px-5 ">
              Home
            </a>
            <a href="#" className="border-r-2 px-5 ">
              Home
            </a>
            <a href="#" className="border-r-2 px-5 ">
              Home
            </a>
          </div>
          <div className="text-white flex gap-3 items-center ">
            <div className="px-5 flex gap-3 items-center">
              <FaInstagram />
              <FaFacebook />
              <FaLinkedin />
              <FaTwitter />
            </div>
            <button className="bg-white text-black py-4 px-4">
              Request Quote
            </button>
          </div>
        </div>
        <div className="bg-[#091242] opacity-50 relative mb-[-56px] h-14">holle</div>
      </div>
    </div>
  );
}

export default Navbar;
