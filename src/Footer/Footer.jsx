import React from "react";
import FooterImg from "../assets/footer.jpg";
import logo from "../assets/omtrans_logo.png";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div>
        <img src={FooterImg} alt="" className="m-auto w-full" />
      </div>
      <div className="bg-slate-500  ">
        <div className="flex items-flex-start justify-evenly sm:text-2xl text-xl font-bold text-white  ">
          <div className="py-2 px-3 bg-[#091242] sm:w-[320px] ">
            <img src={logo} alt="" className="w-36" />
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
        <div className="flex  flex-col sm:flex-row items-flex-start justify-evenly text-2xl font-bold text-white px-2 sm:px-0">
          <div className="text-base font-normal text-white w-72">
            <p>
              OmTrans has developed a complete range of services to respond to
              the logistics and transportation needs comprising of Air, Ocean
              and Land transportation.
            </p>
            <div className="flex">
              <div className="py-4 text-white">
                <div className="flex  items-center  pb-3">
                  <div className="bg-[#273270] py-3 px-3 rounded-full mr-2">
                    <CiMail className=" text-[#F6B426] text-2xl" />
                  </div>
                  <p className="font-medium	 items-center ">
                    Email
                    <br />
                    <span className="font-normal">info@omtrans.in</span>
                  </p>
                </div>
                <div className="flex  items-center  pb-3">
                  <div className="bg-[#273270] py-3 px-3 rounded-full mr-2">
                    <IoCallOutline className=" text-[#F6B426] text-2xl" />
                  </div>
                  <p className="font-medium	 items-center ">
                    Call Us
                    <br />
                    <span className="font-normal">+91-11-48316700</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly cursor-pointer">
            <div>
              <ul className="font-normal text-base list-none">
                <li className="py-2">About Us</li>
                <li className="py-2">Our Team</li>
                <li className="py-2">Our Project</li>
                <li className="py-2">Pricing</li>
                <li className="py-2">Contact</li>
              </ul>
            </div>
          </div>

          <div className="flex justify-evenly cursor-pointer">
            <div>
              <ul className="font-normal text-base">
                <li className="py-2">Style Guide</li>
                <li className="py-2">License</li>
                <li className="py-2">Blogs</li>
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
            <div className="flex items-center">
              <button className=" bg-gray-200 py-4 px-5 text-base font-normal hover:scale-110 duration-300 rounded-md text-black">
                Submit Message
              </button>
              <div className="px-2">
                <FaFacebook className="hover:scale-110 duration-300 rounded-md cursor-pointer" />
              </div>
              <div className="px-2">
                <FaInstagram className="hover:scale-110 duration-300 rounded-md cursor-pointer" />
              </div>
              <div className="px-2">
                <FaLinkedin className="hover:scale-110 duration-300 rounded-md cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-around py-3 bg-[#091242] text-white border-t-2 text-center">
        <p>Copyright 2024 © OmTrans Logistics Ltd.</p>
      </div>
    </div>
  );
}

export default Footer;
