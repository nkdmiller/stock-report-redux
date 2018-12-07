import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  NavLink
} from 'react-router-dom'
const HomeLink = props => {
	return(
		    <NavLink
		      to='/'
		      exact
		      className = "link"
		    >Home</NavLink>
		   )
}
export default HomeLink;