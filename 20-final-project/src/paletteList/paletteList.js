import React from "react";
import { Link, withRouter } from "react-router-dom";
import MiniPalette from "../miniPalette/miniPalette";
import { withStyles } from "@material-ui/styles";
import styles from "./paletteListStyles";

function PalleteList({ classes, history, palettes }) {
  const goToPalette = id => {
    history.push("/palette/" + id);
  };
  return (
    <div className={classes.paletteList}>
      <div className={classes.containter}>
        <nav className={classes.nav}>
          <h1>React Color Picker</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <div className={classes.palettes}>
          {palettes.map(palette => (
            <MiniPalette palette={palette} goToPalette={goToPalette} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(withRouter(PalleteList));
