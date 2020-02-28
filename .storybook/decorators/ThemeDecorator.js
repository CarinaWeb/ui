import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "../../src/styles";

const useStyles = makeStyles(Theme => ({
  root: {
    padding: Theme.spacing(2),
  },
}));

export default storyFn => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <ThemeProvider theme={createMuiTheme(Theme)}>
        <CssBaseline />
        <div className={classes.root}>{storyFn()}</div>
      </ThemeProvider>
    </BrowserRouter>
  );
};
