import React, { Component } from 'react';
import '../Styling.css'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  NavLink
} from 'react-router-dom'
import { connect } from 'react-redux';
const LoginLink = () => 		 
		    <NavLink
		      to='/login'
		      exact
		      className = "link"
		    >Login</NavLink>;
const SignupLink = () =>
		    <NavLink
		      to='/signup'
		      exact
		      className = "link"
		    >Signup</NavLink>;
const LogoutLink = () =>
		    <NavLink
		      to='/'
		      exact

		    >Logout</NavLink>;
const HomeLink = () =>
		    <NavLink
		      to='/'
		      exact
		      className = "link"
		    >Home</NavLink>;		
class Navbar extends Component {
	state = { user: "Nate" };
  render() {
    return (
    	<>
    		<h1>Welcome {this.props.currentUser}!</h1>
    		<HomeLink/>
		    <Route path="/user" component={LogoutLink} />
		    <Route exact path="/" component={SignupLink} />
		    <Route exact path="/" component={LoginLink} />
		</>

    );
  }
}
const mapStateToProps = (state) => {
  return { currentUser: state.users.currentUser };
};
 
export default connect(mapStateToProps) (Navbar);
