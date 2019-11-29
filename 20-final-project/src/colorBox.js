import React from "react";

function ColorBox({ color }) {
  const style = {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer"
  };
  return (
    <div className="ColorBox" style={{ ...style, background: color.color }}>
      <span>{color.name}</span>
    </div>
  );
}

export default ColorBox;
