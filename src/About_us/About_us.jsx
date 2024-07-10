import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BgImg from "../assets/our_services.jpg";
import TrackingForm from "../Components/TrackingForm";
import about_us_img from "../assets/about_us_container.jpg";
import Icon_1 from "../assets/bo_icon.jpg";
import Icon_2 from "../assets/warehouse_icon.jpg";
import Icon_3 from "../assets/staff_icon.jpg";
import Icon_4 from "../assets/truck_icon.png";
import Experts from "../Components/Experts";
import Vikran_sir from "../assets/vikram_sir.jpg";
import Companies_logo from "../Components/Companies_logo";
import about_us_img_network from "../assets/Networking.jpg";
import certificate_1 from "../assets/certificate_1.jpg";
import certificate_2 from "../assets/certificate_2.jpg";
import certificate_3 from "../assets/certificate_3.jpg";
import certificate_4 from "../assets/certificate_4.jpg";
import certificate_5 from "../assets/certificate_5.jpg";

function About_us() {
  return (
    <div>
      <Navbar />
      <div
        className="bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="flex sm:flex-row flex-col items-center justify-around sm:pt-24 pt-4 sm:pb-24 m-auto pb-10 w-[90%]">
          <div className="sm:w-3/5	w-full py-6">
            <h1 className="text-white sm:text-[3.4vw] font-bold  leading-none text-4xl">
              About Us
            </h1>
          </div>
          <div className="sm:w-2/5">
            <TrackingForm />
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center items-center w-[90%] m-auto py-10">
        <div className="sm:w-[40%]  pr-10">
          <p className="bg-gray-200 py-1 px-3 border-l-4 border-yellow-400 w-24">
            About Us
          </p>
          <h3 className="sm:text-4xl text-3xl font-bold	text-[#1C1F35]	py-2">
            Welcome to OmTrans
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

      {/* Management */}

      <div className=" py-6 bg-slate-100">
        <p className="bg-gray-200 py-1 px-3 border-l-4 border-yellow-400 w-24 m-auto">
          OmTrans
        </p>
        <h3 className="sm:text-4xl text-3xl font-bold	text-[#1C1F35]	py-2 text-center">
          Management
        </h3>
        <div className="flex justify-evenly py-6 flex-wrap">
          <div className="py-2 sm:my-0 my-4">
            <Experts img={Vikran_sir} name="Mr. Vikram Garg" title="Director" />
          </div>
          <div className="py-2 sm:my-0 my-4">
            <Experts img={Vikran_sir} name="Mr. Vikram Garg" title="Director" />
          </div>
          <div className="py-2 sm:my-0 my-4">
            <Experts img={Vikran_sir} name="Mr. Vikram Garg" title="Director" />
          </div>
        </div>
      </div>

      {/* Our Services */}

      <div>
        <div className=" w-[90%] m-auto   sm:py-5 py-3 ">
          <div className="flex items-center content-center justify-evenly flex-col sm:flex-row flex-wrap m-auto">
            <div className="  py-4 px-0 sm:px-6 ">
              <img src={Icon_1} alt="" className="w-14 m-auto py-2" />
              <h3 className="text-xl pb-2">750+ Offices</h3>
            </div>
            <div className=" py-4 px-0 sm:px-6">
              <img src={Icon_2} alt="" className="w-14 m-auto py-2" />
              <h3 className="text-xl pb-2">200+ Warehouse</h3>
            </div>
            <div className=" py-4 px-0 sm:px-6">
              <img src={Icon_3} alt="" className="w-14 m-auto py-2" />
              <h3 className="text-xl pb-2">7500+ Staff</h3>
            </div>
            <div>
              <div className=" py-4 px-0 sm:px-6 ">
                <img src={Icon_4} alt="" className="w-14 m-auto py-2" />
                <h3 className="text-xl pb-2">5500+ Trucks</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* infrastructure */}

      <div className="flex sm:flex-row flex-col-reverse justify-center items-center w-[90%] m-auto py-10">
        <div className="sm:w-[40%] py-4 sm:py-0">
          <img src={about_us_img_network} alt="about us image " />
        </div>
        <div className="sm:w-[40%] px-6">
          <p className="bg-gray-200 py-1 px-3 border-l-4 border-yellow-400 w-24 my-2">
            About Us
          </p>
          <h3 className="sm:text-4xl text-3xl font-bold	text-[#1C1F35]	 my-2">
            Global Services
          </h3>
          To widely spread Indian Corporate and Multinational with globally
          spread market OmTrans offers the following range of services.
          <ul className="pl-6 list-disc	">
            <li>Door-to-Door pickup and delivery all over the world.</li>
            <li>Warehousing facilities all over the world.</li>
            <li>Project Handling</li>
            <li>Cargo consolidation Air/Sea.</li>
            <li>Custom broker for Export and Import</li>
            <li>Packing of machinery and other exim cargo.</li>
          </ul>
        </div>
      </div>

      {/* Companies Logo*/}

      <div>
        <p className="sm:text-4xl text-3xl  font-bold my-4 text-center text-[#1C1F35] ">
          Associate Companies
        </p>
        <Companies_logo />
      </div>

      {/* Certifications */}

      <div className="w-[90%] m-auto py-10">
        <h3 className="sm:text-4xl text-3xl font-bold	text-[#1C1F35]	 py-4 text-center">
          Certifications
        </h3>
        <div className="text-base">
          <p>
            <b>OM TRANS LOGISTICS LIMITED</b> has implemented Integrated
            Management System, under which following standards has been adopted
          </p>
          <br />
          <p>
            <b>An ISO 9001:2015 Quality Management System: </b> We truly
            committed to providing our customers with the very best services. In
            whatever we do, we will consistently strive to meet & exceed
            customer expectations and continually improve the effectiveness of
            our Management System. Excellence, Quality, innovation and
            continuous improvement are a permanent objection of our
            organization.
          </p>
          <br />
          <p>
            <b> An ISO 14001:2015 Environmental Management System:</b> We assure
            to adopt measures that will help in protecting the environment and
            safeguarding our natural resources.
          </p>
          <br />
          <p>
            <b>
              An ISO 45001:2018 Occupational Health & Safety Management System:
            </b>
            We assure to provide healthy & safe environment in our workplaces by
            complying with all applicable Healthy & Safety, legal and other
            requirements.
          </p>
          <br />
          <p>
            <b> An ISO 37001:2016 Anti Bribery Management System: </b> We
            committed to conducting lawful, ethical business with integrity as
            part of this commitment. All forms of bribery and corruption are
            unacceptable and are not to be tolerated. We comply with Anti
            Bribery laws that are applicable to our organization.
          </p>
          <br />
        </div>
        <div className="flex py-3 flex-wrap w-[90%] m-auto justify-evenly">
          <img
            src={certificate_1}
            alt=""
            className="w-48 shadow-lg	my-2 cursor-pointer hover:scale-110 duration-200"
          />
          <img
            src={certificate_2}
            alt=""
            className="w-48 shadow-lg	my-2 cursor-pointer hover:scale-110 duration-200"
          />
          <img
            src={certificate_3}
            alt=""
            className="w-48 shadow-lg	my-2 cursor-pointer hover:scale-110 duration-200"
          />
          <img
            src={certificate_4}
            alt=""
            className="w-48 shadow-lg	my-2 cursor-pointer hover:scale-110 duration-200"
          />
          <img
            src={certificate_5}
            alt=""
            className="w-48 shadow-lg	my-2 cursor-pointer hover:scale-110 duration-200"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About_us;
