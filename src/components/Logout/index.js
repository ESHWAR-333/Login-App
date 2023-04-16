import {Component} from 'react'

class Logout extends Component {
  render() {
    console.log('hi')
    return (
      <button className="button" type="button" onClick={this.change}>
        Logout
      </button>
    )
  }
}

export default Logout
