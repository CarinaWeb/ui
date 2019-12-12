import { createMuiTheme } from "@material-ui/core/styles";
import { COLOR } from "../constants/colors";

let theme = createMuiTheme({
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
    },
    h5: {
      fontSize: "1.5rem",
    },
    h6: {
      fontSize: "1.25rem",
    },
    body1: {
      fontSize: "1rem",
    },
  },
  palette: {
    primary: {
      main: COLOR.ORANGE,
      contrastText: COLOR.WHITE,
    },
    secondary: {
      main: COLOR.BLUE,
      contrastText: COLOR.WHITE,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiButton: {
      label: {
        textTransform: "uppercase",
        fontWeight: "600",
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
};

export default theme;
