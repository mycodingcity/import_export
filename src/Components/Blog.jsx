import React from "react";
import Calender from "../assets/calender.svg";

function Blog(props) {
  return (
    <div className="flex flex-col sm:flex-row sm:w-[1000px] m-auto justify-evenly  py-8 px-2 border-t-2 border-gray-300">
      <div className=" ">
        <img src={props.img} alt="" />
      </div>
      <div className="text-center">
        <img src={Calender} alt="" className="m-auto" />
        <p className="text-4xl font-bold	leading-none	py-2">
          {props.date}<p className="font-normal text-xl">{props.month}</p>
        </p>
      </div>
      <div className="sm:w-1/3 border-l-2 border-gray-300 pl-5">
        <p className="text-2xl font-semibold ">{props.title}</p>
        <p className="text-xl py-2">{props.description}</p>
        <ul className="list-disc pl-8">
          <li>Urgent transport solutions</li>
          <li>Reliable & experienced staffs</li>
          <li>Urgent transport solutions</li>
          <li>Reliable & experienced staffs</li>
        </ul>
      </div>
    </div>
  );
}

export default Blog;
