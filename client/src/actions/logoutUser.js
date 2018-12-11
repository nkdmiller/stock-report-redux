export function logoutUser() {

	return (dispatch, getState) => {
	debugger
	dispatch({ type: 'LOADING_USER' });
	  fetch("/session/delete", {
	    method: 'GET',
	    headers: {
	      Accept: 'application/json',
	      'Content-Type': 'application/json',
	    }
	  }) 
	  .then(response => response.json())
      .then(id => dispatch({ type: 'LOGOUT_USER', id}));
}
}