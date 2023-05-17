import React from "react";
import ReactDOM from "react-dom";
import {RouterProvider} from "react-router-dom";
import router from "./routing/routes";

// render component to the DOM
// ReactDOM.render(//component, // where you want to place that component )
let rootElement = document.getElementById("root");
ReactDOM.render(
<RouterProvider router={router}></RouterProvider>
,rootElement)