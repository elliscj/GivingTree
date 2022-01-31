import React from "react";

import "./App.css";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";

import "./styles/app.css";

import Landing from "./components/Landing";
import Questions from "./components/questions";
import CharityIndex from "./components/charityIndex";
// import Roots from "./components/Roots-Dashboard/Roots";
import ResponsiveAppBar from "./components/NavBar";

const App = () => {
  return (
    // <Roots />
    <BrowserRouter>
      <div>
        {/* <Switch> */}
        <Route path="/components/" component={ResponsiveAppBar} />
        <Route exact path="/" component={Landing} />
        {/* <Route exact path="/components/NavBar" component={NavBar} /> */}
        <Route exact path="/components/questions" component={Questions} />
        <Route exact path="/components/charityIndex" component={CharityIndex} />
        {/* </Switch> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
