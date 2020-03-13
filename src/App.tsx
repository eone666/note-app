import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthorizationPage from "./pages/AuthorizationPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/notes">
          <MainPage />
        </Route>
        <Route path="/">
          <AuthorizationPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
