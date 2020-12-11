import React from 'react';
import { connect } from 'react-redux';
import {
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