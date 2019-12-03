import { DRAWER_WIDTH } from "../constants";
import sizes from '../screenSizes';

const styles = theme => ({
  newPaletteFormNavbar: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px"
  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  navBtns: {
    marginRight: "1rem",
    "& a": {
      textDecoration: "none"
    },
     [sizes.down("xs")]: {
      marginRight: "0.5rem"
    }
  },
  button: {
    margin: "0 0.5rem",
    "& a": {
      textDecoration: "none"
    },
     [sizes.down("xs")]: {
      margin: "0 0.2rem",
      padding: "0.3rem"
    }
  },
  navbarTItle: {
    [sizes.down("xs")]: {
      display: 'none'
    }
  }
});

export default styles;