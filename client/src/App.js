import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './containers/Navbar'
import Dashboard from './containers/Dashboard'
import Portfolio from './containers/Portfolio'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Dashboard/>
        <Portfolio/>
      </div>
    );
  }
}

export default App;
