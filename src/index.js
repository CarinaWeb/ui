import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<h1>hello this is app</h1>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();