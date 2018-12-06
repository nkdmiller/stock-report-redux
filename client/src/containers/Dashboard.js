import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Signup from './Signup'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  NavLink
} from 'react-router-dom'
import { connect } from 'react-redux';
const noUser = () => <h1>Please login or signup to use stock report!</h1>;
const Login = () =>
  <form>
    <h1>Login</h1>
    <div>
      <input type="text" name="username" placeholder="Username" />
      <label htmlFor="username">Username</label>
    </div>
    <div>
      <input type="password" name="password" placeholder="Password" />
      <label htmlFor="password">Password</label>
    </div>
    <input type="submit" value="Login" />
  </form>;

class Dashboard extends Component {
  render() {
  	let warning = <Route exact path="/" component={noUser} />;
  	if (this.props.currentUser){
  		warning = ""
  	}
    return (
    		<React.Fragment>
		      <Route exact path="/login" component={Login} />
		      {warning}
		      <Route exact path="/signup" component={Signup} />
		    </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return { currentUser: state.users.currentUser };
};
 
export default connect(mapStateToProps) (Dashboard);