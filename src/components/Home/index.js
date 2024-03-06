// Write your code here
import {Component} from 'react'
import './index.css'
import LoginButton from '../Login/index'
import LogoutButton from '../Logout/index'
import Message from '../Message/index'

class Home extends Component {
  state = {isLoggedIn: true}

  changeLoggedStatus = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn) {
      this.setState({isLoggedIn: false})
    } else {
      this.setState({isLoggedIn: true})
    }
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <LoginButton changeLoggedStatus={this.changeLoggedStatus} />
          ) : (
            <LogoutButton changeLoggedStatus={this.changeLoggedStatus} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
