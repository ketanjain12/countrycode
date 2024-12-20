import { useNavigate } from 'react-router-dom'
import './Notfound.css'

const Notfound =()=>{
  const navigate = useNavigate();// use for next route
  const signuphandler=()=>{
    alert("Do You Want To Go SignUp Page")
    navigate('/signup')
  }
  const signinhandler=()=>{
    alert("Do You Want To Go SignIn Page")
    navigate('/signin')
  }
  return(
    <div className='header'>
        <div className='heading'>Not Found this page please select another path like <span>Below</span></div>
        <br></br>
        <div className='main'>

      <div className='heading1'>for signup click this button   <button onClick={signuphandler}>SignUp</button> </div>
      <br></br>
      <div className='heading1'>for signin click this button   <button onClick={signinhandler}>SignIn</button></div>
        </div>
    </div>
  )
}
export default Notfound;