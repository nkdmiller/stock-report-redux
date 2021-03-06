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
      document.getElementById("signup-response").innerHTML = `You're all set, ${user.user.name}!`
      document.getElementById("signup-form").style.display = "none"
      document.getElementById("signup-head").style.display = "none"
    }
  handleKeyPress = (event) => {
    if (event.key === 'Enter'){
      this.onHandleSubmit(event)
    }
  }

  render() {
    return (
      <div>
        <h1 id="signup-head">Sign Up</h1>
        <div className="signup-form-body">
          <form onSubmit={this.onHandleSubmit} onKeyPress={this.handleKeyPress} id="signup-form">
            <input required id="name" name="name" placeholder="Username" value={this.state.user.name} onChange={this.onHandleChange} />
            <br></br><br></br>
            <input required id="password" type="password" name="password" placeholder="Password" value={this.state.user.password} onChange={this.onHandleChange} />
            <br></br><br></br>
            <input required id="email" name="email" placeholder="Email" value={this.state.user.email} onChange={this.onHandleChange} />
            <br></br><br></br>
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