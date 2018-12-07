import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  NavLink
} from 'react-router-dom'
const LogoutLink = props => {
	return(
		    <NavLink
		      to='/'
		      exact
		      className = "link"
		    >Logout</NavLink>
		   )
}
export default LogoutLink;