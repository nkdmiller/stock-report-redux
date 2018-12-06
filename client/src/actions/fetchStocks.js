export function fetchStocks() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_STOCKS' });
    return fetch('https://api.iextrading.com/1.0/stock/aapl/book')
      .then(response => response.json())
      .then(stocks => dispatch({ type: 'ADD_STOCKS', stocks }));
  };
}