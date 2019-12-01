import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import ColorBox from "./colorBox";
import Navbar from "./navbar";
import Fotter from "./fotter";

const styles = {
  palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  paletteColors: {
    height: "100vh"
  },
  colorBox: {
    width: "20%",
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-3.5px",
    fontFamily: "verdana"
  },
  goBack: {
    backgroundColor: "black"
  },
  backButton: {
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    border: "none",
    background: "rgba(255,255,255,0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    color: "white",
    textTransform: "uppercase",
    textDecoration: "none"
  }
};

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
      <Fotter palette={palette} />
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
