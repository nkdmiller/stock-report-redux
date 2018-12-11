import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  NavLink
} from 'react-router-dom'
const LoginLink = props => {
	return(
		    <NavLink
		      to='/session/new'
		      exact
		      className = "link"
		    >Login</NavLink>
		   )
}
export default LoginLink;