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
import LoginLink from '../components/LoginLink'
import LogoutLink from '../components/LogoutLink'
import SignupLink from '../components/SignupLink'
import HomeLink from '../components/HomeLink'
import PortfolioLink from '../components/PortfolioLink'
class Navbar extends Component {
  render() {
  let portfolio =
    null;
	let signup =
		<Route exact path="/" component={SignupLink} />
	let login =  
	  <Route exact path="/" component={LoginLink} />
	if (this.props.currentUser){
		login = <Route exact path="/" component={LogoutLink} />
		signup = ""
    portfolio = <PortfolioLink/>
	}
    return (
    	<>
    		<h1>Welcome {this.props.currentUser}!</h1>
    		<Route exact path="/session/new" component={HomeLink}/>
        <Route exact path="/user/new" component={HomeLink}/>
        <Route exact path="/portfolio" component={HomeLink}/>
		    {login}
		    {signup}
        {portfolio}
		</>

    );
  }
}
const mapStateToProps = (state) => {
  return { currentUser: state.users.currentUser };
};
 
export default connect(mapStateToProps) (Navbar);
