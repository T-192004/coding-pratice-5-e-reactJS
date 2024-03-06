// Write your code here
import './index.css'

const LogoutBtton = props => {
  const {changeLoggedStatus} = props

  return (
    <button type="button" className="btn" onClick={changeLoggedStatus}>
      Logout
    </button>
  )
}

export default LogoutBtton
