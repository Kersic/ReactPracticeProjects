import React from "react";
import ColorBox from "./colorBox";

function Palette({ palette }) {
  const classes = {
    palette: {
      height: "100vh"
    },
    paletteColors: {
      height: "100vh"
    }
  };
  return (
    <div className="palette" style={classes.palette}>
      {/* navbar */}
      <div className="paletteColors" style={classes.paletteColors}>
        {palette.colors.map(color => (
          <ColorBox color={color} />
        ))}
      </div>
      {/* footer */}
    </div>
  );
}

export default Palette;