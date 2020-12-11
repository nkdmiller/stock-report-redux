import React from 'react';
import { logoutUser } from '../actions/logoutUser'
import { connect } from 'react-redux';
const LogoutLink = props => {
	return(
		    <button
		      className = "logout"
		      onClick={props.logoutUser}
		    >Logout</button>
		   )
}
function mapDispatchToProps(dispatch){
  return {logoutUser: () => dispatch(logoutUser())}
}

export default connect(null, mapDispatchToProps)(LogoutLink)