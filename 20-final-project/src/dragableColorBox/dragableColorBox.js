import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";

import sizes from "../screenSizes";
const styles = {
  dragableColorBox: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    fontFamily: "verdana",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.1)",
    },
     [sizes.down("lg")]: {
      width: "25%",
      height: "20%"
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%"
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: "5%",
      "& svg": {
        paddingRight: "5px",
      }
    }
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    [sizes.down("sm")]: {
      padding: "0px",
      paddingLeft: '5px',
      height: "100%",
      alignItems: "center",
    },
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
