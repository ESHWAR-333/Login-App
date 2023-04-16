import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import './index.css'

class Home extends Component {
  state = {login: false, text: 'Please Login'}

  change = () => {
    this.setState(prevState => {
      console.log(prevState)

      if (prevState.login === false) {
        return {login: true, text: 'Welcome User'}
      }
      return {login: false, text: 'Please Login'}
    })
  }

  render() {
    const {text, login} = this.state
    let ans
    if (login === true) {
      ans = (
        <button className="button" type="button" onClick={this.change}>
          Logout
        </button>
      )
    } else {
      ans = (
        <button className="button" type="button" onClick={this.change}>
          Login
        </button>
      )
    }
    return (
      <div className="mainContainer">
        <div className="subContainer">
          <h1 className="heading">{text}</h1>
          {ans}
        </div>
      </div>
    )
  }
}

export default Home
