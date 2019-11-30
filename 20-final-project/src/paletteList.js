import React from "react";
import { Link, withRouter } from "react-router-dom";
import MiniPalette from "./miniPalette";
import { withStyles } from "@material-ui/styles";

const styles = {
  paletteList: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "blue"
    /* background by SVGBackgrounds.com */
    // backgroundColor: "#394bad",
    // backgroundImage: `url(${bg})`,
    // overflow: "scroll"
  },
  heading: {
    fontSize: "2rem"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& a": {
      color: "white"
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem"
  }
};

function PalleteList({ classes, history, palettes }) {
  const goToPalette = id => {
    history.push("/palette/" + id);
  };
  return (
    <div className={classes.paletteList}>
      <div className={classes.containter}>
        <nav className={classes.nav}>
          <h1>React Color Picker</h1>
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
