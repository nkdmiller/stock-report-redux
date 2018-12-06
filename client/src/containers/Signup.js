import React, {Component} from 'react';
import { connect } from 'react-redux';

class Signup extends Component {
  state = {
    user: {
      name: '',
      password: '',
      email: ''
    }
  }

  onHandleChange = event => {
    
    this.setState({
        user: {...this.state.user, [event.target.name]: event.target.value}
    });

  };

  onHandleSubmit = event => {
    event.preventDefault();
    let user = this.state
    debugger
      fetch('/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }, body: JSON.stringify(user)
      })
    this.props.setUser({currentUser: user})
    this.setState({
      user: {
        name: '',
        password: '',
        email: ''
      }
    })
      document.getElementById("signup-response").innerHTML = `Signed up, ${user.user.name}!`
    }

  handleKeyPress = (event) => {
    if (event.key === 'Enter'){
      this.onHandleSubmit(event)
    }
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <div className="signup-form-body">
          <form onSubmit={this.onHandleSubmit} onKeyPress={this.handleKeyPress}>
            <input id="name" name="name" placeholder="Username" value={this.state.user.name} onChange={this.onHandleChange} />
            <input id="password" name="password" placeholder="Password" value={this.state.user.password} onChange={this.onHandleChange} />
            <input id="email" name="email" placeholder="Email" value={this.state.user.email} onChange={this.onHandleChange} />
            <button>Submit</button>
          </form>
        </div>
        <div id="signup-response">
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch({type: 'SET_USER', user}),
})

export default connect(null, mapDispatchToProps)(Signup)