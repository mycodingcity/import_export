import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BgImg from "../assets/our_services_bg.jpg";
import TrackingForm from "../Components/TrackingForm";
import Icon_1 from "../assets/Icon1.svg";
import Icon_3 from "../assets/Icon3.svg";
import Icon_4 from "../assets/Icon4.svg";
import Companies_logo from "../Components/Companies_logo";
import box from "../assets/Pattern.svg";
import about_us_img from "../assets/about_us_container.jpg";
import MyFaq from "../Components/Faq";
import Icon_call from "../assets/phoneno.png";
import freight_forwarding from "../assets/freight_forwarding.jpg";

function Freight_forwarding() {
  return (
    <div>
      <Navbar />
      {/* Header */}
      <div
        className="bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="flex sm:flex-row flex-col items-center justify-around sm:pt-24 pt-4 sm:pb-24 m-auto pb-10 w-[90%]">
          <div className="sm:w-3/5	w-full py-6">
            <p className="text-white sm:text-lg text-sm">Our Services</p>
            <h1 className="text-white sm:text-[3.4vw] font-bold  leading-none text-4xl">
              Freight Forwarding
            </h1>
          </div>
          <div className="sm:w-2/5">
            <TrackingForm />
          </div>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col justify-center items-center w-[90%] m-auto py-10">
        <div className="sm:w-[40%]  pr-10">
          <p className="bg-gray-200 py-1 px-3 border-l-4 border-yellow-400 w-32">
            Our Services
          </p>
          <h3 className="sm:text-4xl text-3xl font-bold	text-[#1C1F35]	py-2">
            Freight Forwarding
          </h3>
          Welcome to OmTrans, your trusted partner in global logistics
          solutions. With an international footprint spanning over <b></b>80
          countries, OmTrans delivers comprehensive freight forwarding services
          through our own offices and strategic partnerships. We specialize in
          providing a full range of logistics services, including air, ocean,
          and land transportation. Leveraging over 21 years of industry
          expertise, Our exclusive and non-exclusive tie-ups enable us to offer
          customized solutions, making us a leader in the global logistics
          landscape.
        </div>
        <div className="sm:w-[40%] pt-6 sm:pt-0">
          <img src={about_us_img} alt="about us image" />
        </div>
      </div>

      {/* Services */}
      <div className="bg-gray-100">
        <div className=" w-[75%] m-auto   sm:py-14 py-14">
          <div className="flex items-center justify-center flex-col sm:flex-row py-3">
            <div className="  py-4 px-0 sm:px-6">
              <img src={Icon_4} alt="" />
              <div className="pt-2">
                <h3 className="text-2xl pb-2">Air Freight</h3>
                <p className="text-base">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </div>
            </div>
            <div className="  py-4 px-0 sm:px-6">
              <img src={Icon_1} alt="" />
              <div className="pt-2">
                <h3 className="text-2xl pb-2">Ocean Freight</h3>
                <p className="text-base">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </div>
            </div>
            <div>
              <div className=" py-4 px-0 sm:px-5">
                <img src={Icon_3} alt="" />
                <div className="pt-2">
                  <h3 className="text-2xl pb-2">Transport Services</h3>
                  <p className="text-base">
                    Following the quality of our service thus having gained
                    trust of our many clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Companies Logo*/}

      <div>
        <p className="sm:text-4xl text-3xl  font-bold my-4 text-center text-[#1C1F35] ">
          Associate Companies
        </p>
        <Companies_logo />
      </div>

      <div className="flex flex-col sm:flex-row justify-center py-10 ">
        <div className="flex flex-col sm:flex-row items-center justify-center  gap-5 font-lg py-10 px-10 border-r-2 border-t-2 border-b-2">
          <span className="text-4xl font-bold ">94</span>
          <img src={box} alt="" />
          Our Location
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center  gap-5 font-lg py-10 px-10 border-r-2 border-t-2 border-b-2">
          <span className="text-4xl font-bold ">1294</span>
          <img src={box} alt="" />
          Delivered Packages
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center  gap-5 font-lg py-10 px-10 border-r-2 border-t-2 border-b-2">
          <span className="text-4xl font-bold	">3594</span>
          <img src={box} alt="" />
          Satisfied Clients
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center  gap-5 font-lg py-10 px-10  border-t-2 border-b-2">
          <span className="text-4xl font-bold	">247</span>
          <img src={box} alt="" />
          Owned Vehicles
        </div>
      </div>

      {/* Faq */}

      <div className="bg-[#F4F4F4]">
        <div className="py-20  m-auto flex justify-center gap-10 sm:flex-row flex-col">
          <div>
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
          </div>

          <div className="w-[35%]">
            <img src={freight_forwarding} alt="" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Freight_forwarding;
