export function createStock() {
	return (dispatch, getState) => {
	dispatch({ type: 'LOADING_STOCKS' });
	  fetch('/stock/new', {
	    method: 'POST',
	    headers: {
	      Accept: 'application/json',
	      'Content-Type': 'application/json',
	    }, body: JSON.stringify(getState().stocks)
	  }) 
	  .then(response => response.json())
      .then(stock => dispatch({ type: 'CREATE_STOCK', stock}));
}
}