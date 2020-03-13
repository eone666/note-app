import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from './pages/SignUp'

function App() {
  return <Router>
    <Switch>
      <Route path="/" exact>
        <SignUp/>
      </Route>
    </Switch>
  </Router>;
}

export default App;
