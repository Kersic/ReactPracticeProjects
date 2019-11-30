import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import "rc-slider/assets/index.css";

const styles = {
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
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem"
  }
};

function Navbar({ classes, level, changeLevel, changeFormat, format }) {
  const [alertOpen, setAlertOpen] = useState(false);

  const handleChange = e => {
    changeFormat(e.target.value);
    setAlertOpen(true);
  };
  const closeSnackbar = () => {
    setAlertOpen(false);
  };
  return (
    <header className={classes.navbar}>
      <div className={classes.logo}>
        <Link to="/">ReactColorPicker</Link>
      </div>
      {level && (
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
      )}

      <div className={classes.selectContainer}>
        <Select value={format} onChange={handleChange}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255, 255, 255 1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={alertOpen}
        autoHideDuration={3000}
        message={
          <span id="messageId">Format Changed To {format.toUpperCase()}</span>
        }
        ContentProps={{
          "aria-describedby": "messageId"
        }}
        onClose={closeSnackbar}
        action={[
          <IconButton
            onClick={closeSnackbar}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </header>
  );
}

export default withStyles(styles)(Navbar);
