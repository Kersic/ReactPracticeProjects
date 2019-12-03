import React, {useState} from "react";
import { Link, withRouter } from "react-router-dom";
import MiniPalette from "../miniPalette/miniPalette";
import { withStyles } from "@material-ui/styles";
import styles from "./paletteListStyles";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import DialogTitle from "@material-ui/core/DialogTitle";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

function PalleteList({ classes, history, palettes, removePalette }) {
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [deletingPallete, setDeletingPalette] = useState("");
  const goToPalette = id => {
    history.push("/palette/" + id);
  };
  const closeDialog = () => {
     setDeletingPalette("");
    setShowDeleteForm(false);
  }
  const openDialog = paletteName => {
    setDeletingPalette(paletteName)
    setShowDeleteForm(true);
  }
  const handleDelete = () => {
    removePalette(deletingPallete);
    setShowDeleteForm(false);
  }
  return (
    <div className={classes.paletteList}>
      <div className={classes.containter}>
        <nav className={classes.nav}>
          <h1 className={classes.heading}>React Color Picker</h1>
          <Link to="/palette/new">Create Palette</Link>
        </nav>
        <TransitionGroup className={classes.palettes}>
          {palettes.map(palette => (
            <CSSTransition key={palette.id} classNames='fade' timeout={500}>
            <MiniPalette 
              palette={palette}
              goToPalette={goToPalette} 
              openDialog={openDialog}
             />
             </CSSTransition>
          ))}
        </TransitionGroup>
        <Dialog
          open={showDeleteForm}
          aria-labelledby='delete-dialog-title'
          onClose={closeDialog}
        >
          <DialogTitle id='delete-dialog-title'>
            Delete Palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={handleDelete}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Delete' />
            </ListItem>
            <ListItem button onClick={closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Cancel' />
            </ListItem>
          </List>
        </Dialog>
      </div>
    </div>
  );
}

export default withStyles(styles)(withRouter(PalleteList));
