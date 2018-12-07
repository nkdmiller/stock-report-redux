import {combineReducers} from "redux";

const rootReducer = combineReducers({
  users: usersReducer,
  stocks: stocksReducer
});

//Through combineReducer, we're telling Redux to produce a reducer which will return a state that has both a key of books with a value equal to the return value of the booksReducer() and a key of authors with a value equal to the return value of the authorsReducer()

export default rootReducer;


function usersReducer(state = {loading: false, currentUser: null, userId: null, stocks: []}, action) {
  switch (action.type) {
    case 'LOADING_USER':
      return {...state, loading: true}
    case 'FETCH_USER':
      return { ...state,
        currentUser: action.user.name, userId: action.user.id
      }
    case 'SET_USER':
      return { ...state,
        currentUser: action.user.currentUser.user.name, userId: action.user.currentUser.user.id
      }
    case "ADD_USER_STOCK":
     
      return state
    default:
      return state
  }
}

function stocksReducer(state = {loading: false, currentUser: null, stock: "", stockList: [], targetStock: ""}, action) {
  switch (action.type) {
    case 'LOADING_STOCKS':
      return {...state, loading: true}
    case 'ADD_STOCKS':
      return {...state, loading: false, targetStock: action.sym}
    case 'ADD_STOCK_INFO':
       
      let newStock = { symbol: action.stocks.quote.symbol, price: action.stocks.quote.latestPrice, change: action.stocks.quote.change, companyName: action.stocks.quote.companyName, sector: action.stocks.quote.sector}
      return {...state, loading: false, stock: newStock}
    case 'CREATE_STOCK':
      debugger
      let newUserStock = { symbol: action.stock.symbol, id: action.stock.id, price: action.stock.price, change: action.stock.change, companyName: action.stock.companyName, sector: action.stock.sector};
      return {
        ...state,
        stockList: [ ...state.stockList, newUserStock]
      }
    default:
      return state
    }
}