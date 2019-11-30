import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import ColorBox from "./colorBox";
import Navbar from "./navbar";

const useStyles = createUseStyles({
  palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  paletteColors: {
    height: "100vh"
  },
  paletteFooter: {
    backgroundColor: "white",
    height: "5vh",
    display: "flex",
    justifyContent: "flex-end",
    fontWeight: "bold",
    alignItems: "center",
    fontFamily: "Roboto",
    fontSize: "11px"
  },
  emoji: {
    fontSize: "11px",
    margin: "0 1rem"
  }
});

function Palette({ palette }) {
  const classes = useStyles();
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const changeLevel = newLevel => {
    setLevel(newLevel);
  };

  const changeFormat = newFormat => {
    setFormat(newFormat);
  };

  return (
    <div className={classes.palette}>
      <Navbar
        level={level}
        changeLevel={changeLevel}
        changeFormat={changeFormat}
        format={format}
      />
      <div className={classes.paletteColors}>
        {palette.colors[level].map(color => (
          <ColorBox color={color[format]} name={color.name} key={color.id} />
        ))}
      </div>
      <footer className={classes.paletteFooter}>
        {palette.paletteName}
        <span className={classes.emoji}>{palette.emoji}</span>
      </footer>
    </div>
  );
}

export default Palette;
