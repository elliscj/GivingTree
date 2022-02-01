import React from "react";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import "./App.css";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/app.css";

import Landing from "./components/Landing";
import Questions from "./components/questions";
import CharityIndex from "./components/charityIndex";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
// import Roots from "./components/Roots-Dashboard/Roots";
import ResponsiveAppBar from "./components/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      {/* <Roots /> */}
      <Router basename="/">
        <div>
          <ResponsiveAppBar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            {/* <Route exact path="/components/NavBar" component={NavBar} /> */}
            <Route exact path="/questions" component={Questions} />
            <Route exact path="/charityIndex" component={CharityIndex} />
            <Route exact path="/Dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
