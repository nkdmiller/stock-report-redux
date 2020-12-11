import React from 'react';
import {
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
};

export default HomeLink;