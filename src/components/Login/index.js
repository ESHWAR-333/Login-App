import {Component} from 'react'

class Login extends Component {
  render() {
    return (
      <button className="button" type="button" onClick={this.change}>
        Login
      </button>
    )
  }
}

export default Login
