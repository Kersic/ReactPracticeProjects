import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DragableColorBox from "../dragableColorBox/dragableColorBox";

function DragableColorList({ colors, removeColor }) {
  return (
    <div style={{ height: "100%" }}>
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

export default SortableContainer(DragableColorList);
