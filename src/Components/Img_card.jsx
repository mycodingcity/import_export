import React from "react";

function Img_card(props) {
  return (
    <div className="py-5 px-3 ">
      <div className="bg-slate-200 text-center w-[320px] h-[470px]">
        <img src={props.img} alt="" className="w-full" />
        <div className=" text-center">
          <p className="text-red-600 font-semibold	py-3 px-2 text-xl">
            {props.title}
          </p>
          <p className=" text-black px-3 py-1">{props.description}</p>
        </div>
        <div className="py-5">
          <a
            class="inline-block rounded bg-[#0c1a69] px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 duration-300"
            href="#"
          >
            Know More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Img_card;
