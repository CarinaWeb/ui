import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { IconLabelButtons } from ".";

export default {
  title: "Carina|Button",
  decorators: [withKnobs],
};

export const iconLabelButtons = () => <IconLabelButtons />;
