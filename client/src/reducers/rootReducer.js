import {combineReducers} from "redux";

const rootReducer = combineReducers({
  users: usersReducer,
  stocks: stocksReducer
});

//Through combineReducer, we're telling Redux to produce a reducer which will return a state that has both a key of books with a value equal to the return value of the booksReducer() and a key of authors with a value equal to the return value of the authorsReducer()

export default rootReducer;


function usersReducer(state = {loading: false, currentUser: null, stocks: []}, action) {
  switch (action.type) {
    case 'FIND_CURRENT_USER':
      return {loading: true, user: null}
    case 'SET_USER':

      return { ...state,
        currentUser: action.user.currentUser.user.name
      }
    default:
      return state
  }
}

function stocksReducer(state = {loading: false, currentUser: null, stock: "", stockList: [], targetStock: ""}, action) {
  switch (action.type) {
    case 'LOADING_STOCKS':
      return {...state, loading: true}
    case 'ADD_STOCKS':
      return {...state, loading: false, stock: action.sym}
    case 'ADD_USER_STOCKS':
      return {...state, loading: false, targetStock: action.stocks.quote.symbol}
    default:
      return state
    }
}