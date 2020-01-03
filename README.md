This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the Storybook development mode.<br />
Open [http://localhost:9009/](http://localhost:9009/) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm build`

Builds Storybook for production. Build files can be found in `storybook-static`.

## How to Use

( Work in progress )

1. Run `npm install @CarinaWeb/carina-ui`
2. Import Theme: `import { Theme } from "@CarinaWeb/carina-ui/core/styles"`
3. Import components, e.g. `import { UserCard } from "@CarinaWeb/carina-ui/core"`

## Development

- MUI Components: These are not exported. Import the Theme from this library and then the respective components from material-ui
- Carina Components: These are exported from this library
