import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'mobx-react';

import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import { AuthRoutes } from './components/Authentication/routes';
import authStore from './components/Authentication/stores';

import "./App.css";

const App = () => {
  return (
    <Provider authStore={authStore}>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
      {[...AuthRoutes]}
        <Route exact path="/page-1">
          <Page1 />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
     </Provider>
  );
};

export default App;
