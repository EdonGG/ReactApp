import React, { useState } from "react";
import "./Drop.scss";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const Drop = ({ title, paragraph }) => {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <div
      className="drop_wrapper"
      onClick={() => {
        setShowDrop(!showDrop);
      }}
    >
      <div className="title">
        <h1>{title}</h1>
        {showDrop === true ? (
          <MdOutlineKeyboardArrowUp className="icon" />
        ) : (
          <MdOutlineKeyboardArrowDown className="icon" />
        )}
      </div>
      <div
        className="drop"
        style={{
          display: showDrop ? "block" : "none",
        }}
      >
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Drop;
