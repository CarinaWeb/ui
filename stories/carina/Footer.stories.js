import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Footer } from ".";

export default {
  title: "Carina UI|Footer",
  decorators: [withKnobs],
};

export const footer = () => <Footer />;
