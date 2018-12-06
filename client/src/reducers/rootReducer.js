import {combineReducers} from "redux";

const rootReducer = combineReducers({
  users: usersReducer
});

//Through combineReducer, we're telling Redux to produce a reducer which will return a state that has both a key of books with a value equal to the return value of the booksReducer() and a key of authors with a value equal to the return value of the authorsReducer()

export default rootReducer;


function usersReducer(state = {loading: false, currentUser: null, stocks: []}, action) {
  switch (action.type) {
    case 'FIND_CURRENT_USER':
      return {loading: true, user: null}
    case 'SET_USER':
      debugger
      return { ...state,
        currentUser: action.user.currentUser.user.name
      }
    default:
      return state
  }
}