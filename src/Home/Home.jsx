import React from "react";
import Navbar from "../Navbar/Navbar";
import BgImg from "../assets/Backgroundc.jpg";
import BgImg1 from "../assets/Background1.jpg";
import Icon_1 from "../assets/Icon1.svg";
import Icon_2 from "../assets/Icon2.svg";
import Icon_3 from "../assets/Icon3.svg";
import Icon_4 from "../assets/Icon4.svg";
import Image1 from "../assets/container.jpg";
import Image2 from "../assets/container_sea.jpg";
import Icon_5 from "../assets/w_icon7.png";
import Icon_6 from "../assets/w_icon8.png";
import box from "../assets/Pattern.svg";
import { CiClock1, CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import P1 from "../assets/ff.jpg";
import P2 from "../assets/scm.jpg";
import P3 from "../assets/warehouse.jpg";
import P4 from "../assets/odc.jpg";
import P5 from "../assets/custom_clear.jpg";
import P6 from "../assets/server.jpg";
import Img3 from "../assets/transportation.jpg";
import Icon_7 from "../assets/w_icon1.png";
import Icon_8 from "../assets/w_icon2.png";
import Icon_9 from "../assets/w_icon3.png";
import Icon_10 from "../assets/w_icon4.png";
import Icon_11 from "../assets/w_icon5.png";
import Icon_12 from "../assets/w_icon6.png";
import Blog1 from "../assets/blog_2.jpg";
import Blog2 from "../assets/transport_b.jpg";
import Blog3 from "../assets/blog_3.jpg";
import Footer from "../Footer/Footer";
import Icon_tab from "../Components/Icon_tab";
import Img_card from "../Components/Img_card";
import Testimonials from "../Components/Testimonials";
import Choose_icon from "../Components/Choose_icon";
import Blog from "../Components/Blog";
import TrackingForm from "../Components/TrackingForm";
import Companies_logo from "../Components/Companies_logo";

function Home() {
  return (
    <div>
      <Navbar />

      {/* Header */}

      <div
        className="  bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="flex flex-col sm:flex-row items-center sm:justify-center justify-around m-auto sm:pt-28 pt-8 sm:pb-28 pb-8">
          <div className="sm:w-2/5	w-4/5">
            <p className="text-white sm:text-lg text-sm">
              Logistics & Supply Chain Solutions
            </p>
            <h1 className="text-white sm:text-[3.4vw] font-bold sm:py-2 leading-none text-4xl pt-4 pb-8">
              Your Gateway to any Destination in the World
            </h1>
            <p className="text-white text-lg py-4 hidden sm:block">
              OmTrans is an innovative Freight Forwarding and logistics company
              that is aimed at delivering best logistic practices to their
              customers.
            </p>

            <div>
              <a
                class="group relative inline-block overflow-hidden border border-[#FFDA56] px-8 py-3 focus:outline-none focus:ring"
                href="#"
              >
                <span class="absolute inset-y-0 left-0 w-[2px] bg-[#FFDA56] transition-all group-hover:w-full group-active:bg-[#FFDA56]"></span>

                <span class="relative text-base font-medium text-white transition-colors group-hover:text-black">
                  Explore More
                </span>
              </a>
            </div>
          </div>
          <div className="sm:w-2/5 sm:mx-0 mx-2 sm:py-0 py-8">
            <TrackingForm />
          </div>
        </div>
      </div>

      {/* What we do */}

      <div className="flex items-center justify-evenly w-[90%] m-auto  flex-col sm:flex-row sm:py-14 py-10 ">
        <div>
          <p className="bg-gray-200 py-1 px-3 border-l-4 border-[#E31E24] w-32 mb-4 sm:mb-0">
            What we do
          </p>
          <h2 className="text-4xl font-bold	text-[#1C1F35]	py-2">
            Safe & Reliable <br></br>Cargo Solutions
          </h2>
        </div>

        <div className="w-[450px]	sm:px-0 px-6">
          <Icon_tab
            icon={Icon_1}
            title="Freight Forwarding"
            description="OmTrans offers freight forwarding services, helping businesses move goods efficiently by air, sea, and land."
          />

          <Icon_tab
            icon={Icon_2}
            title="Warehousing & Distribution"
            description="OmTrans offers warehousing and distribution services, with bonded and non-bonded facilities at major ports."
          />
        </div>

        <div className="w-[450px]	sm:px-0 px-6">
          <Icon_tab
            icon={Icon_3}
            title="Supply Chain Management"
            description="Efficient and strategic supply chain management can make a substantial difference in an organizations success and profitability."
          />

          <Icon_tab
            icon={Icon_4}
            title="Project Cargo & ODC Handle"
            description="OmTrans offers specializing in transporting oversized and heavy equipment efficiently across the globe."
          />
        </div>
      </div>

      {/* Why Us*/}

      <div className="">
        <img src={BgImg1} alt="" className="m-auto w-full mb-0 sm:-mb-52" />
      </div>

      <div className="flex justify-center flex-col sm:flex-row">
        <div className="sm:w-[500px] sm:px-10  px-4 bg-white sm:pt-14 pt-6">
          <p className="bg-gray-200 py-1 px-3 border-l-4 border-[#E31E24] w-24">
            Why Us
          </p>
          <h3 className="sm:text-4xl text-2xl font-bold	text-[#1C1F35]	py-2">
            We Provide Full Range Global Logistics Solution
          </h3>
          <p className="text-base ">
            Welcome to OmTrans, your trusted partner in global logistics
            solutions. With an international footprint spanning over 80
            countries, OmTrans delivers comprehensive freight forwarding
            services through our own offices and strategic partnerships.
            <br />
            <br />
            We specialize in providing a full range of logistics services,
            including air, ocean, and land transportation.
          </p>
          <div className="flex  items-center  py-5">
            <img src={Icon_5} alt="" className="pr-3" />
            <span className="text-2xl  items-center">Delivery on Time</span>
          </div>
          <div className="flex  items-center  pb-5">
            <img src={Icon_6} alt="" className="pr-3" />
            <span className="text-2xl  items-center">
              Optimized Logistics Cost
            </span>
          </div>
        </div>
        <div className="sm:px-16 px-8 bg-white sm:w-[600px] sm:py-14 py-6">
          <img className="sm:absolute w-[500px]" src={Image1} alt="" />
          <img
            className="sm:relative top-[250px] right-[50px] hidden sm:block"
            src={Image2}
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center py-10 ">
        <div className="flex flex-col sm:flex-row items-center justify-center   font-lg py-10 px-10 border-r-2 border-t-2 border-b-2">
          <span className="text-4xl font-bold ">9254+</span>
          <img src={box} alt="" className="px-3" />
          Delivered Cargo
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center   font-lg py-10 px-10  border-t-2 border-b-2">
          <span className="text-4xl font-bold	">3594+</span>
          <img src={box} alt="" className="px-3" />
          Satisfied Client
        </div>
      </div>

      {/*Transporting Across the World */}

      <div className="bg-slate-100 py-5">
        <div className="py-5">
          <h1 className="sm:text-4xl text-2xl font-bold text-[#1C1F35] text-center px-5 sm:px-0 leading-[45px] ">
            Our Services
          </h1>
        </div>

        <div className="w-[90%]	m-auto flex flex-wrap justify-center ">
          <Img_card
            title="Freight Forwarding"
            description="Om Trans, one of the established logistics companies in India, acts as a freight forwarder while delivering forwarding and groupage services to its clients."
            img={P1}
          />

          <Img_card
            title="Supply Chain Management"
            description="Efficient and strategic supply chain management can make a substantial difference in an organizations success and profitability."
            img={P2}
          />

          <Img_card
            title="Warehousing & Distribution"
            description="OmTrans offers warehousing and distribution services, with bonded and non-bonded facilities at major ports.

            "
            img={P3}
          />

          <Img_card
            title="Project Cargo & ODC Handle"
            description="OmTrans offers specializing in transporting oversized and heavy equipment efficiently across the globe.

            "
            img={P4}
          />
          <Img_card
            title="Custom Brokerage"
            description="We operate under the valid license of the Customs Authority of India and help in smooth local transportation and freight services."
            img={P5}
          />
          <Img_card
            title="IT Infrastructure & Usage"
            description="OM Logistics stands as a distinguished player in the world of IT and consumer electronics, providing specialized solutions tailored to specific needs."
            img={P6}
          />
        </div>
      </div>

      {/* Testimonials */}

      <div className="flex items-center justify-center flex-wrap">
        <div className="py-6  sm:w-[70%] w-[100%]">
          <Testimonials />
        </div>
      </div>

      {/* Why Choose */}

      <div className="flex  sm:flex-row flex-col items-center py-16">
        <div className="sm:w-1/2 bg-[#091242] flex items-center justify-end sm:h-[600px] relative">
          <img className="sm:absolute -right-14" src={Img3} alt="" />
        </div>
        <div className="sm:w-1/2 bg-[#F4F4F4] py-5 sm:h-[600px] flex items-center px-4 sm:px-0">
          <div className="sm:w-[550px] sm:pl-[100px]">
            <h1 className="bg-gray-300 border-l-4 border-red-600 pl-2 my-2 py-1 w-36">
              Why Choose Us
            </h1>
            <p className="text-4xl font-bold my-4">
              We Create Opportunity to Reach Potential
            </p>
            <p>
              With 21 years of industry experience, we are committed to
              providing exceptional service and ensuring your cargo reaches its
              destination safely and on time. Choose OmTrans for a hassle-free
              logistics experience.
            </p>
            <div className="flex sm:justify-center  sm:flex-nowrap flex-wrap sm:pl-0 pl-3 ">
              <div className="sm:py-4 pt-4">
                <Choose_icon icon={Icon_7} title="Connectivity Options" />
                <Choose_icon icon={Icon_8} title="Safe Cargo Delivery" />
                <Choose_icon icon={Icon_9} title="24x7 Availability" />
              </div>
              <div className="sm:py-4 pb-4">
                <Choose_icon icon={Icon_10} title="No Hiddin Costs" />
                <Choose_icon icon={Icon_11} title="Inventory Management " />
                <Choose_icon
                  icon={Icon_12}
                  title=" Experienced Logistics Professional"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Team*/}

      <div>
        <p className="text-4xl font-bold my-4 text-center text-[#1C1F35] ">
          Associate Companies
        </p>
        <Companies_logo />
      </div>

      {/* Contact Us */}

      <div className="flex sm:flex-row flex-col py-16 justify-center gap-10 bg-[#091242] my-8 px-4 sm:px-0">
        <div className="sm:w-[500px] sm:pl-[100px] pr-4">
          <h1 className="bg-gray-300 border-l-4 border-red-600 pl-2 my-1 w-28 ">
            Contact Us
          </h1>
          <p className="text-4xl font-bold my-2 text-white">
            Get in Touch With Us
          </p>
          <p className="text-white">
            We're here to assist you with all your logistics and freight
            forwarding needs. Whether you have a question, need a quote, or
            require support, our team of experts is ready to help.
          </p>
          <div className="sm:flex hidden">
            <div className="py-2 text-white">
              <div className=" flex items-center  text-white  py-2">
                <div className="bg-[#273270] py-3 px-3 rounded-full mr-3">
                  <CiClock1 className=" text-[#F6B426] text-2xl" />
                </div>
                Mon - Sat 9:30 - 06:00 <br></br>Sunday Closed
              </div>
              <div className=" flex items-center  text-white  py-2">
                <div className="bg-[#273270] py-3 px-3 rounded-full mr-3">
                  <CiMail className=" text-[#F6B426] text-2xl" />
                </div>
                Email <br></br>info@omtrans.in
              </div>
              <div className=" flex items-center  text-white  py-2">
                <div className="bg-[#273270] py-3 px-3 rounded-full mr-3">
                  <IoCallOutline className=" text-[#F6B426] text-2xl" />
                </div>
                Call Us<br></br>+91-11-48316700
              </div>
            </div>
          </div>
        </div>
        <div className="sm:pt-12 pt-0">
          <div className="flex">
            <div>
              <label htmlFor="username"></label>
              <input
                className="ring-1 focus:ring-1 w-full placeholder:text-gray-400 placeholder:px-2 placeholder:py-1 py-2 px-2 bg-transparent"
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
                className="ring-1 focus:ring-1 placeholder:text-gray-400 placeholder:px-2  w-full placeholder:py-1 py-2 px-2 bg-transparent"
              />
            </div>
          </div>
          <div className="flex py-8">
            <div>
              <label htmlFor="phoneno"></label>
              <input
                className="w-full ring-1 focus:ring-1 placeholder:text-gray-400 placeholder:px-2 placeholder:py-1 py-2 px-2 bg-transparent"
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
                className="w-full ring-1 focus:ring-1 placeholder:text-gray-400 placeholder:px-2 placeholder:py-1 py-2 px-2 bg-transparent"
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
              className="ring-1 focus:ring-0 w-full placeholder:text-gray-400 placeholder:px-2 placeholder:py-1 h-24 bg-transparent"
            />
          </div>

          <button className=" bg-gray-200 py-3 px-5 hover:scale-110 duration-300 rounded-md">
            Submit Message
          </button>
        </div>
      </div>

      {/* Our Blogs */}

      <div>
        <h1 className="bg-gray-300 border-l-4 border-red-600 my-2 text-center w-36 m-auto ">
          Our Blogs
        </h1>
        <p className="text-4xl font-bold my-4 text-center text-[#1C1F35]">
          Our Latest News
        </p>

        <Blog
          img={Blog1}
          date="11"
          month="November"
          title="Delivering Oxygen concentrators from China to India by air to fight Covid."
          description="During the second wave of Covid in India, OmTrans has successfully imported 250 oxygen concentrators from China to India in time line manner which was a great support in fighting Covid and helped in saving thousands of lives during the pandemic time."
        />

        <Blog
          img={Blog2}
          date="08"
          month="September"
          title="Saving Freight cost by 50%"
          description="With having experience team OmTrans have helped their Exporters in saving 50% freight cost by moving the cargo through Break Bulk to Houston and Baltimore which was really appreciated by the Exporters. OmTrans has successfully delivered 4000 metric tonnes of cargo and monthly moving such volume of cargo to Houston & Baltimore through Break Bulk."
        />

        <Blog
          img={Blog3}
          date="15"
          month="August"
          title="Delivered 150 Tonnes of Medicines during Covid "
          description="We take pride in mentioning that during the first wave of Pandemic, we moved over 50 tons of Covid related medicines to Brazil by Air freight maintained in cold chain temperature. It was a challenging task due to lockdown to handle operations at airport with negligible transportation, ground team."
        />

        <div className=" m-auto text-center py-5">
          <button className=" bg-red-600 py-3 px-5 text-white hover:scale-110 duration-300 rounded-md">
            More Blog
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
