import React from "react";
import ColorBox from "./colorBox";

function Palette({ palette }) {
  const style = {
    palette: {
      height: "100vh"
    },
    paletteColors: {
      height: "100vh"
    }
  };
  return (
    <div className="Palette" style={style.palette}>
      {/* navbar */}
      <div className="PaletteColors" style={style.paletteColors}>
        {palette.colors.map(color => (
          <ColorBox color={color} />
        ))}
      </div>
      {/* footer */}
    </div>
  );
}

export default Palette;
