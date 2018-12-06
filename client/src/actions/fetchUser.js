export function fetchUser() {
  return (dispatch, getState) => {
    dispatch({ type: 'LOADING_USER' });
      fetch('/session', {
        method: 'get',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      })      
      .then(response => response.json())
      .then(user => dispatch({ type: 'FETCH_USER', user }));
      }
}