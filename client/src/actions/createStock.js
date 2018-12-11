export function createStock() {
	console.log('C')
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
      .then(stock =>{
      	console.log('D')
      	dispatch({ type: 'CREATE_USER_STOCK', stock})});
    }
	console.log('E')
}