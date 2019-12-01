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
import styles from "./navbarStyles";

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
