import React, { Component } from 'react';
import Signup from './Signup';
import Login from './Login';
import {
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
const noUser = () => <h1>Please login or signup to use stock report!</h1>;
class Dashboard extends Component {
  render() {
    let login = <Route exact path='/session/new' component={Login} />;
    let signup = <Route exact path='/user/new' component={Signup} />;
  	let warning = <Route exact path='/' component={noUser} />;
  	if (this.props.currentUser) {
      warning = '';
      signup = '';
      login = '';
    }
    return (
      <>
        {login}
        {warning}
        {signup}
      </>
    );
  }
}

const mapStateToProps = (state) => ({ currentUser: state.users.currentUser });

export default connect(mapStateToProps) (Dashboard);
