import React from "react";
import Navbar from "../Navbar/Navbar";
import BgImg from "../assets/Background.jpg";
import BgImg1 from "../assets/Background1.jpg";
import Icon_1 from "../assets/Icon1.svg";
import Icon_2 from "../assets/Icon2.svg";
import Icon_3 from "../assets/Icon3.svg";
import Icon_4 from "../assets/Icon4.svg";
import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Icon_5 from "../assets/Icon5.svg";
import Icon_6 from "../assets/Icon6.svg";
import box from "../assets/Pattern.svg";
import P1 from "../assets/p1.jpg";
import P2 from "../assets/p2.jpg";
import P3 from "../assets/p3.jpg";
import P4 from "../assets/p4.jpg";
import P5 from "../assets/p5.jpg";
import Blue_Arrow from "../assets/arrow1.svg";
import Yellow_Arrow from "../assets/arrow2.svg";
import User_1 from "../assets/User1.png";
import Quote from "../assets/quote.svg";
import Star from "../assets/Star.png";
import Img3 from "../assets/Image3.jpg";
import Icon_7 from "../assets/Icon7.svg";
import Icon_8 from "../assets/Icon8.svg";
import Icon_9 from "../assets/Icon9.svg";
import Expert1 from "../assets/expert1.jpg";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Blog1 from "../assets/Blog1.jpg";
import Calender from "../assets/calender.svg";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />

      {/* Header */}

      <div
        className="  bg-no-repeat bg-center bg-cover flex justify-end"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="flex items-center sm:justify-center justify-around m-auto pt-28 pb-28">
          <div className="sm:w-2/5	w-2/3">
            <p className="text-white sm:text-lg text-sm">
              Logistics & Supply Chain Solutions
            </p>
            <h1 className="text-white sm:text-[3.4vw] font-bold sm:py-2 leading-none text-4xl pt-4 pb-8">
              Your Gateway to any Destination in the World
            </h1>
            <p className="text-white text-lg py-4 hidden sm:block">
              In augue ligula, feugiat ut nulla consequat. Ut est lacus,
              molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl
              id dapibus finibus, enim diam interdum nulla, sed laoreet risus
              lectus.
            </p>
            <button className=" bg-gradient-to-r from-yellow-400 to-yellow-500 py-4 px-6 text-xl">
              Explore More
            </button>
          </div>
          <div className="sm:w-2/5	bg-gray-500"></div>
        </div>
      </div>
      <div className="flex items-center justify-evenly w-[80%] m-auto  flex-col sm:flex-row sm:py-14 py-10">
        <div>
          <p className="bg-gray-200 py-1 px-3 border-l-4 border-yellow-400 w-32 mb-4 sm:mb-0">
            What we do
          </p>
          <h2 className="text-4xl font-bold	text-[#1C1F35]	py-2">
            Safe & Reliable <br></br>Cargo Solutions
          </h2>
        </div>
        <div className="w-[400px]	">
          <div className="flex items-center gap-5 py-4">
            <img src={Icon_1} alt="" />
            <div className="border-l-2 pl-8">
              <h3 className="text-2xl pb-2">Sea Transport Services</h3>
              <p className="text-base">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 py-4">
            <img src={Icon_2} alt="" />
            <div className="border-l-2 pl-8">
              <h3 className="text-2xl pb-2">Air Fright Services</h3>
              <p className="text-base">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>
        </div>

        <div className="w-[400px]	">
          <div className="flex items-center gap-5 py-4">
            <img src={Icon_3} alt="" />
            <div className="border-l-2 pl-8">
              <h3 className="text-2xl pb-2">Warehousing</h3>
              <p className="text-base">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 py-4">
            <img src={Icon_4} alt="" />
            <div className="border-l-2 pl-8">
              <h3 className="text-2xl pb-2">Local Shipping Services</h3>
              <p className="text-base">
                Following the quality of our service thus having gained trust of
                our many clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Us*/}

      <div className="">
        <img src={BgImg1} alt="" />
      </div>
      <div className="flex justify-center -mt-28 flex-col sm:flex-row">
        <div className="sm:w-[500px] sm:px-10  px-4 bg-white pt-14">
          <p className="bg-gray-200 py-1 px-3 border-l-4 border-yellow-400 w-24">
            Why Us
          </p>
          <h3 className="sm:text-4xl text-2xl font-bold	text-[#1C1F35]	py-2">
            We provide full range global logistics solution
          </h3>
          <p className="text-base ">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition. Organically grow the holistic world view of disruptive
            innovation via workplace diversity and empowerment.
            <br />
            <br />
            Organically grow the holistic world view of disruptive<br></br>
            innovation via workplace diversity and empowerment.
          </p>
          <div className="flex  items-center gap-5 py-5">
            <img src={Icon_5} alt="" />
            <span className="text-2xl  items-center">Delivery on Time</span>
          </div>
          <div className="flex  items-center gap-5 pb-5">
            <img src={Icon_6} alt="" />
            <span className="text-2xl  items-center">
              Optimized Travel Cost
            </span>
          </div>
        </div>
        <div className="sm:px-16 px-8 bg-white sm:w-[600px] sm:py-14 py-6">
          <img className="sm:absolute" src={Image1} alt="" />
          <img
            className="sm:relative top-[250px] right-[50px]"
            src={Image2}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center py-10 ">
        <div className="flex flex-col sm:flex-row items-center justify-center  gap-5 font-lg py-10 px-10 border-r-2 border-t-2 border-b-2">
          <span className="text-4xl font-bold ">1294</span>
          <img src={box} alt="" />
          Delivered Packages
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center  gap-5 font-lg py-10 px-10  border-t-2 border-b-2">
          <span className="text-4xl font-bold	">3594</span>
          <img src={box} alt="" />
          Satisfied Clients
        </div>
      </div>

      {/* Across the World */}

      <div className="sm:py-10 py-3">
        <h1 className="sm:text-2xl text-4xl font-bold text-[#1C1F35] text-center px-5 sm:px-0 leading-[45px]">
          Transporting Across The World
        </h1>
      </div>
      <div className="w-full	m-auto flex flex-wrap justify-center gap-4 items-center pb-10 ">
        <div className="relative">
          <img src={P1} alt="" />
          <div className="absolute left-8 top-[300px] text-left ">
            <p className="text-white font-bold text-xl">
              Liquid Transportation
            </p>
            <span className="text-base text-[#FFB629] font-medium">
              Premium Tankers
            </span>
          </div>
        </div>
        <div className="relative">
          <img src={P2} alt="" />
          <div className="absolute left-8 top-[300px] text-left ">
            <p className="text-white font-bold text-xl">
              Liquid Transportation
            </p>
            <span className="text-base text-[#FFB629] font-medium">
              Premium Tankers
            </span>
          </div>
        </div>
        <div className="relative">
          <img src={P3} alt="" />
          <div className="absolute left-8 top-[300px] text-left ">
            <p className="text-white font-bold text-xl">
              Liquid Transportation
            </p>
            <span className="text-base text-[#FFB629] font-medium">
              Premium Tankers
            </span>
          </div>
        </div>
        <div className="relative">
          <img src={P4} alt="" />
          <div className="absolute left-8 top-[300px] text-left ">
            <p className="text-white font-bold text-xl">
              Liquid Transportation
            </p>
            <span className="text-base text-[#FFB629] font-medium">
              Premium Tankers
            </span>
          </div>
        </div>
        <div className="relative">
          <img src={P5} alt="" />
          <div className="absolute left-8 top-[300px] text-left ">
            <p className="text-white font-bold text-xl">
              Liquid Transportation
            </p>
            <span className="text-base text-[#FFB629] font-medium">
              Premium Tankers
            </span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 sm:h-[320px] h-[120px] text-center flex items-center justify-center sm:-mt-[80px]">
        <button className=" bg-gradient-to-r from-blue-900 to-blue-700 py-4 px-6 text-white ">
          More Work
        </button>
      </div>

      {/* Testimonials */}

      <div className="flex items-center justify-between py-5 sm:w-[1000px] m-auto px-4 sm:px-0">
        <div>
          <h1 className="bg-[#F4F4F4] border-l-4 border-yellow-500 pl-2 w-28">
            Testimonial
          </h1>
          <p className="text-2xl font-bold">What Our Customer Say</p>
        </div>
        <div className="flex">
          <img src={Yellow_Arrow} alt="" /> <img src={Blue_Arrow} alt="" />
        </div>
      </div>

      <div className="flex items-center justify-center flex-wrap">
        <div className="bg-[#F4F4F4] py-6 px-10 sm:w-[500px] ">
          <div className="flex justify-evenly py-4">
            <div className="flex items-center">
              <img src={User_1} alt="" />
              <p className="text-2xl font-medium px-4 leading-none">
                Rakesh Singh
                <br />
                <span className="text-base font-medium">Fuel Company</span>
              </p>
            </div>
            <img src={Quote} alt="" />
          </div>
          <p>
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition. Organically grow the holistic world view of disruptive
            innovation via workplace diversity and empowerment.
          </p>
          <div className="flex gap-2 py-4">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
          </div>
        </div>
        <div className="bg-[#091242] py-6 px-10 sm:w-[500px] flex-wrap ">
          <div className="flex justify-evenly py-4">
            <div className="flex items-center">
              <img src={User_1} alt="" />
              <p className="text-2xl font-medium px-4 leading-none text-white">
                Rakesh Singh
                <br />
                <span className="text-base font-medium">Fuel Company</span>
              </p>
            </div>
            <img src={Quote} alt="" />
          </div>
          <p className="text-white">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition. Organically grow the holistic world view of disruptive
            innovation via workplace diversity and empowerment.
          </p>
          <div className="flex gap-2 py-4">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
          </div>
        </div>
      </div>

      {/* Why Choose */}

      <div className="flex sm:flex-row flex-col items-center py-16">
        <div className="sm:w-1/2 bg-[#091242] flex items-center justify-end sm:h-[600px] relative">
          <img className="sm:absolute -right-14" src={Img3} alt="" />
        </div>
        <div className="sm:w-1/2 bg-[#F4F4F4] py-5 sm:h-[600px] flex items-center px-4 sm:px-0">
          <div className="sm:w-[500px] sm:pl-[100px]">
            <h1 className="bg-gray-300 border-l-4 border-yellow-500 pl-2 my-2 py-1 w-28">
              Why Choose
            </h1>
            <p className="text-4xl font-bold my-4">
              We create opportunity to reach potential
            </p>
            <p>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </p>
            <div className="flex justify-around">
              <div className="py-4">
                <div className="flex  items-center gap-2 pb-3">
                  <img src={Icon_7} alt="" />
                  <span className="text-xl  items-center">Safe Package</span>
                </div>
                <div className="flex  items-center gap-2 pb-3">
                  <img src={Icon_8} alt="" />
                  <span className="text-xl  items-center">Safe Package</span>
                </div>
                <div className="flex  items-center gap-2 pb-3">
                  <img src={Icon_9} alt="" />
                  <span className="text-xl  items-center">Safe Package</span>
                </div>
              </div>
              <div className="py-4">
                <div className="flex  items-center gap-2 pb-3">
                  <img src={Icon_7} alt="" />
                  <span className="text-xl  items-center">Safe Package</span>
                </div>
                <div className="flex  items-center gap-2 pb-3">
                  <img src={Icon_7} alt="" />
                  <span className="text-xl  items-center">Safe Package</span>
                </div>
                <div className="flex  items-center gap-2 pb-3">
                  <img src={Icon_7} alt="" />
                  <span className="text-xl  items-center">Safe Package</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Team*/}

      <div>
        <h1 className="bg-gray-300 border-l-4 border-yellow-500  my-2 text-center w-40 m-auto">
          The Transporters
        </h1>
        <p className="text-4xl font-bold my-4 text-center text-[#1C1F35] ">
          Meet Experts Team
        </p>
        <div className="flex justify-center gap-14 py-10 flex-wrap">
          <div>
            <img src={Expert1} alt="" />
            <div className="h-24 bg-blue-950 text-white w-[364px] py-6 absolute">
              <p className="font-bold text-2xl  px-6">Monika Singh</p>
              <span className="text-base px-6">Designer</span>
            </div>
            <div className="bg-[#FFB629] w-[180px] h-14 relative left-[184px] py-1 -top-8 px-2 flex justify-evenly items-center">
              <FaFacebook className="text-4xl py-1 text-[#1C1F35] " />
              <FaLinkedin className="text-4xl py-1 text-[#1C1F35]" />
              <FaTwitter className="text-4xl py-1 text-[#1C1F35] " />
            </div>
          </div>
          <div>
            <img src={Expert1} alt="" />
            <div className="h-24 bg-blue-950 text-white w-[364px] py-6 absolute">
              <p className="font-bold text-2xl  px-6">Monika Singh</p>
              <span className="text-base px-6">Designer</span>
            </div>
            <div className="bg-[#FFB629] w-[180px] h-14 relative left-[184px] py-1 -top-8 px-2 flex justify-evenly items-center">
              <FaFacebook className="text-4xl py-1 text-[#1C1F35] " />
              <FaLinkedin className="text-4xl py-1 text-[#1C1F35]" />
              <FaTwitter className="text-4xl py-1 text-[#1C1F35] " />
            </div>
          </div>
          <div>
            <img src={Expert1} alt="" />
            <div className="h-24 bg-blue-950 text-white w-[364px] py-6 absolute">
              <p className="font-bold text-2xl  px-6">Monika Singh</p>
              <span className="text-base px-6">Designer</span>
            </div>
            <div className="bg-[#FFB629] w-[180px] h-14 relative left-[184px] py-1 -top-8 px-2 flex justify-evenly items-center">
              <FaFacebook className="text-4xl py-1 text-[#1C1F35] " />
              <FaLinkedin className="text-4xl py-1 text-[#1C1F35]" />
              <FaTwitter className="text-4xl py-1 text-[#1C1F35] " />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us */}

      <div className="flex sm:flex-row flex-col py-16 justify-center gap-10 bg-[#091242] my-8 px-4 sm:px-0">
        <div className="sm:w-[500px] sm:pl-[100px]">
          <h1 className="bg-gray-300 border-l-4 border-yellow-500 pl-2 my-1 w-20 ">
            Contact
          </h1>
          <p className="text-4xl font-bold my-2 text-white">
            Get in touch with us
          </p>
          <p className="text-white">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.
          </p>
          <div className="sm:flex hidden">
            <div className="py-4 text-white">
              <div className="flex  items-center gap-2 pb-3">
                <img src={Icon_7} alt="" />
                <span className="text-xl  items-center ">Safe Package</span>
              </div>
              <div className="flex  items-center gap-2 pb-3">
                <img src={Icon_8} alt="" />
                <span className="text-xl  items-center">Safe Package</span>
              </div>
              <div className="flex  items-center gap-2 pb-3">
                <img src={Icon_9} alt="" />
                <span className="text-xl  items-center">Safe Package</span>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:pt-12 pt-0">
          <div className="flex">
            <div>
              <label htmlFor="username"></label>
              <input
                className="ring-1 focus:ring-1 w-full placeholder:text-white placeholder:px-2 placeholder:py-1 py-2 px-2 bg-transparent"
                type="text"
                name="username"
                placeholder="User Name"
              />
            </div>
            <div className="pl-3">
              <label htmlFor="email"></label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="ring-1 focus:ring-1 placeholder:text-white placeholder:px-2  w-full placeholder:py-1 py-2 px-2 bg-transparent"
              />
            </div>
          </div>
          <div className="flex py-8">
            <div>
              <label htmlFor="phoneno"></label>
              <input
                className="w-full ring-1 focus:ring-1 placeholder:text-white placeholder:px-2 placeholder:py-1 py-2 px-2 bg-transparent"
                type="text"
                name="phoneno"
                placeholder="Phone No."
              />
            </div>
            <div className="pl-3">
              <label htmlFor="city"></label>
              <input
                type="text"
                name="city"
                placeholder="City"
                className="w-full ring-1 focus:ring-1 placeholder:text-white placeholder:px-2 placeholder:py-1 py-2 px-2 bg-transparent"
              />
            </div>
          </div>
          <div className="py-2">
            <label htmlFor="city"></label>
            <textarea
              rows={3}
              type="text"
              name="message"
              placeholder="Your Message"
              className="ring-1 focus:ring-0 w-full placeholder:text-white placeholder:px-2 placeholder:py-1 h-24 bg-transparent"
            />
          </div>

          <button className=" bg-gradient-to-r from-yellow-400 to-yellow-500 py-4 px-6">
            Submit Message
          </button>
        </div>
      </div>

      {/* Our Blogs */}

      <div>
        <h1 className="bg-gray-300 border-l-4 border-yellow-500  my-2 text-center w-40 m-auto ">
          Our Blogs
        </h1>
        <p className="text-4xl font-bold my-4 text-center text-[#1C1F35]">
          Our Latest News
        </p>

        <div className="flex flex-col sm:flex-row sm:w-[1000px] m-auto justify-evenly  py-8 px-2 border-t-2 border-gray-300">
          <div className=" ">
            <img src={Blog1} alt="" />
          </div>
          <div className="text-center">
            <img src={Calender} alt="" className="m-auto" />
            <p className="text-4xl font-bold	leading-none	py-2">
              08<p className="font-normal text-xl">September</p>
            </p>
          </div>
          <div className="sm:w-1/3 border-l-2 border-gray-300 pl-5">
            <p className="text-2xl font-semibold ">
              Inland freight a worthy solution for your business
            </p>
            <p className="text-xl py-2">
              We are dedicated in creating added value for our customers by
              implementing modern technology in our work.
            </p>
            <ul className="list-disc pl-8">
              <li>Urgent transport solutions</li>
              <li>Reliable & experienced staffs</li>
              <li>Urgent transport solutions</li>
              <li>Reliable & experienced staffs</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:w-[1000px] m-auto justify-evenly  py-8 px-2 border-t-2 border-gray-300">
          <div className=" ">
            <img src={Blog1} alt="" />
          </div>
          <div className="text-center">
            <img src={Calender} alt="" className="m-auto" />
            <p className="text-4xl font-bold	leading-none	py-2">
              12<p className="font-normal text-xl">September</p>
            </p>
          </div>
          <div className="sm:w-1/3 border-l-2 border-gray-300 pl-5">
            <p className="text-2xl font-semibold ">
              Inland freight a worthy solution for your business
            </p>
            <p className="text-xl py-2">
              We are dedicated in creating added value for our customers by
              implementing modern technology in our work.
            </p>
            <ul className="list-disc pl-8">
              <li>Urgent transport solutions</li>
              <li>Reliable & experienced staffs</li>
              <li>Urgent transport solutions</li>
              <li>Reliable & experienced staffs</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:w-[1000px] m-auto justify-evenly  py-8 px-2 border-t-2 border-b-2 border-gray-300">
          <div className=" ">
            <img src={Blog1} alt="" />
          </div>
          <div className="text-center">
            <img src={Calender} alt="" className="m-auto" />
            <p className="text-4xl font-bold	leading-none	py-2">
              25<p className="font-normal text-xl">September</p>
            </p>
          </div>
          <div className="sm:w-1/3 border-l-2 border-gray-300 pl-5">
            <p className="text-2xl font-semibold ">
              Inland freight a worthy solution for your business
            </p>
            <p className="text-xl py-2">
              We are dedicated in creating added value for our customers by
              implementing modern technology in our work.
            </p>
            <ul className="list-disc pl-8">
              <li>Urgent transport solutions</li>
              <li>Reliable & experienced staffs</li>
              <li>Urgent transport solutions</li>
              <li>Reliable & experienced staffs</li>
            </ul>
          </div>
        </div>
        <div className=" m-auto text-center py-5">
          <button className=" bg-[#091242] py-4 px-6 text-white">
            More Blog
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
