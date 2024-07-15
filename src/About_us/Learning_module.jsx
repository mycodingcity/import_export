import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaDownload } from "react-icons/fa";
import TrackingForm from "../Components/TrackingForm";
import BgImg from "../assets/Learning_img.jpg";

function LearningProcess() {
  return (
    <div>
      <Navbar />
      <div
        className="bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${BgImg})`}}
      >
        <div className="flex sm:flex-row flex-col items-center justify-around sm:pt-24 pt-4 sm:pb-24 m-auto pb-10 w-[90%]">
          <div className="sm:w-3/5	w-full py-6">
            <p className="text-white sm:text-lg text-sm">OmTrans</p>
            <h1 className="text-white sm:text-[3.4vw] font-bold  leading-none text-4xl">
              Learning Module
            </h1>
          </div>
          <div className="sm:w-2/5">
            <TrackingForm />
          </div>
        </div>
      </div>

      <div className="flex-row md:flex-wrap sm:flex-wrap sm:flex justify-evenly items-center py-10">
        <div className=" bg-slate-200 w-[400px] sm:w-[560px] text-center rounded-md my-3">
          <iframe
            className="w-[400px] sm:w-[560px] m-auto"
            height="315"
            src="https://www.youtube.com/embed/vJBDLcCv1G8?si=LvjR5fNGWgWFCi8A"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <h1 className="text-2xl font-semibold py-3 ">
            Import and Export Documentation<br />
             Training Module <b>Basic Level</b> 
          </h1>
          <div className="pb-10 pt-2 m-auto text-center ">
            <a
              class="inline-block rounded bg-[#0c1a69] px-8 py-3 text-base font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 duration-300"
              href="#"
            >
              <div className="flex items-center ">
                <FaDownload className="mr-4" /> Download Your Notes
              </div>
            </a>
          </div>
        </div>
        <div className=" bg-slate-200 w-[400px] sm:w-[560px]  text-center rounded-md my-3">
          <iframe
            className="w-[400px] sm:w-[560px] m-auto"
            height="315"
            src="https://www.youtube.com/embed/wE9JV5TEq74?si=svQ9LVOwtzrzvCDo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <h1 className="text-2xl font-semibold py-3">
            Export Documentation Training Module <br /> <b>Advanced Level</b>
          </h1>
          <div className="pb-10 pt-2 m-auto text-center">
            <a
              class="inline-block rounded bg-[#0c1a69] px-8 py-3 text-base font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 duration-300"
              href="#"
            >
              <div className="flex items-center ">
                <FaDownload className="mr-4" /> Download Your Notes
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LearningProcess;
