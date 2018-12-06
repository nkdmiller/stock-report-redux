import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './containers/Navbar'
import Dashboard from './containers/Dashboard'
import Portfolio from './containers/Portfolio'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  NavLink
} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Navbar/>
            <Dashboard/>
            <Portfolio/>
          </React.Fragment>
        </Router>
      </div>

    );
  }
}

export default App;
