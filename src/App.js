import React from "react";
import Login from "./containers/Login";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Login} />
    </Router>
  );
}

export default App;
