// Write your code here
import './index.css'

const Message = props => {
  const {isLoggedIn} = props
  const msg = isLoggedIn ? 'Please Login' : 'Welcome User'
  return <h1 className="msg">{msg}</h1>
}

export default Message
