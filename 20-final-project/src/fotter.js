import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  paletteFooter: {
    backgroundColor: "white",
    height: "5vh",
    display: "flex",
    justifyContent: "flex-end",
    fontWeight: "bold",
    alignItems: "center",
    fontFamily: "Roboto",
    fontSize: "11px"
  },
  emoji: {
    fontSize: "11px",
    margin: "0 1rem"
  }
};

function Fotter({ classes, palette }) {
  return (
    <footer className={classes.paletteFooter}>
      {palette.paletteName}
      <span className={classes.emoji}>{palette.emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(Fotter);
