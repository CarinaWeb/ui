// import { createMuiTheme } from "@material-ui/core/styles";
import COLOR from "./Colors";

export default {
  overrides: {
    MuiButtonGroup: {
      contained: {
        boxShadow: "none",
        "&:active": {
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      label: {
        fontWeight: 600,
        padding: 6,
      },
      contained: {
        boxShadow: "none",
        "&:active": {
          boxShadow: "none",
        },
      },
    },
    MuiChip: {
      root: {
        fontSize: "1rem",
      },
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: "Open Sans, sans-serif",
    h1: {
      fontSize: "4rem",
    },
    h2: {
      fontSize: "3rem",
    },
    h3: {
      fontSize: "2.5rem",
    },
    h4: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.5rem",
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
    },
    subtitle1: {
      fontSize: "0.75rem",
      color: COLOR.GRAY80,
    },
  },
  palette: {
    text: {
      primary: COLOR.BLACK50,
    },
    background: {
      default: COLOR.WHITE,
    },
    primary: {
      main: COLOR.ORANGE,
      contrastText: COLOR.WHITE,
    },
    secondary: {
      main: COLOR.BLUE,
      contrastText: COLOR.WHITE,
    },
  },
};
