import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { DataTable } from ".";

export default {
  title: "Carina UI|DataTable",
  decorators: [withKnobs],
};

export const dataTable = () => <DataTable />;
