import React from "react";
import { text, radios } from "@storybook/addon-knobs";
import { IconButton } from "../../../dist/core";
import Trash from "../../../dist/icons/Trash";

export default function IconLabelButtons() {
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
    <IconButton icon={Trash} direction={directionValue}>
      {labelValue}
    </IconButton>
  );
}
