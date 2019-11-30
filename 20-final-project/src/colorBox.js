import React from "react";
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
  }
});

function ColorBox({ color }) {
  const classes = useStyles();
  return (
    <CopyToClipboard text={color.color}>
      <div className={classes.colorBox} style={{ background: color.color }}>
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
