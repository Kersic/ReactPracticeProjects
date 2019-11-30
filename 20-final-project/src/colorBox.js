import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { CopyToClipboard } from "react-copy-to-clipboard";

const useStyles = createUseStyles({
  colorBox: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    "&:hover #copyButton": {
      opacity: "1",
      transition: "0.5s"
    },
    marginBottom: "-3.5px",
    fontFamily: "verdana"
  },
  copyButton: {
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    border: "none",
    background: "rgba(255,255,255,0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    color: "white",
    textTransform: "uppercase",
    opacity: "0",
    "&:hover": {
      opacity: "1"
    }
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px"
  },
  moreButton: {
    background: "rgba(255,255,255,0.3)",
    border: "none",
    position: "absolute",
    right: "0px",
    bottom: "0px",
    color: "white",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px"
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s ease-in-out"
  },
  copyOverlayShow: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "5",
    position: "absolute"
  },
  copyMsg: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "2rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "white",
    "& h1": {
      fontWeight: "400",
      background: "rgba(255, 255, 255, 0.2)",
      width: "100%",
      textAlign: "center",
      marginBottom: "0",
      padding: "1rem",
      textTransform: "uppercase"
      // [sizes.down("xs")]: {
      //   fontSize: "6rem"
      // }
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "100"
    }
  },
  copyMsgShow: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s"
  }
});

function ColorBox({ color }) {
  const classes = useStyles();
  const [showOverlay, setShowOverlay] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowOverlay(false), 1500);
  }, [showOverlay]);

  const changeOverlayState = () => {
    setShowOverlay(true);
  };
  return (
    <CopyToClipboard text={color.color} onCopy={changeOverlayState}>
      <div className={classes.colorBox} style={{ background: color.color }}>
        <div
          className={`${classes.copyOverlay} ${showOverlay &&
            classes.copyOverlayShow}`}
          style={{ background: color.color }}
        />
        <div
          className={`${classes.copyMsg} ${showOverlay && classes.copyMsgShow}`}
        >
          <h1>Copied!</h1>
          <p>{color.color}</p>
        </div>
        <div className="copyContainer">
          <div className={classes.boxContent}>
            <span>{color.name}</span>
          </div>
          <button id="copyButton" className={classes.copyButton}>
            Copy
          </button>
        </div>
        <span className={classes.moreButton}>MORE</span>
      </div>
    </CopyToClipboard>
  );
}

export default ColorBox;
