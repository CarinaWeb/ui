import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { IconLabelButtons } from ".";

export default {
  title: "Carina UI|IconButton",
  decorators: [withKnobs],
};

export const iconButton = () => <IconLabelButtons />;
