import React from "react";
import { text, radios } from "@storybook/addon-knobs";
import { IconButton } from "../../src/core";
import Trash from "../../src/icons/Trash";
import { useStyles } from "./style";

export default function IconLabelButtons() {
  const classes = useStyles();
  const directionValue = radios(
    "Direction",
    ["row", "column", "column-reverse", "row-reverse"],
    "column"
  );
  const labelValue = text("Label value", "Delete");
  // const color = select(
  //   "Color",
  //   ["default", "primary", "secondary", "action", "error"],
  //   "primary"
  // );

  return (
    <div className={classes.root}>
      <IconButton icon={Trash} direction={directionValue}>
        {labelValue}
      </IconButton>
    </div>
  );
}
