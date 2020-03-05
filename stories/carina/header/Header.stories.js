import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Header } from ".";

export default {
  title: "Carina UI|Header",
  decorators: [withKnobs],
};

export const header = () => <Header />;
