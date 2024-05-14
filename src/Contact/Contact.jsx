import React from "react";
import Navbar from "../Navbar/Navbar";
import BgImg from "../assets/our_services.jpg";

function Contact() {
  return (
    <div>
      <Navbar />
      <div
        className="bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="flex items-center sm:justify-center justify-around pt-32 pb-32 m-auto w-[80%]">
          <div className="sm:w-2/5	w-full">
            <p className="text-white sm:text-lg text-sm">Our Services</p>
            <h1 className="text-white sm:text-[3.4vw] font-bold sm:py-2 leading-none text-4xl pt-4 pb-8">
              Contact Us
            </h1>
          </div>
          <div className="sm:w-2/5	bg-gray-500"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
