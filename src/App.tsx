import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Stadistics from "./components/Stadistics";
import Justifications from "./components/Justifications";
function App() {
  return (
    <Router>
      <div className="App">
        <h1>Project 2</h1>
        <Switch>
          <Route component={Stadistics} path="/stadistics" exact />
          <Route component={Justifications} path="/justifications" exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
