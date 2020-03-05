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
import { Theme } from "@carina/ui/dist/styles";

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

- _Note about Carina import: `.../dist/...' will be removed in next minor version ^0.2.0_

## Development

Clone this repository and then:

- `npm install`: install dependencies
- `npm start`: runs storybook at http://localhost:9009/
- `git push` to `master` branch: a github workflow will build and deploy storybook to production
- `npm run dist`: publish package to NPM

Other scripts:

- `npm run build`: outputs distributable components from `/src` into `/dist`
- `npm run build-storybook`: outputs stories from `/stories` into `storybook-static`

# Carina Components

## Card

```
import React from "react";
import { Typography } from "@material-ui/core";
import { Card } from "@carina/ui/dist/core";

export default () => {
  return (
    <Card>
      <Typography>Lorem ipsum...</Typography>
    </Card>
  );
}

```

## DataTable

```
import React from "react";
import { Link } from "@material-ui/core";
import { Card } from "@carina/ui/dist/core";
import { Colors } from "@carina/ui/dist/styles";

const columns = [
  { title: "Last Updated", field: "lastUpdated" },
  {
    title: "Family Child Care Provider",
    field: "provider",
    render: rowData => <Link>{rowData.provider}</Link>,
  },
  {
    title: "Substitute",
    field: "substitute",
    render: rowData => <Link>{rowData.substitute}</Link>,
  },
  { title: "Status", field: "status" },
];

const data = [
  {
    id: 1,
    lastUpdated: "2020/1/10",
    provider: "Hernandez, Maria",
    substitute: "Gomez, Tina",
    status: "Initiated",
  },
  {
    id: 2,
    lastUpdated: "2020/1/10",
    provider: "Hernandez, Maria",
    substitute: "Ramirez, Penelope",
    status: "In Progress",
  },
  {
    id: 3,
    lastUpdated: "2020/1/10",
    provider: "Perez, Isabella",
    substitute: "Gomez, Tina",
    status: "In Progress",
  },
  {
    id: 4,
    lastUpdated: "2020/1/10",
    provider: "Hernandez, Maria",
    substitute: "Gomez, Tina",
    status: "Unresponsive",
  },
  {
    id: 5,
    lastUpdated: "2020/1/10",
    provider: "Hernandez, Maria",
    substitute: "Gomez, Tina",
    status: "Unresponsive",
  },
  {
    id: 6,
    lastUpdated: "2020/1/10",
    provider: "Hernandez, Maria",
    substitute: "Gomez, Tina",
    status: "Unresponsive",
  },
  {
    id: 7,
    lastUpdated: "2020/1/10",
    provider: "Hernandez, Maria",
    substitute: "Ramirez, Penelope",
    status: "Matched",
  },
  {
    id: 8,
    lastUpdated: "2020/1/10",
    provider: "Hernandez, Maria",
    substitute: "Ramirez, Penelope",
    status: "Matched",
  },
  {
    id: 9,
    lastUpdated: "2020/1/10",
    provider: "Perez, Isabella",
    substitute: "Gomez, Tina",
    status: "Not Matched",
  },
  {
    id: 10,
    lastUpdated: "2020/1/10",
    provider: "Perez, Isabella",
    substitute: "Gomez, Tina",
    status: "Not Matched",
  },
];

const options = {
  showTitle: false,
  searchFieldAlignment: "left",
  emptyRowsWhenPaging: false,
  columnsButton: true,
  sorting: true,
  exportButton: true,
  actionsColumnIndex: 100,
  rowStyle: rowData => ({
    backgroundColor:
      rowData.tableData.id % 2 === 0 ? Colors.GRAY30 : Colors.WHITE,
  }),
  searchFieldAlignment: "left"
};

export default () => {
  return (
    <DataTable
      columns={columns}
      data={data}
      options={options}
    ></DataTable>
  );
}
```

## Footer

```
import React from "react";
import { Footer } from "@carina/ui/dist/core";
import { Button, Grid } from "@material-ui/core";

export default () {
  return (
    <Footer>
      <Grid container spacing={2}>
        <Grid item>
          <Button color="primary" variant="contained">
            Contact Us
          </Button>
        </Grid>
        <Grid item>
          <Button color="primary" variant="contained">
            FAQ
          </Button>
        </Grid>
        <Grid item>
          <Button color="primary" variant="contained">
            Terms of Service
          </Button>
        </Grid>
      </Grid>
    </Footer>
  );
}
```

## Header

```
import React from "react";
import { Header } from "@carina/ui/dist/core";
import { Button } from "@material-ui/core";

export default () => {
  return (
    <Header>
      <Button>Menu</Button>
    </Header>
  );
}
```

## IconButton

```

```

# Carina Styles

## Colors

```
import { Colors } from "@carina/ui/dist/styles";
```

Colors Object:

```
{
  BLACK: "#000000",
  WHITE: "#ffffff",
  BLACK50: "#252729",
  BLACK30: "#555a5f",
  GRAY: "#979797",
  GRAY80: "#747476",
  GRAY60: "#a7a7a9",
  GRAY40: "#dbdbdb",
  GRAY30: "#f4f4f5",
  BROWN: "#573a2d",
  BLUE_DARKER: "#0061a0",
  BLUE: "#009fd4",
  BLUE_LIGHTER: "#99d9ee",
  ORANGE: "#ed8b00",
  ORANGE_LIGHTER: "#f1b434",
  ORANGE_LIGHTEST: "#f8d199",
  ORANGE_TINT: "#fff9f5",
};
```

## Theme

```
import { Theme } from "@carina/ui/dist/styles";
```

See implementation

# Icons

TODO
