import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Theme } from "../../src";

const useStyles = makeStyles(Theme => ({
  root: {
    padding: Theme.spacing(2),
  },
}));

export default storyFn => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <div className={classes.root}>{storyFn()}</div>
    </ThemeProvider>
  );
};
