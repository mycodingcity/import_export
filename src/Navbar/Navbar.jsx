import React, { useState } from "react";
import logo from "../assets/omtrans_logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import Quote_Form from "../Components/QuoteForm";
import { RxCrossCircled } from "react-icons/rx";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [serivcesdropdown, servicessetDropdown] = useState(false);
  const [quoteform, setQuoteform] = useState(false);

  const showQuote = () => {
    setQuoteform(true);
  };

  const removeQuote = () => {
    setQuoteform(false);
  };

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const servicestoggleDropdown = () => {
    servicessetDropdown(!serivcesdropdown);
  };

  return (
    <div>
      <div>
        <div className="text-4xl text-black cursor-pointer sm:hidden ">
          {showNav ? (
            <RxCross2 onClick={toggleNav} />
          ) : (
            <GiHamburgerMenu onClick={toggleNav} />
          )}
        </div>
      </div>

      <div
        className={`absolute  w-full sm:static sm:flex sm:justify-around items-center text-black bg-white sm:bg-white sm:text-base text-base font-medium	 z-10  ${
          showNav ? "block duration-300" : "hidden "
        } sm:block`}
      >
        <div>
          <img src={logo} alt="" className="w-28 py-3" />
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 p-5 sm:p-0">
          <NavLink
            to="/"
            className="relative pb-1 px-2 hover:border-b-1 border-[#ff2b2b] transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#ff2b2b] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
          >
            Home
          </NavLink>
          <div
            className="relative"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <div className="relative pb-1 px-2 my-3 hover:border-b-1 border-[#ff2b2b] transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#ff2b2b] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 cursor-pointer flex items-center ">
              About <IoIosArrowDown className="pl-1 text-xl" />
            </div>
            <ul
              className={`sm:absolute  bg-[#091242] text-white w-44  text-base rounded-md ${
                dropdown ? "block " : "hidden  "
              }`}
            >
              <li className="px-4 py-2 hover:bg-[#ff2b2b] duration-200">
                <NavLink to="/About_us">About Us</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-[#ff2b2b] duration-200">
                <NavLink to="/network">Our Network</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-[#ff2b2b] duration-200">
                <NavLink to="/growth_story">Our Growth Story</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-[#ff2b2b] duration-200">
                <NavLink to="/learning_module">Learning Module</NavLink>
              </li>
            </ul>
          </div>
          <div
            className="relative"
            onMouseEnter={servicestoggleDropdown}
            onMouseLeave={servicestoggleDropdown}
          >
            <div className="relative pb-1 px-2 my-3 hover:border-b-1 border-[#ff2b2b] transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#ff2b2b] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 cursor-pointer flex  items-center ">
              Services <IoIosArrowDown className="pl-1 text-xl" />
            </div>
            <ul
              className={`sm:absolute  bg-[#091242] text-white w-44  text-base rounded-md ${
                serivcesdropdown ? "block" : "hidden"
              }`}
            >
              <li className="px-4 py-2 hover:bg-[#ff2b2b] duration-200">
                <NavLink to="/freight_forwarding">Freight Forwarding</NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-[#ff2b2b] duration-200">
                <NavLink to="/supply_chain_management">
                  Supply Chain Management
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-[#ff2b2b] duration-200">
                <NavLink to="/project_cargo_ODC_handle">
                  Project Cargo & ODC Handle
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-[#ff2b2b] duration-200">
                <NavLink to="/warehouse_distributation">
                  Warehouse & Distribution
                </NavLink>
              </li>
              <li className="px-4 py-2 hover:bg-[#ff2b2b] duration-200">
                <NavLink to="/customs_brokerage_services">
                  Customs Brokerage (Air & Sea)
                </NavLink>
              </li>
            </ul>
          </div>

          <NavLink
            to="#"
            className="relative pb-1 px-2 hover:border-b-1 border-[#ff2b2b] transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#ff2b2b] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
          >
            Sustainability
          </NavLink>

          <NavLink
            to="#"
            className="relative pb-1 px-2 hover:border-b-1 border-[#ff2b2b] transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#ff2b2b] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
          >
            News
          </NavLink>

          <NavLink
            to="/contact"
            className="relative pb-1 px-2 hover:border-b-1 border-[#ff2b2b] transition-all duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#ff2b2b] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
          >
            Contact
          </NavLink>
          <button className="bg-red-600 text-white py-3 sm:py-2 px-4 rounded-md hover:bg-[#910b0f]  sm:hidden">
            Request Quote
          </button>
        </div>
        <div className="flex items-center space-x-8 px-5 sm:px-0 pb-5 sm:pb-0">
          <div className="flex space-x-2 text-3xl sm:text-lg">
            <FaInstagram className="hover:text-red-600 cursor-pointer duration-200" />
            <FaFacebook className="hover:text-red-600 cursor-pointer duration-200" />
            <FaLinkedin className="hover:text-red-600 cursor-pointer duration-200" />
          </div>
          <div className="relative">
            <button
              onClick={showQuote}
              className="hidden sm:block bg-red-600 text-white py-3 px-4 hover:bg-[#a50a0f] hover:text-white duration-200"
            >
              Request Quote
            </button>
            {quoteform && (
              <div className="fixed inset-0 flex justify-center items-center z-40 ">
                <Quote_Form />{" "}
                <RxCrossCircled
                  className="text-4xl text-white absolute z-50 top-14 cursor-pointer hover:scale-125 duration-200"
                  onClick={removeQuote}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
