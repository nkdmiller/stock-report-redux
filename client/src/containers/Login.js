import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions/setUser'
class Login extends Component {
  state = {
    user: {
      name: '',
      password: ''
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
      this.props.setUser(user)
    }
  handleKeyPress = (event) => {
    if (event.key === 'Enter'){
      this.onHandleSubmit(event)
    }
  }

  render() {
    return (
      <div>
        <h1 id="login-head">Login</h1>
        <div className="login-form-body">
        <form onSubmit={this.onHandleSubmit} onKeyPress={this.handleKeyPress} id = "login-form">
          <div>
            <input type="text" name="name" placeholder="Username" onChange={this.onHandleChange} value={this.state.user.name} />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" value={this.state.user.password} onChange={this.onHandleChange}/>
          </div>
          <input type="submit" value="Login" />
        </form>
        </div>
        <div id="login-response">
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {setUser: (user) => dispatch(setUser(user))}
}

export default connect(null, mapDispatchToProps)(Login)