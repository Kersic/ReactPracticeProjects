import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  dragableColorBox: {
    width: "20%",
    height: props => (props.singleColorPalette ? "50%" : "25%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    fontFamily: "verdana"
  }
};

function DragableColorBox({ classes, color }) {
  return (
    <div
      className={classes.dragableColorBox}
      style={{ backgroundColor: color.color }}
    >
      {color.name}
    </div>
  );
}

export default withStyles(styles)(DragableColorBox);
