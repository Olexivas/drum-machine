import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

const Logo = () => {
  return (
    <div id="logo">
      <p className="text">FCC</p>
      <FontAwesomeIcon icon={faFreeCodeCamp} />
    </div>
  );
};

export default Logo;
