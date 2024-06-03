import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram  } from "react-icons/fa";

function Experts(props) {
  return (
    <div>
      <img src={props.img} alt="" />
      <div className="h-24 bg-blue-950 text-white w-[364px] py-6 absolute">
        <p className="font-bold text-2xl  px-6">{props.name}</p>
        <span className="text-base px-6">{props.title}</span>
      </div>
      <div className="bg-[#FFB629] w-[180px] h-14 relative left-[184px] py-1 -top-8 px-2 flex justify-evenly items-center">
        <FaFacebook className="text-4xl py-1 text-[#1C1F35] hover:scale-110 duration-300" />
        <FaLinkedin className="text-4xl py-1 text-[#1C1F35] hover:scale-110 duration-300" />
        <FaInstagram  className="text-4xl py-1 text-[#1C1F35] hover:scale-110 duration-300" />
      </div>
    </div>
  );
}

export default Experts;
