import React from "react";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";

import NavBar from "./components/NavBar";
// import Questions from "./components/questions";

const App = () => {
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/components/NavBar" component={NavBar} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;
