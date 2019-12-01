import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  miniPalette: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover svg": {
      opacity: 1
    }
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative"
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem"
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px"
  }
};

function MiniPalette({ classes, palette, goToPalette }) {
  return (
    <div
      className={classes.miniPalette}
      onClick={() => goToPalette(palette.id)}
    >
      <div className={classes.colors}>
        {palette.colors.map(color => (
          <div
            className={classes.miniColor}
            style={{ backgroundColor: color.color }}
            key={color.name}
          />
        ))}
      </div>
      <div className={classes.title}>
        {palette.paletteName}
        <span className={classes.emoji}>{palette.emoji}</span>
      </div>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);