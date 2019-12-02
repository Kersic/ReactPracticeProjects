import React, { useState, useEffect } from "react";
import { ChromePicker } from "react-color";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { withStyles } from "@material-ui/core/styles";
import styles from './colorPickerFromStyles.js';

function ColorPickerFrom({ classes, colors, addNewColor, paletteIsFull }) {
  const [currentColor, setCurrentColor] = useState("teal");
  const [currentName, setCurrentName] = useState("");

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", value =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule("isColorUnique", value =>
      colors.every(({ color }) => color !== currentColor)
    );
  }, [colors, currentColor]);

  const handleChangeName = evt => {
    setCurrentName(evt.target.value);
  };

  const handleAddColor = () => {
    addNewColor(currentColor, currentName);
    setCurrentName("");
  };

  return (
    <div>
      <ChromePicker
        color={currentColor}
        onChangeComplete={newColor => setCurrentColor(newColor.hex)}
        className={classes.picker}
      />
      <ValidatorForm onSubmit={handleAddColor}>
        <TextValidator
          value={currentName}
          className={classes.colorNameInput}
          placeholder="Color Name"
          name="newColorName"
          variant="filled"
          margin="normal"
          onChange={handleChangeName}
          label="Color Name"
          validators={["required", "isColorNameUnique", "isColorUnique"]}
          errorMessages={[
            "Enter a color name",
            "Color name must be unique",
            "Color already used!"
          ]}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.addColor}
          disabled={paletteIsFull}
          style={{ backgroundColor: currentColor }}
        >
          Add Color
        </Button>
      </ValidatorForm>
    </div>
  );
}

export default withStyles(styles)(ColorPickerFrom);
