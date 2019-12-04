import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DragableColorBox from "../dragableColorBox/dragableColorBox";
import { withStyles } from "@material-ui/styles";
import styles from "./dragableColorListStyles";

function DragableColorList({ classes, colors, removeColor }) {
  return (
    <div className={classes.dragableColorList}>
      {colors.map((color, i) => (
        <DragableColorBox
          index={i}
          key={color.name}
          color={color}
          removeColor={removeColor}
        />
      ))}
    </div>
  );
}

export default withStyles(styles)(SortableContainer(DragableColorList));
