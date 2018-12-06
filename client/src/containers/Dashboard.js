import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  NavLink
} from 'react-router-dom'
const noUser = () => <h1>Please login or signup to use stock report!</h1>;
const Signup = () => <h1>Signup!</h1>;
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
    return (
    		<React.Fragment>
		      <Route exact path="/login" component={Login} />
		      <Route exact path="/" component={noUser} />
		      <Route exact path="/signup" component={Signup} />
		    </React.Fragment>
    );
  }
}

export default Dashboard;