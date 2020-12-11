import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './containers/Navbar';
import Dashboard from './containers/Dashboard';
import Portfolio from './containers/Portfolio';
import { fetchUser } from './actions/fetchUser';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    let portfolio;
    if (this.props.currentUser) {
      portfolio = <Route path='/portfolio' component={Portfolio} />;
    }
    return (
      <div className='App'>
        <Router>
          <>
            <Navbar />
            <Dashboard />

            {portfolio}
          </>
        </Router>
      </div>

    );
  };
}

function mapDispatchToProps(dispatch) {
  return { fetchUser: () => dispatch(fetchUser()) };
}

const mapStateToProps = (state) => ({ currentUser: state.users.currentUser });

export default connect(mapStateToProps, mapDispatchToProps)(App);