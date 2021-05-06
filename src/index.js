import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//The following tells that App Component has to be loaded into the div element present in index.html

ReactDOM.render(
 
    <App />, /* The various pages will be displayed by the `Main` component. */
 
  document.getElementById("root")
);
