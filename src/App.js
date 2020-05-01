import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./containers/Login";
import Dashboard from "./containers/Dashboard";
import Create from "./containers/Create";
import Edit from "./containers/Edit";
import View from "./containers/View";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/create" component={Create} />
      <Route path="/edit" component={Edit} />
      <Route path="/view" component={View} />
    </Router>
  );
}

export default App;
