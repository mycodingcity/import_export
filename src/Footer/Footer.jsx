import React from "react";
import FooterImg from "../assets/footer.jpg";
import logo from "../assets/logo.svg";
import Icon_7 from "../assets/Icon7.svg";
import Icon_8 from "../assets/Icon8.svg";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div>
        <img src={FooterImg} alt="" />
      </div>
      <div className="bg-slate-500  ">
        <div className="flex items-flex-start justify-evenly sm:text-2xl text-xl font-bold text-white  ">
          <div className="py-6 px-3 bg-[#091242] sm:w-[350px] ">
            <img src={logo} alt="" />
          </div>
          <div>
            <div className="py-5 bg-slate-500 px-3 ">Home</div>
          </div>
          <div>
            <div className="py-5 bg-slate-500 px-3 "> Utility</div>
          </div>
          <div>
            <div className="py-5 bg-slate-500 px-3 sm:w-[350px]">Subscribe</div>
          </div>
        </div>
      </div>

      <div className="bg-[#091242] py-8">
        <div className="flex  flex-col sm:flex-row items-flex-start justify-evenly text-2xl font-bold text-white px-4 sm:px-0">
          <div className="text-base font-normal text-white">
            <p>
              Leverage agile frameworks to provide a <br /> robust synopsis for
              strategy collaborative
              <br /> thinking to further the overall value proposition.
            </p>
            <div className="flex">
              <div className="py-4 text-white">
                <div className="flex  items-center gap-2 pb-3">
                  <img src={Icon_7} alt="" />
                  <p className="font-medium	 items-center ">
                    Email
                    <br />
                    <span className="font-normal">codingcity@gmail.com</span>
                  </p>
                </div>
                <div className="flex  items-center gap-2 pb-3">
                  <img src={Icon_8} alt="" />
                  <p className="font-medium	 items-center ">
                    Call Us
                    <br />
                    <span className="font-normal">+91-807609XXXX</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly sm:gap-[200px]">
            <div>
              <ul className="font-normal text-base list-none">
                <li className="py-2">About Us</li>
                <li className="py-2">Our Team</li>
                <li className="py-2">Our Project</li>
                <li className="py-2">Pricing</li>
                <li className="py-2">Contact</li>
              </ul>
            </div>
            <div>
              <ul className="font-normal text-base">
                <li className="py-2">Style Guide</li>
                <li className="py-2">License</li>
                <li className="py-2">Changelog</li>
                <li className="py-2">Guide</li>
                <li className="py-2">Contact</li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="email"></label>
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email*"
                className="w-full ring-1 focus:ring-1 placeholder:text-white placeholder:px-2 placeholder:py-1 py-2 px-2 bg-transparent placeholder:font-normal placeholder:text-base my-5"
              />
            </div>
            <div className="flex items-center gap-3">
              <button className=" bg-gradient-to-r from-yellow-400 to-yellow-500 py-4 px-5 text-base font-normal ">
                Submit Message
              </button>
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-around py-3 bg-[#091242] text-white border-t-2 text-center">
        <p>Copyright 2024 © Coding City | Designed by Coding City</p>
        <ul className="flex gap-8 justify-center py-2 sm:py-0">
          <li>Style Guide</li>
          <li>Licenses</li>
          <li>Changelog</li>
          <li>Password</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
