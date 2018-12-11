import React, { Component } from 'react';
import { logoutUser } from '../actions/logoutUser'
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  NavLink
} from 'react-router-dom'

const PortfolioLink = props => {

	return(
		    <NavLink
		      to = "/portfolio"
		      exact
		      className = "link"
		    >Portfolio</NavLink>
		   )
}
function mapStateToProps(state){
  return {userId: state.users.userId}
}

export default connect(mapStateToProps)(PortfolioLink)