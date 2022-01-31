import React from "react";

import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";

import "./styles/app.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./components/Landing";
import Questions from "./components/questions";
import CharityIndex from "./components/charityIndex";
// import Roots from "./components/Roots-Dashboard/Roots";
// import NavBar from "./components/NavBar";

const App = () => {
  return (
    // <Roots />
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          {/* <Route exact path="/components/NavBar" component={NavBar} /> */}
          <Route exact path="/components/questions" component={Questions} />
          <Route
            exact
            path="/components/charityIndex"
            component={CharityIndex}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
