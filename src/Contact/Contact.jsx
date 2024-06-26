import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BgImg from "../assets/our_services.jpg";
import Icon_call from "../assets/c_call.png";
import Icon_sms from "../assets/c_sms.png";
import Icon_time from "../assets/c_time.png";
import img_1 from "../assets/c_img1.jpg";
import img_2 from "../assets/c_img2.png";
import img_3 from "../assets/c_img3.png";
import img_4 from "../assets/c_img4.png";
import MyFaq from "../Components/Faq";

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

      {/*Contact Form */}

      <div className="mx-2">
        <div className="bg-[#091242] sm:w-[800px] m-auto my-8 py-16  ">
          <p className="bg-gray-200 py-1 px-3 border-l-4 border-yellow-400 w-32 mb-4 sm:mb-0 text-center m-auto">
            What we do
          </p>
          <h2 className="text-4xl font-bold	text-white	py-2 text-center m-auto">
            Get in Touch with us
          </h2>
          <p className="text-base	text-white	py-2 text-center m-auto px-5 w-3/4">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value.
          </p>
          <div className="flex content-center justify-around py-4 items-center">
            <div>
              <img src={Icon_call} alt="" />
              <p className="text-white text-center">123456789</p>
            </div>
            <div className="">
              <img src={Icon_sms} alt="" className="m-auto" />
              <p className="text-white text-center">cc@omtrans.in</p>
            </div>
            <div className="text-center">
              <img src={Icon_time} alt="" className="m-auto" />
              <p className="text-white text-center">
                Mon - Sat 9.00 - 18.00 <br />
                Sunday Closed
              </p>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col py-2 justify-center gap-10 bg-[#091242]  px-4 sm:px-0 ">
            <div className="sm:pt-2 pt-0">
              <div className="flex flex-col sm:flex-row gap-2 items-center text-white">
                <div>
                  <label htmlFor="username"></label>
                  <input
                    className=" sm:w-64 w-80 my-2 ring-1 focus:ring-1  placeholder:text-white placeholder:px-2 placeholder:py-1 py-2 px-2 bg-transparent"
                    type="text"
                    name="username"
                    placeholder="User Name"
                  />
                </div>
                <div className="sm:pl-3">
                  <label htmlFor="email"></label>
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="sm:w-64 w-80 my-2 ring-1 focus:ring-1 placeholder:text-white placeholder:px-2   placeholder:py-1 py-2 px-2 bg-transparent"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 items-center text-white">
                <div>
                  <label htmlFor="phoneno"></label>
                  <input
                    className="sm:w-64 w-80 my-2 ring-1 focus:ring-1 placeholder:text-white placeholder:px-2 placeholder:py-1 py-2 px-2 bg-transparent"
                    type="text"
                    name="phoneno"
                    placeholder="Phone No."
                  />
                </div>
                <div className="sm:pl-3">
                  <label htmlFor="city"></label>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    className=" sm:w-64 w-80 ring-1 focus:ring-1 placeholder:text-white placeholder:px-2 placeholder:py-1 py-2 px-2 my-2 bg-transparent"
                  />
                </div>
              </div>
              <div className="py-2 text-center text-white ">
                <label htmlFor="city"></label>
                <textarea
                  rows={3}
                  type="text"
                  name="message"
                  placeholder="Your Message"
                  className="sm:w-full w-80 my-2 ring-1 focus:ring-0  placeholder:text-white placeholder:px-2 placeholder:py-1 h-24 bg-transparent"
                />
              </div>

              <div className="m-auto text-center py-4">
                <button className=" bg-gradient-to-r from-yellow-400 to-yellow-500 py-4 px-6 hover:scale-110 duration-300 rounded-md">
                  Submit Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Images */}

      <div className="flex justify-center items-center py-5 flex-col sm:flex-row">
        <img src={img_1} alt="" />
        <img
          src={img_2}
          alt=""
          className=" border-t-[1px] border-b-[1px] border-blue-900"
        />
        <img
          src={img_3}
          alt=""
          className=" border-t-[1px] border-b-[1px] border-blue-900"
        />
        <img
          src={img_4}
          alt=""
          className=" border-t-[1px] border-b-[1px] border-blue-900"
        />
      </div>

      {/* Faq */}

      <div className="bg-[#F4F4F4]">
        <div className="py-20  m-auto flex justify-center gap-10 sm:flex-row flex-col">
          <div className="sm:w-[500px] sm:px-0 px-5">
            <p className="bg-gray-200 py-1 px-3 border-l-4 border-yellow-400 w-20 mb-4 sm:mb-0  ">
              FAQ
            </p>
            <h2 className="text-2xl font-bold	py-2 m-auto pb-10">
              Frequently Asked <br /> Questions
            </h2>
            <div>
              <MyFaq />
            </div>
          </div>
          <div className="">
            <div className="bg-[#091242]  py-8 px-12">
              <p className="bg-[#ececec2c] py-1 px-3 border-l-4 border-yellow-400 w-24 mb-4  text-white ">
                Let's Talk
              </p>
              <div className="text-white text-xl">
                You need any help? get free consultation
              </div>
              <div className="flex py-4 m-auto items-center gap-4">
                <div>
                  <img src={Icon_call} alt="" />
                </div>
                <div className="text-white">
                  <p>Have Any Questions</p>
                  123456789
                </div>
              </div>
              <div className=" py-4">
                <button className=" bg-gradient-to-r from-yellow-400 to-yellow-500 py-4 px-6 hover:scale-110 duration-300 rounded-md">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
