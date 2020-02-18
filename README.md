<p align="center">
  <a href="http://storybook.carina.org" rel="noopener" target="_blank"><img width="150" src="https://dnox5b6qypgn8.cloudfront.net/carina-primary-logo.svg" alt="Carina logo"></a></p>
</p>

<h1 align="center">Carina UI</h1>

Interact with components at http://storybook.carina.org

## Installation

```
npm install @material-ui/core @carina/ui
```

## Usage

To import a Carina component, such as the Theme:

```
import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, Typography } from "@material-ui/core";
import { Theme } from "@carina/ui";

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <CssBaseline />
      <Typography variant="body1">Hello earth</Typography>
    </MuiThemeProvider>
  );
}

export default App;
```

## Development

Clone this repository and then:

- `npm install`: install dependencies
- `npm start`: runs storybook at http://localhost:9009/
- `git push` to `master` branch: a github workflow will build and deploy storybook to production
- `npm publish`: publish package to npm and github

Other scripts:

- `npm run build`: outputs distributable components from `/src` into `/dist`
- `npm run build-storybook`: outputs stories from `/stories` into `storybook-static`
