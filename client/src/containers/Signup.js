import React, {Component} from 'react';


class Signup extends Component {


  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <div className="signup-form-body">
          <form onSubmit={this.onHandleSubmit} onKeyPress={this.handleKeyPress}>
            <input id="username" name="username" placeholder="Username" value={this.state.user.username} onChange={this.onHandleChange} />
            <button>Submit</button>
          </form>
        </div>
        <div id="signup-response">
        </div>
      </div>
    )
  }
}
export default Signup