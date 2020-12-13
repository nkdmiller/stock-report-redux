export function updateStocks() {
	console.log('updating...')
  return (dispatch, getState) => {
    dispatch({ type: 'LOADING_STOCKS' });
    getState().users.stockList.forEach(function(stock){
    	fetch("https://api.iextrading.com/1.0/stock/"+stock.symbol+"/book")
    	.then(response => response.json())
     	.then(stock => dispatch({ type: 'UPDATE_STOCK_INFO', stock }))
     })
    getState().users.stockList.forEach(function(stock){
    	fetch("/stock/"+stock.stock_id+"/edit", {
	    method: 'PATCH',
	    headers: {
	      Accept: 'application/json',
	      'Content-Type': 'application/json',
	    }, body: JSON.stringify(stock)
	  }) 
  	});
  }
}