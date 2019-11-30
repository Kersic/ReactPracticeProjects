import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "rc-slider/assets/index.css";

const useStyles = createUseStyles({
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh",
    fontFamily: "Roboto"
  },
  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "15px",
    backgroundColor: "#eceff1",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "black"
    }
  },
  sliderContainer: {},
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

function Navbar({ level, changeLevel, changeFormat, format }) {
  const classes = useStyles();
  const handleChange = e => {
    changeFormat(e.target.value);
  };
  return (
    <header className={classes.navbar}>
      <div className={classes.logo}>
        <a href="/">ReactColorPicker</a>
      </div>
      <div className={classes.sliderContainer}>
        <span>Level: {level}</span>
        <div className={classes.slider}>
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={changeLevel}
          />
        </div>
      </div>
      <div className={classes.selectContainer}>
        <Select value={format} onChange={handleChange}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255, 255, 255 1.0)</MenuItem>
        </Select>
      </div>
    </header>
  );
}

export default Navbar;
