import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Card } from ".";

export default {
  title: "Carina UI|Card",
  decorators: [withKnobs],
};

export const card = () => <Card />;
