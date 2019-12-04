import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";
import styles from "./dragableColorBoxStyles";

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
