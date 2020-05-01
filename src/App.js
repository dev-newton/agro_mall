import React from "react";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./containers/Login";
import Dashboard from "./containers/Dashboard";
import Create from "./containers/Create";
import Edit from "./containers/Edit";
import View from "./containers/View";
import Nav from "./components/Nav";

import marketReducer from "./store/reducers/market";

const rootReducer = combineReducers({
  market: marketReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(ReduxThunk))
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/create" component={Create} />
        <Route path="/edit" component={Edit} />
        <Route path="/view" component={View} />
      </Router>
    </Provider>
  );
}

export default App;
