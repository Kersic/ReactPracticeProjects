import chroma from "chroma-js";
import { TEXT_COLOR_BREAKPOINT } from "../constants";
import sizes from '../screenSizes';
const textColorBrakPoint = TEXT_COLOR_BREAKPOINT;

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
      transform: "scale(1.1)"
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
        paddingRight: "5px"
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
      paddingLeft: "5px",
      height: "100%",
      alignItems: "center"
    },
     color: props =>
      chroma(props.color.color).luminance() <= textColorBrakPoint
        ? "white"
        : "rgba(0,0,0,0.7)",
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

export default styles;
