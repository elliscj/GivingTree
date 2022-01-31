import React from "react";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/landing";
import Questions from "./components/questions";
import CharityIndex from "./components/charityIndex";
// import Roots from "./components/Roots-Dashboard/Roots";
// import NavBar from "./components/NavBar";

const App = () => {
  return (
    // <Roots />
    <HashRouter>
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
    </HashRouter>
  );
};

export default App;
