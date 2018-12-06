import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  NavLink
} from 'react-router-dom'

const LoginLink = () => 		 
		    <NavLink
		      to='/login'
		      exact
		      activeStyle={{
		        background: 'darkblue'
		      }}
		    >Login</NavLink>;
const SignupLink = () =>
		    <NavLink
		      to='/signup'
		      exact
		      activeStyle={{
		        background: 'darkblue'
		      }}
		    >Signup</NavLink>;
const LogoutLink = () =>
		    <NavLink
		      to='/'
		      exact
		      activeStyle={{
		        background: 'darkblue'
		      }}
		    >Logout</NavLink>;			
class Navbar extends Component {
	state = { user: "Nate" };
  render() {
    return (
    	<>
    		<h1>Welcome!</h1>
		    <Route path="/user" component={LogoutLink} />
		    <Route exact path="/" component={SignupLink} />
		    <Route exact path="/" component={LoginLink} />
		</>

    );
  }
}

export default Navbar;
