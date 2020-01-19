import React from "react";

const Display = ({ display }) => {
  const btnStyle = {
    textAlign: "center",
    display: "block",
    padding: "1rem",
    background: "grey",
    height: "3rem",
    width: "17rem"
  };

  return (
    <div id="display">
      {display ? <h1 style={btnStyle}>{display}</h1> : null}
    </div>
  );
};

export default Display;
