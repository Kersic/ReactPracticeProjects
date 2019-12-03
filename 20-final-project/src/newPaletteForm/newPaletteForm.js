import React, { useState } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import styles from "./newPaletteFormStyles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import DragableColorList from "../dragableColorList/dragableColorList";
import { arrayMove } from "react-sortable-hoc";
import { withRouter } from "react-router-dom";
import NewPaletteFormNavbar from "../newPaletteFormNavbar/newPaletteFormNavbar";
import ColorPickerFrom from "../colorPickerForm/colorPickerForm";

NewPaletteForm.defaultProps = {
  maxColors: 20
};

function NewPaletteForm({
  classes,
  history,
  savePalette,
  palettes,
  maxColors
}) {
  const [open, setOpen] = useState(true);
  const [colors, setColors] = useState(palettes[0].colors);
  const paletteIsFull = colors.length >= maxColors;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = (currentColor, currentName) => {
    const newColor = {
      color: currentColor,
      name: currentName
    };
    setColors([...colors, newColor]);
  };

  const handleSavePalette = newPalette => {
    newPalette.id = newPalette.paletteName.toLocaleLowerCase().replace(/ /g, "-")
    newPalette.colors = colors;
    savePalette(newPalette);
    history.push("/");
  };

  const removeColor = name => {
    setColors(colors.filter(color => color.name !== name));
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  const clearColors = () => {
    setColors([]);
  };

  const addRandomColor = () => {
    const allColors = palettes.map(p => p.colors).flat();
    const rand = Math.floor(Math.random() * allColors.length);
    setColors([...colors, allColors[rand]]);
  };

  return (
    <div className={classes.root}>
      <NewPaletteFormNavbar
        open={open}
        palettes={palettes}
        handleDrawerOpen={handleDrawerOpen}
        handleSavePalette={handleSavePalette}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <div className={classes.container}>
          <Typography variant="h4" gutterBottom>
            Design Your Palette
          </Typography>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="secondary"
              onClick={clearColors}
              className={classes.button}
            >
              Clear Palette
            </Button>
            <Button
              disabled={paletteIsFull}
              variant="contained"
              color="primary"
              onClick={addRandomColor}
              className={classes.button}
            >
              Random Color
            </Button>
          </div>
          <ColorPickerFrom
            colors={colors}
            addNewColor={addNewColor}
            paletteIsFull={paletteIsFull}
          />
        </div>
      </Drawer>
      <main
        className={classNames(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <DragableColorList
          axis="xy"
          colors={colors}
          removeColor={removeColor}
          onSortEnd={onSortEnd}
        />
      </main>
    </div>
  );
}
export default withStyles(styles, { withTheme: true })(
  withRouter(NewPaletteForm)
);
