import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import ColorBox from "./colorBox";
import Navbar from "./navbar";
import Fotter from "./fotter";

const styles = {
  palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  paletteColors: {
    height: "100vh"
  }
};

function SingleColorPalette({ classes, palette, colorId }) {
  const [shades, setShades] = useState(gatherShades(palette, colorId));
  const [format, setFormat] = useState("hex");

  const changeFormat = newFormat => {
    setFormat(newFormat);
  };

  return (
    <div className={classes.palette}>
      <Navbar format={format} changeFormat={changeFormat} />
      <div className={classes.paletteColors}>
        {shades.map(color => (
          <ColorBox
            color={color[format]}
            key={color.id}
            name={color.name}
            showLink={false}
          />
        ))}
      </div>
      <Fotter palette={palette} />
    </div>
  );
}

const gatherShades = (palette, colorId) => {
  let allShades = [];
  let allColors = palette.colors;
  for (let key in allColors) {
    allShades = allShades.concat(
      allColors[key].filter(color => color.id === colorId)
    );
  }
  return allShades.slice(1);
};

export default withStyles(styles)(SingleColorPalette);
