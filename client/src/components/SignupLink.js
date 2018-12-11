import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  NavLink
} from 'react-router-dom'
const SignupLink = props => {
	return(
		    <NavLink
		      to='/user/new'
		      exact
		      className = "link"
		    >Signup</NavLink>
		   )
}
export default SignupLink;