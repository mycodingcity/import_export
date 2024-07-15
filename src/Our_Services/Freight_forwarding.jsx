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
import FF_1 from "../assets/ff_1.jpg";
import FF_2 from "../assets/ff_2.jpg";
import MyFaq from "../Components/Faq";
import freight_forwarding from "../assets/freight_forwarding.jpg";
import CTA from "../Components/CTA";
import { GiTakeMyMoney } from "react-icons/gi";
import { LiaToolsSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";

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
            International Cargo Movements in Just Few Simple Steps:
          </h3>
          Welcome to OmTrans, your trusted partner in global logistics
          solutions. With an international footprint spanning over 80 countries,
          OmTrans delivers comprehensive freight forwarding services through our
          own offices and strategic partnerships. We specialize in providing a
          full range of logistics services, including air, ocean, and land
          transportation.
        </div>
        <div className="sm:w-[40%] pt-6 sm:pt-0">
          <img src={FF_1} alt="about us image" />
        </div>
      </div>

      {/* Services */}
      <div className="bg-gray-100">
        <div className=" w-[75%] m-auto   sm:py-14 py-14">
          <div className="flex items-center justify-evenly flex-col sm:flex-row py-3">
            <div className="py-4 px-0 sm:px-6 w-[300px] border-2">
              <img src={Icon_4} alt="" />
              <div className="pt-2">
                <h3 className="text-2xl pb-2 font-semibold">Air Freight</h3>
                <p className="text-base">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </div>
            </div>
            <div className="  py-4 px-0 sm:px-6 w-[300px] border-2">
              <img src={Icon_1} alt="" />
              <div className="pt-2">
                <h3 className="text-2xl pb-2 font-semibold">Ocean Freight</h3>
                <p className="text-base">
                  Following the quality of our service thus having gained trust
                  of our many clients.
                </p>
              </div>
            </div>
            <div>
              <div className=" py-4 px-0 sm:px-6 w-[300px] border-2">
                <img src={Icon_3} alt="" />
                <div className="pt-2">
                  <h3 className="text-2xl pb-2 font-semibold">Road Freight</h3>
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

      <div className="py-4">
        <p className="sm:text-4xl text-3xl  font-bold my-4 text-center text-[#1C1F35] ">
          Associate Companies
        </p>
        <Companies_logo />
      </div>

      {/* Services 2*/}

      <div className="bg-gray-100 py-4">
        <div className="flex sm:flex-row flex-col justify-center items-center w-[90%] m-auto py-10">
          <div className="sm:w-[38%] pt-6 sm:pt-0">
            <img src={FF_2} alt="about us image" />
          </div>
          <div className="sm:w-[42%]  pl-10">
            <p className="bg-gray-200 py-1 px-3 border-l-4 border-yellow-400 w-32">
              Our Services
            </p>
            <h3 className="sm:text-4xl text-3xl font-bold	text-[#1C1F35]	py-2">
              We Support Importers/Exporters from Worldwide Locations
            </h3>
            <div className="list-inside list-disc">
              <ul className="list-disc pl-6">
                <li className="">
                  We bring a modern touch to the world of freight forwarding,
                  ensuring cutting-edge solutions for logistics and transport.
                </li>
                <li className="">
                  Providing our clients with end to end visibility with a varied
                  network of carriers, ensuring price & service optimisation.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Clients */}

      <div className="flex flex-col sm:flex-row justify-center py-14 ">
        <div className="flex flex-col sm:flex-row items-center justify-center   font-lg py-10 px-10 border-r-2 border-t-2 border-b-2">
          <span className="text-4xl font-bold ">94+</span>
          <img src={box} alt="" className="px-4"/>
          Our Location
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center   font-lg py-10 px-10 border-r-2 border-t-2 border-b-2">
          <span className="text-4xl font-bold ">2594+</span>
          <img src={box} alt="" className="px-4"/>
          Delivered Packages
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center   font-lg py-10 px-10 border-r-2 border-t-2 border-b-2">
          <span className="text-4xl font-bold	">3594+</span>
          <img src={box} alt="" className="px-4"/>
          Satisfied Clients
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center   font-lg py-10 px-10  border-t-2 border-b-2">
          <span className="text-4xl font-bold	">247+</span>
          <img src={box} alt="" className="px-4"/>
          Owned Vehicles
        </div>
      </div>

      {/* Extra Features */}

      <div className="w-[90%] pb-16 m-auto">
        <h3 className="sm:text-4xl text-3xl font-bold	text-[#1C1F35]	 text-center py-4">
          Some Benefits to Choose OmTrans
        </h3>
        <div class="flex-wrap items-center justify-center  text-center sm:flex">
          <div class="w-full px-4 py-8 mt-6  rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 bg-slate-100">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-red-600 rounded-md">
                <GiTakeMyMoney className="text-4xl" />
              </div>
            </div>
            <h3 class="py-4 text-4xl font-semibold text-black sm:text-2xl ">
              Flexible Pricing
            </h3>
            <p class="pb-4 text-black text-md  px-2">
              Encompassing today’s website design technology to integrated and
              build solutions relevant to your business.
            </p>
          </div>
          <div class="w-full px-4 py-8 mt-6 bg-slate-100 rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4   mx-4">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-red-600 rounded-md">
                <LiaToolsSolid className="text-4xl" />
              </div>
            </div>
            <h3 class="py-4 text-2xl font-semibold text-black sm:text-2xl ">
              Customized Solutions
            </h3>
            <p class="pb-4 text-black text-md px-2">
              Share relevant, engaging, and inspirational brand messages to
              create a connection with your audience.
            </p>
          </div>
          <div class="w-full px-4 py-8 mt-6 bg-slate-100 rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 ">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-red-600 rounded-md">
                <BiSupport className="text-4xl" />
              </div>
            </div>
            <h3 class="py-4 text-2xl font-semibold text-black sm:text-2xl ">
              24/7 Support
            </h3>
            <p class="pb-4 text-black text-md  px-2">
              Let us help you level up your search engine game, explore our
              solutions for digital marketing for your business.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}

      <div>
        <CTA />
      </div>

      {/* Faq */}

      <div>
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
