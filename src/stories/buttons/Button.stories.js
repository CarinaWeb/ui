import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import {
  ButtonSizes,
  ContainedButtons,
  FloatingActionButtons,
  GroupedButtons,
  IconButtons,
  IconLabelButtons,
  OutlinedButtons,
  SplitButton,
  TextButtons,
  AltIconLabelButtons,
} from "./";

export default {
  title: "Button",
  decorators: [withKnobs],
};

export const containedButtons = () => <ContainedButtons />;

export const outlinedButtons = () => <OutlinedButtons />;

export const textButtons = () => <TextButtons />;

export const splitButton = () => <SplitButton />;

export const groupedButtons = () => <GroupedButtons />;

export const buttonSizes = () => <ButtonSizes />;

export const floatingActionButtons = () => <FloatingActionButtons />;

export const iconButtons = () => <IconButtons />;

export const iconLabelButtons = () => <IconLabelButtons />;

export const altIconLabelButtons = () => <AltIconLabelButtons />;
