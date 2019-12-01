import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import ColorBox from "../colorBox/colorBox";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import styles from "./paletteStyles";

function SingleColorPalette({ classes, palette, colorId }) {
  const [shades, setShades] = useState(gatherShades(palette, colorId));
  const [format, setFormat] = useState("hex");

  const changeFormat = newFormat => {
    setFormat(newFormat);
  };

  return (
    <div className={classes.palette}>
      <Navbar format={format} changeFormat={changeFormat} />
      <div className={classes.paletteColors}>
        {shades.map(color => (
          <ColorBox
            color={color[format]}
            key={color.name}
            name={color.name}
            singleColorPalette={true}
          />
        ))}
        <div className={`${classes.goBack} ${classes.colorBox}`}>
          <Link to={"/palette/" + palette.id} className={classes.backButton}>
            Go Back
          </Link>
        </div>
      </div>
      <Footer palette={palette} />
    </div>
  );
}

const gatherShades = (palette, colorId) => {
  let allShades = [];
  let allColors = palette.colors;
  for (let key in allColors) {
    allShades = allShades.concat(
      allColors[key].filter(color => color.id === colorId)
    );
  }
  return allShades.slice(1);
};

export default withStyles(styles)(SingleColorPalette);
