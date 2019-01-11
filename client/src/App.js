import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Dashboard from "./components/dashboard";
import Register from "./components/auth/register";
import Login from "./components/auth/login";

import store from "./store/store";

import Navbar from "./components/ui/navbar";

import './App.css';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
