import React, { useRef, useState } from "react";
import Star from "../assets/Star.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Blue_Arrow from "../assets/arrow1.svg";
import Yellow_Arrow from "../assets/arrow2.svg";
import User_1 from "../assets/User1.png";
import Quote from "../assets/quote.svg";

function Testimonials(props) {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    autoplay: true,
  };

  return (
    <>
      <div className="flex items-center justify-between py-5 sm:w-[1000px] m-auto px-4 sm:px-0">
        <div>
          <h1 className="bg-[#F4F4F4] border-l-4 border-yellow-500 pl-2 w-28">
            Testimonial
          </h1>
          <p className="text-2xl font-bold">What Our Customer Say</p>
        </div>
        <div className="flex">
          <img
            src={Yellow_Arrow}
            alt=""
            className="cursor-pointer hover:scale-110 duration-300 rounded-md"
            onClick={previous}
          />{" "}
          <img
            src={Blue_Arrow}
            alt=""
            className="cursor-pointer hover:scale-110 duration-300 rounded-md"
            onClick={next}
          />
        </div>
      </div>

      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <div className="bg-[#F4F4F4] py-6 px-10 ">
          <div className="flex justify-evenly py-4">
            <div className="flex items-center">
              <img src={User_1} alt="" />
              <p className="text-2xl font-medium px-4 leading-none">
                Rakesh Singh1
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

        <div className="bg-[#091242] py-6 px-10 flex-wrap text-white">
          <div className="flex justify-evenly py-4">
            <div className="flex items-center">
              <img src={User_1} alt="" />
              <p className="text-2xl font-medium px-4 leading-none">
                Rakesh Singh2
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

        <div className="bg-[#F4F4F4] py-6 px-10 ">
          <div className="flex justify-evenly py-4">
            <div className="flex items-center">
              <img src={User_1} alt="" />
              <p className="text-2xl font-medium px-4 leading-none">
                Rakesh Singh3
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

        <div className="bg-[#091242] py-6 px-10 flex-wrap text-white">
          <div className="flex justify-evenly py-4">
            <div className="flex items-center">
              <img src={User_1} alt="" />
              <p className="text-2xl font-medium px-4 leading-none">
                Rakesh Singh4
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
      </Slider>
    </>
  );
}
export default Testimonials;
