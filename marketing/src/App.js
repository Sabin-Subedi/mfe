import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Album from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

function App({ history }) {
  console.log("history", history, Router);
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path="/pricing">
            <Pricing />
          </Route>
          <Route exact path="/">
            <Album />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
}

export default App;
