import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";

const styles = {
  dragableColorBox: {
    width: "20%",
    height: props => (props.singleColorPalette ? "50%" : "25%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    fontFamily: "verdana",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.1)"
    }
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "rgba(0,0,0,0.5)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between"
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out"
  }
};

function DragableColorBox({ classes, color, removeColor }) {
  const handleClick = () => {
    removeColor(color.name);
  };
  return (
    <div
      className={classes.dragableColorBox}
      style={{ backgroundColor: color.color }}
    >
      <div className={classes.boxContent}>
        <span>{color.name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
      </div>
    </div>
  );
}

export default withStyles(styles)(SortableElement(DragableColorBox));
