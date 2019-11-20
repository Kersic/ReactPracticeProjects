import React from "react";
import { Link } from "react-router-dom";

function SubPage1() {
  return (
    <div className="SubPage1">
      <p>SubPage1</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default SubPage1;
