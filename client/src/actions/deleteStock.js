export function deleteStock(id) {
	debugger
	return (dispatch) => {
	dispatch({ type: 'LOADING_STOCKS' });
	  fetch("/stock/"+id+"/delete", {
	    method: 'DELETE',
	    headers: {
	      Accept: 'application/json',
	      'Content-Type': 'application/json',
	    }, body: JSON.stringify(id)
	  }) 
	  .then(response => response.json())
      .then(stock => dispatch({ type: 'DELETE_USERS_STOCK', id}));
}
}