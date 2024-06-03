import React from "react";

function Img_card(props) {
  return (
    <div className="relative">
      <img src={props.img} alt="" />
      <div className="absolute left-8 top-[300px] text-left ">
        <p className="text-white font-bold text-xl">{props.title}</p>
        <span className="text-base text-[#FFB629] font-medium">
         {props.description}
        </span>
      </div>
    </div>
  );
}

export default Img_card;
