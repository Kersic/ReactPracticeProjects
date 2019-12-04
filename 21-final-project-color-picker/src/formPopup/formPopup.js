import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

function FormPopup({ palettes, handleSavePalette, hideForm }) {
  const [newPaletteName, setNewPaletteName] = useState("");
  const [stage, setStage] = useState("form");

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }, [palettes]);

  const showEmojiPicker = () => {
    setStage('emoji');
  }
  
  const handleEmojiSelect = (emoji) => {
    const newPalette = {
      paletteName: newPaletteName,
      emoji:emoji.native
    }
    setStage('');
    handleSavePalette(newPalette)
  }

  return (
    <div>
      <Dialog open={stage === "emoji"}  onClose={hideForm}>
      <DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
        <Picker onSelect={handleEmojiSelect} />
      </Dialog>
      <Dialog
        open={stage === "form"}
        onClose={hideForm}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter a name for your new palette.
          </DialogContentText>
          <ValidatorForm onSubmit={showEmojiPicker}>
            <TextValidator
              value={newPaletteName}
              fullWidth
              margin="normal"
              validators={["required", "isPaletteNameUnique"]}
              errorMessages={[
                "Enter Palette name",
                "Palette name already used"
              ]}
              onChange={evt => setNewPaletteName(evt.target.value)}
            />
            <DialogActions>
              <Button onClick={hideForm} color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Save
              </Button>
            </DialogActions>
          </ValidatorForm>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default FormPopup;
