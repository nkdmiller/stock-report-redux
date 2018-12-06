import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  NavLink
} from 'react-router-dom'

class Navbar extends Component {

  render() {
    return (

    	<>
		    <NavLink
		      to="/"
		      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
		      exact
		      /* add prop for activeStyle */
		      activeStyle={{
		        background: 'darkblue'
		      }}
		    >Home</NavLink>

		    <NavLink
		      to='/signup'
		      exact
		      activeStyle={{
		        background: 'darkblue'
		      }}
		    >Signup</NavLink>
		 
		    <NavLink
		      to='/login'
		      exact
		      activeStyle={{
		        background: 'darkblue'
		      }}
		    >Login</NavLink>
		 </>

    );
  }
}

export default Navbar;
