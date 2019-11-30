import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import ColorBox from "./colorBox";
import Navbar from "./navbar";

const useStyles = createUseStyles({
  palette: {
    height: "100vh"
  },
  paletteColors: {
    height: "100vh"
  }
});

function Palette({ palette }) {
  const classes = useStyles();
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
          <ColorBox fr color={color[format]} name={color.name} />
        ))}
      </div>
      {/* footer */}
    </div>
  );
}

export default Palette;
