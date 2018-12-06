export function fetchStocks() {
  return (dispatch, getState) => {
    dispatch({ type: 'LOADING_STOCKS' });
    return fetch("https://api.iextrading.com/1.0/stock/"+getState().stocks.stock+"/book")
      .then(response => response.json())
      .then(stocks => dispatch({ type: 'ADD_USER_STOCKS', stocks }));
  };
}