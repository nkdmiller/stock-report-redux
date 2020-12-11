import React from 'react';
import {
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