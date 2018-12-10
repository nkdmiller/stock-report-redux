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
import { connect } from 'react-redux';
import { fetchUser } from './actions/fetchUser'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
}
  render() {
    let portfolio = ""
    if (this.props.currentUser){
      portfolio = <Portfolio/>
    }
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Navbar/>
            
            <Dashboard/>

            {portfolio}
          </React.Fragment>
        </Router>
      </div>

    );
  }
}

function mapDispatchToProps(dispatch){
  return { fetchUser: () => dispatch(fetchUser()) }
}
const mapStateToProps = (state) => {
  return { currentUser: state.users.currentUser };
};
 
export default connect(mapStateToProps, mapDispatchToProps) (App);

