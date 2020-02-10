import React from "react";
import { text, radios } from "@storybook/addon-knobs";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "../../src/core";
import Trash from "../../src/icons/Trash";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();
  const positionValue = radios(
    "Label position",
    ["top", "bottom", "left", "right"],
    "bottom"
  );
  const labelValue = text("Label value", "Delete");
  // const color = select(
  //   "Color",
  //   ["default", "primary", "secondary", "action", "error"],
  //   "primary"
  // );

  return (
    <div className={classes.root}>
      <IconButton icon={Trash} placement={positionValue}>
        {labelValue}
      </IconButton>
    </div>
  );
}
