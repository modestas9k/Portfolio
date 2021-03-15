import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "normalize.css";
import "./fontAwesome.js";
import "./../src/scss/index.scss";
import { ProjectProvider } from "./contexts/ProjectContext";

ReactDOM.render(
  <React.StrictMode>
    <ProjectProvider>
      <Routes />
    </ProjectProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
