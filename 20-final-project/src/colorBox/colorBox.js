import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styles from "./colorBoxStyles";

function ColorBox({
  classes,
  color,
  name,
  colorId,
  paletteId,
  singleColorPalette
}) {
  const [showOverlay, setShowOverlay] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowOverlay(false), 1500);
  }, [showOverlay]);

  const changeOverlayState = () => {
    setShowOverlay(true);
  };
  return (
    <CopyToClipboard text={color} onCopy={changeOverlayState}>
      <div className={classes.colorBox} style={{ background: color }}>
        <div
          className={`${classes.copyOverlay} 
          ${showOverlay && classes.copyOverlayShow}`}
          style={{ background: color }}
        />
        <div
          className={`${classes.copyMsg} 
          ${showOverlay && classes.copyMsgShow}`}
        >
          <h1>Copied!</h1>
          <p>{color}</p>
        </div>
        <div className="copyContainer">
          <div className={classes.boxContent}>
            <span>{name}</span>
          </div>
          <button id="copyButton" className={classes.copyButton}>
            Copy
          </button>
        </div>
        {!singleColorPalette && (
          <Link
            to={"/palette/" + paletteId + "/" + colorId}
            onClick={e => e.stopPropagation()}
          >
            <span className={classes.moreButton}>MORE</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}

export default withStyles(styles)(ColorBox);
