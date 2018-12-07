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
		      to='/signup'
		      exact
		      className = "link"
		    >Login</NavLink>
		   )
}
export default SignupLink;