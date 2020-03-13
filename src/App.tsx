import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthorizationPage from "./pages/AuthorizationPage";
import MainPage from "./pages/MainPage";

const authToken:string | null = localStorage.getItem("authToken");

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          {authToken?(<MainPage/>):(<AuthorizationPage/>)}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
