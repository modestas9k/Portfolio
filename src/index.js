import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "normalize.css";

import "font-awesome/css/font-awesome.min.css";
import "./../src/scss/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
