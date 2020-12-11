import React, { Component } from 'react';
import '../Styling.css'
import {
  Route,
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
		<Route exact path="/" component={SignupLink} />;
	let login =  
    <Route exact path="/" component={LoginLink} />;
  let welcomeText = 'Welcome to Stock Report!';
	if (this.props.currentUser){
		login = <Route exact path="/" component={LogoutLink} />;
		signup = "";
    portfolio = <PortfolioLink />;
    welcomeText = 'Welcome ' + this.props.currentUser + "!";
	}
    return (
    	<div className='navbar'>
          <h1>{welcomeText}</h1>
          <Route exact path="/session/new" component={HomeLink} />
          <Route exact path="/user/new" component={HomeLink} />
          <Route exact path="/portfolio" component={HomeLink} />
          {login}
          {signup}
          {portfolio}
          <br/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { currentUser: state.users.currentUser };
};
 
export default connect(mapStateToProps) (Navbar);
