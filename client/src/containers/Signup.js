import React, {Component} from 'react';
import { connect } from 'react-redux';

class Signup extends Component {
  state = {
    user: {
      name: ''
    }
  }

  onHandleChange = event => {
    
    this.setState({
      user:{
        name: event.target.value
      }
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
    this.setState({
      user: {
        name: ''
      }
    })
      document.getElementById("signup-response").innerHTML = `Signed up, ${user.name}!`
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
            <button>Submit</button>
          </form>
        </div>
        <div id="signup-response">
        </div>
      </div>
    )
  }
}
export default connect()(Signup)