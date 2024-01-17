/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import svgFleche from "../assets/images/arrow.svg";

const Collapsis = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`colapsis ${isVisible ? "visible" : ""}`}>
      <div className="headColapsis" onClick={handleToggle}>
        <h3>{props.title}</h3>
        <img
          src={svgFleche}
          alt="flèche"
          className={`arrow ${isVisible ? "down" : ""}`}
        />
      </div>
      <div className={`paragraph ${isVisible ? "animate" : ""}`}>
        {props.children}
      </div>
    </div>
  );
};

export default Collapsis;
