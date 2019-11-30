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
  },
  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-track": {
      backgroundColor: "transparent"
    },
    "& .rc-slider-rail": {
      height: "8px"
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle:hover": {
      backgroundColor: "green",
      outline: "none",
      border: "2px solid green",
      boxShadow: "none",
      width: "13px",
      height: "13px",
      marginLeft: "-7px",
      marginTop: "-3px"
    }
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
      <div className={classes.slider}>
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={changeLevel}
        />
      </div>

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
