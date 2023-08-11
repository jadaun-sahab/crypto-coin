import React from "react";
import "../style/why.css";
import img from "../img/img7.png";

export default function Whychoose() {
  return (
    <div className="why">
      <div id="maincontainer">
        <div className="childcontainer">
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
        </div>
        <div className="childcontainer">
          <img src={img} alt="" />;
        </div>
        <div className="childcontainer">
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
        </div>
      </div>
    </div>
  );
}
