import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./footerStyles";

function Fotter({ classes, palette }) {
  return (
    <footer className={classes.paletteFooter}>
      {palette.paletteName}
      <span className={classes.emoji}>{palette.emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(Fotter);
