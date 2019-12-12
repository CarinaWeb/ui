import { configure } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import ThemeDecorator from "./decorators/ThemeDecorator";

// automatically import all files ending in *.stories.js
configure(require.context("../src/stories", true, /\.stories\.js$/), module);

addDecorator(ThemeDecorator);
