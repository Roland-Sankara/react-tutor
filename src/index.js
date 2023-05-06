import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// render component to the DOM
// ReactDOM.render(//component, // where you want to place that component )
let rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement)