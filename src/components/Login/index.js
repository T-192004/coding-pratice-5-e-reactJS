// Write your code here
import './index.css'

const LoginButton = props => {
  const {changeLoggedStatus} = props

  return (
    <button type="button" className="btn" onClick={changeLoggedStatus}>
      Login
    </button>
  )
}

export default LoginButton
