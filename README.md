# Frontend library for Carina projects

## Installation and Usage

For official instructions, see https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages#installing-a-package

1. Install material-ui dependency: `npm install @material-ui/core`
2. Add a file named `.npmrc` in the same directory as your package.json. In this file, add the following line: `registry=https://npm.pkg.github.com/carinaweb`
3. In package.json, add the following line under dependencies: `"@carinaweb/ui": "0.1.0"`
4. Run `npm install`

To import a Carina component, such as the Theme:

```
import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Typography, Button } from "@material-ui/core";
import { Theme } from "@carinaweb/ui";

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <CssBaseline />
      <Typography variant="body1">
        Hello earth
      </Typography>
    </MuiThemeProvider>
  );
}

export default App;
```

## Development

Clone this repository and then:

- `npm install`: install dependencies
- `npm start`: runs storybook at http://localhost:9009/
- `npm run build`: outputs distributable components from `/src` into `/dist`
- `npm run build-storybook`: outputs stories from `/stories` into `storybook-static`
- `npm publish`: publish to GPR

## Production

See storybook at http://storybook.carina.org
