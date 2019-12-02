import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import FormPopup from "../formPopup/formPopup";
import styles from './newPaletteFormNavbarStyles';
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";

function NewPaletteFormNavbar({
  classes,
  open,
  palettes,
  handleDrawerOpen,
  handleSavePalette
}) {
  const [formOpen, setFormOpen] = useState(false);

  const showForm = () => {
    setFormOpen(true);
  };

  const hideForm = () => {
    setFormOpen(false);
  };

  return (
    <div className={classes.newPaletteFormNavbar}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar disableGutters={!open}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            //className
            className={classNames(classes.menuButton, {[classes.hide]:open})} //classNames(classes.menuButton, open && classes.hide)
          >
            <AddToPhotosIcon/>
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            Create A Palette
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <Link to="/">
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
            >
              Go Back
            </Button>
          </Link>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={showForm}
          >
            Save Palette
          </Button>
          {formOpen && (
            <FormPopup
              palettes={palettes}
              handleSavePalette={handleSavePalette}
              hideForm={hideForm}
            />
          )}
        </div>
      </AppBar>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(NewPaletteFormNavbar);
