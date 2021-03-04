import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components";
import { Home, ShowWork } from "./pages";
const AboutLazy = lazy(() => import(`./pages/About/About`));
const ProjectsLazy = lazy(() => import(`./pages/Projects/Projects`));

function Routes() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutLazy} />
          <Route exact path="/projects" component={ProjectsLazy} />
          <Route exact path="/projects/:id" component={ShowWork} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
