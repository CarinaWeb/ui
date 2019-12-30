import { configure, addDecorator, addParameters } from "@storybook/react";
import { themes } from "@storybook/theming";
import ThemeDecorator from "./decorators/ThemeDecorator";

const carina = {
  logo: {
    primary: "https://dnox5b6qypgn8.cloudfront.net/carina-primary-logo.svg",
    secondary: "https://dnox5b6qypgn8.cloudfront.net/carina-secondary-logo.png",
  },
  branding: {
    brandTitle: "Carina Storybook",
    brandUrl: "https://carina.org",
  },
};

const theme = {
  light: {
    ...themes.light,
    ...carina.branding,
    brandImage: carina.logo["primary"],
  },
  dark: {
    ...themes.dark,
    ...carina.branding,
    brandImage: carina.logo["secondary"],
  },
};

addParameters({
  darkMode: {
    dark: theme["dark"],
    light: theme["light"],
  },
});

addDecorator(ThemeDecorator);

// automatically import all files ending in *.stories.js
configure(require.context("../src/stories", true, /\.stories\.js$/), module);
