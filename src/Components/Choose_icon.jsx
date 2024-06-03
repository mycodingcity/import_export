import React from "react";


function Choose_icon(props) {
  return (
    <div className="flex  items-center gap-2 pb-3">
      <img src={props.icon} alt="" />
      <span className="text-xl  items-center">{props.title}</span>
    </div>
  );
}

export default Choose_icon;
