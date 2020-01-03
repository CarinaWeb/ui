import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import {
  Buttons,
  ButtonSizes,
  FloatingActionButtons,
  GroupedButtons,
  IconButtons,
  IconLabelButtons,
  SplitButton,
} from "./";

export default {
  title: "MUI|Button",
  decorators: [withKnobs],
};

export const buttons = () => <Buttons />;

export const splitButton = () => <SplitButton />;

export const groupedButtons = () => <GroupedButtons />;

export const buttonSizes = () => <ButtonSizes />;

export const floatingActionButtons = () => <FloatingActionButtons />;

export const iconButtons = () => <IconButtons />;

export const iconLabelButtons = () => <IconLabelButtons />;
