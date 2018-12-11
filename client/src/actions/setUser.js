export function setUser(user) {
  return (dispatch, getState) => {
    dispatch({ type: 'LOADING_USER' });
      fetch('/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }, body: JSON.stringify(user)
      })
      .then(response => response.json())
      .then(user => dispatch({ type: 'FETCH_USER', user }))
      .catch(e => document.getElementById("login-response").innerHTML = 'Username or password is incorrect. Please try again.');
  }
 }