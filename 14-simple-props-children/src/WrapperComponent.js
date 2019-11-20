import React from "react";
import "./WrapperComponent.css";

WrapperComponent.defaultProps = {
  color: "#bdd6ff"
};

function WrapperComponent({ children, color }) {
  return (
    <div style={{ backgroundColor: color }} className="WrapperComponent">
      {children}
    </div>
  );
}

export default WrapperComponent;
