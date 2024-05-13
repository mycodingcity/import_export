import React from "react";
import Navbar from "../Navbar/Navbar";
import BgImg from "../assets/our_services.jpg";
import Icon_1 from "../assets/Icon1.svg";
import Icon_2 from "../assets/Icon2.svg";
import Icon_3 from "../assets/Icon3.svg";
import Icon_4 from "../assets/Icon4.svg";

function Our_services() {
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
              Our Logistics Service
            </h1>
          </div>
          <div className="sm:w-2/5	bg-gray-500"></div>
        </div>
      </div>

      {/* What we do */}

      <div className=" w-[70%] m-auto   sm:py-14 py-14">
        <div className="text-center ">
          <p className="bg-gray-200 py-1 px-3 border-l-4 border-yellow-400 w-32 mb-4 sm:mb-0 m-auto">
            What we do
          </p>
          <h2 className="text-4xl font-bold	text-[#1C1F35]	py-2">
            Our Logistics Services
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <div className=" gap-5 py-4 px-6">
              <img src={Icon_1} alt="" />
              <div className="pt-2">
                <h3 className="text-2xl pb-2">Sea Transport Services</h3>
                <p className="text-base">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </div>
            </div>

            <div className=" gap-5 py-4 px-6">
              <img src={Icon_1} alt="" />
              <div className="pt-2">
                <h3 className="text-2xl pb-2">Sea Transport Services</h3>
                <p className="text-base">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className=" gap-5 py-4 px-6">
              <img src={Icon_1} alt="" />
              <div className="pt-2">
                <h3 className="text-2xl pb-2">Sea Transport Services</h3>
                <p className="text-base">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </div>
            </div>

            <div className="gap-5 py-4 px-6">
              <img src={Icon_2} alt="" />
              <div className="pt-2">
                <h3 className="text-2xl pb-2">Air Fright Services</h3>
                <p className="text-base">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="gap-5 py-4 px-6">
              <img src={Icon_3} alt="" />
              <div className="pt-2">
                <h3 className="text-2xl pb-2">Warehousing</h3>
                <p className="text-base">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </div>
            </div>

            <div className="gap-5 py-4 px-6">
              <img src={Icon_4} alt="" />
              <div className="pt-2">
                <h3 className="text-2xl pb-2">Local Shipping Services</h3>
                <p className="text-base">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-10">
          <button className=" bg-gradient-to-r from-blue-900 to-blue-700 py-4 px-6 text-white ">
            More Work
          </button>
        </div>
      </div>
    </div>
  );
}

export default Our_services;
