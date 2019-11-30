import React from "react";
import { Link } from "react-router-dom";

function PalleteList({ palettes }) {
  return (
    <div>
      <h1>React Color Picker</h1>
      {palettes.map(palette => (
        <p>
          <Link to={"/palette/" + palette.id}>{palette.paletteName}</Link>
        </p>
      ))}
    </div>
  );
}

export default PalleteList;
