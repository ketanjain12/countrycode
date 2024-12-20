import React ,{useState}from 'react'
import './Otpcode.css'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
 const Setnewpassword = () => {
    const navigate=useNavigate();
  
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [showPassword, setShowPassword] = useState(false);
      const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
      const togglePasswordVisibility = () => {
          setShowPassword(!showPassword);
      };
  
      const toggleConfirmPasswordVisibility = () => {
          setShowConfirmPassword(!showConfirmPassword);
      };
  
      const clickHandler = (event) => {
          event.preventDefault();
          if (password !== confirmPassword) {
              alert("Passwords do not match!");
          } else {
              navigate("/SuccessPage");
          }
      };
    return (
        <div className='setpassheader'>
        <div className='setpassarrow1' onClick={() => navigate(-1)}><IoIosArrowBack /></div>
        <div className='setpass1'>Set a new password</div>
        <div className='setpass2'>Create a new password.Ensure it differs from </div>
        <div className='setpass3'>previous ones for security</div>
        <div className='form-container'>
                <div className='input-group'>
                    <label htmlFor='password' className='setpass4'>Password</label>
                    <div className='password-field'>
                        <input
                            type={showPassword ? "text" : "password"}
                            id='password'
                            placeholder='Enter your new password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span onClick={togglePasswordVisibility} className='toggle-visibility'>
                            {showPassword ? '🙈' : '👁️'}
                        </span>
                    </div>
                </div>
                <div className='input-group'>
                    <label htmlFor='confirm-password' className='setpass4'>Confirm Password</label>
                    <div className='password-field'>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            id='confirm-password'
                            placeholder='Re-enter password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <span onClick={toggleConfirmPasswordVisibility} className='toggle-visibility'>
                            {showConfirmPassword ? '🙈' : '👁️'}
                        </span>
                    </div>
                </div>
        <button type='button' className='submit-btn' onClick={clickHandler}>
           Update Password
          </button>
        </div>
        </div>
      )
}
export default Setnewpassword;