import React, { useState } from "react";
import logo from "../assets/omtrans_logo.png";
import { CiClock1, CiMail } from "react-icons/ci";
import { IoCallOutline  } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div>
      <div className="bg-[#091242] flex items-center sm:justify-around justify-between sm:h-24 h-20 px-5">
        <div>
          <img src={logo} alt="OM Trax Logo" className="sm:w-36 w-28" />
        </div>
        <div className="text-4xl text-white cursor-pointer sm:hidden">
          {showNav ? <RxCross2 onClick={toggleNav} /> : <GiHamburgerMenu onClick={toggleNav} />}
        </div>
        <div className="hidden sm:flex items-center text-white space-x-6">
          <div className="flex items-center space-x-2">
            <CiClock1 className="text-[#F6B426]  bg-[#273270] rounded-full py-3 px-3 text-5xl" />
            <div>
              Mon - Sat 9:30 - 06:00
              <br />
              Sunday Closed
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <CiMail className="text-[#F6B426]  bg-[#273270] rounded-full py-3 px-3 text-5xl" />
            <div>
              Email
              <br />
              info@omtrans.in
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <IoCallOutline className="text-[#F6B426]  bg-[#273270] rounded-full py-3 px-3 text-5xl" />
            <div>
              Call Us
              <br />
              +91-11-48316700
            </div>
          </div>
        </div>
      </div>

      <div className={`absolute  w-full sm:static sm:flex sm:justify-around items-center bg-[#64748B] sm:bg-slate-500 font-normal sm:text-lg text-xl text-white z-10  ${showNav ? "block duration-300" : "hidden "} sm:block`}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 p-5 sm:p-0">
          <NavLink to="/" className="hover:border-b-2 border-[#FFB82B] pb-1 px-2">
            Home
          </NavLink>
          <div className="relative" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <div className="hover:border-b-2 border-[#FFB82B] pb-1 px-2 cursor-pointer flex  items-center ">
              About  <IoIosArrowDown className="pl-1 text-xl"/>
            </div>
            <ul className={`sm:absolute  bg-[#091242] text-white w-40  text-base rounded-md ${dropdown ? "block" : "hidden"}`}>
              <li className="px-4 py-2 hover:bg-[#FFB82B]">
                <NavLink to="/About_us">About Us</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-[#FFB82B]">
                <NavLink to="/network">Our Network</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-[#FFB82B]">
                <NavLink to="/growth_story">Our Growth Story</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/services" className="hover:border-b-2 border-[#FFB82B] pb-1 px-2 flex items-center">
            Services <IoIosArrowDown className="pl-1 text-xl"/>
          </NavLink>
          <NavLink to="#" className="hover:border-b-2 border-[#FFB82B] pb-1 px-2">
            News
          </NavLink>
          <NavLink to="/contact" className="hover:border-b-2 border-[#FFB82B] pb-1 px-2">
            Contact
          </NavLink>
          <button className="bg-white text-black py-3 sm:py-2 px-4 rounded-md hover:bg-[#E31E24] hover:text-white sm:hidden">
            Request Quote
          </button>
        </div>
        <div className="flex items-center space-x-8 px-5 sm:px-0 pb-5 sm:pb-0">
          <div className="flex space-x-2 text-3xl sm:text-lg">
            <FaInstagram className="hover:text-red-600 cursor-pointer duration-200" />
            <FaFacebook className="hover:text-red-600 cursor-pointer duration-200" />
            <FaLinkedin className="hover:text-red-600 cursor-pointer duration-200" />
          </div>
          <button className="hidden sm:block bg-white text-black py-3 px-4  hover:bg-[#E31E24] hover:text-white duration-200">
            Request Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
