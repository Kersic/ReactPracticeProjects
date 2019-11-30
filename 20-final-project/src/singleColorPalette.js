import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import ColorBox from "./colorBox";

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

  return (
    <div className={classes.paletteColors}>
      <div className={classes.paletteColors}>
        {shades.map(color => (
          <ColorBox
            color={color.hex}
            key={color.id}
            name={color.name}
            showLink={false}
          />
        ))}
      </div>
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
  return allShades;
};

export default withStyles(styles)(SingleColorPalette);
