import sizes from '../screenSizes';

export default {
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
    fontFamily: "verdana",
    [sizes.down("lg")]: {
      width: "25%",
      height:"33.3333%"
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "20%"
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "10%"
    }
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
    textDecoration: "none",
   
  }
};