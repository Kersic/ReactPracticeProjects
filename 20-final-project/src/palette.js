import React, { useState } from "react";
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

function Palette({ classes, palette }) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const changeLevel = newLevel => {
    setLevel(newLevel);
  };

  const changeFormat = newFormat => {
    setFormat(newFormat);
  };

  return (
    <div className={classes.palette}>
      <Navbar
        level={level}
        changeLevel={changeLevel}
        changeFormat={changeFormat}
        format={format}
      />
      <div className={classes.paletteColors}>
        {palette.colors[level].map(color => (
          <ColorBox
            color={color[format]}
            name={color.name}
            key={color.id}
            colorId={color.id}
            paletteId={palette.id}
            singleColorPalette={false}
          />
        ))}
      </div>
      <Fotter palette={palette} />
    </div>
  );
}

export default withStyles(styles)(Palette);
