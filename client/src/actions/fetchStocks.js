export function fetchStocks() {
  return (dispatch, getState) => {
    dispatch({ type: 'LOADING_STOCKS' });
    return fetch("https://api.iextrading.com/1.0/stock/"+getState().stocks.targetStock+"/book")
      .then(response => {
        if (response.ok) {
          document.getElementById("error-handler").innerHTML = '';
        }
        return response.json()
      })
      .then(stocks => dispatch({ type: 'ADD_STOCK_INFO', stocks }))
      .catch(e => document.getElementById("error-handler").innerHTML = 'Stock not found. Please try again.');
  };
}