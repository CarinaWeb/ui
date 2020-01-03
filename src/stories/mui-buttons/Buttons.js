import React from "react";
import { radios } from "@storybook/addon-knobs";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Buttons() {
  const classes = useStyles();
  const variant = radios(
    "Style Variant",
    ["text", "contained", "outlined"],
    "contained"
  );
  const size = radios("Size", ["small", "medium", "large"], "medium");

  return (
    <div className={classes.root}>
      <Button size={size}>Default</Button>
      <Button variant={variant} color="primary" size={size}>
        Primary
      </Button>
      <Button variant={variant} color="secondary" size={size}>
        Secondary
      </Button>
      <Button variant={variant} disabled size={size}>
        Disabled
      </Button>
    </div>
  );
}
