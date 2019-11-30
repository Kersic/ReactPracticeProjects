import React, { useState } from "react";
import ColorBox from "./colorBox";
import { createUseStyles } from "react-jss";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

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

  const changeLevel = newLevel => {
    setLevel(newLevel);
  };

  return (
    <div className={classes.palette}>
      {/* navbar */}
      <Slider
        defaultValue={level}
        min={100}
        max={900}
        step={100}
        onAfterChange={changeLevel}
      />
      <div className={classes.paletteColors}>
        {palette.colors[level].map(color => (
          <ColorBox color={color.hex} name={color.name} />
        ))}
      </div>
      {/* footer */}
    </div>
  );
}

export default Palette;
