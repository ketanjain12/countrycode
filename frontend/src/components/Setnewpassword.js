
// jan 2 new code api integration code
// Setnewpassword.js
// import React, { useState, useEffect } from 'react';
// import './Otpcode.css';
// import { IoIosArrowBack } from "react-icons/io";
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';

// const Setnewpassword = () => {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [token, setToken] = useState('');

//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     if (location.state && location.state.token) {
//       setToken(location.state.token); // Setting token from previous page
//     }
//   }, [location]);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   const clickHandler = async (event) => {
//     event.preventDefault();
//     if (password !== confirmPassword) {
//       setError('Passwords do not match!');
//       return;
//     }
//     try {
//       const response = await axios.post('http://localhost:5000/forgot/resetPassword', {
//         token,
//         password,
//         confirmPassword,
//       });

//       setSuccess(response.data.msg);
//       setError('');
//       navigate('/Success');
//     } catch (error) {
//       setSuccess('');
//       setError(error.response?.data?.msg || 'Failed to reset password');
//     }
//   };

//   return (
//     <div className='setpassheader'>
//       <div className='setpassarrow1' onClick={() => navigate(-1)}>
//         <IoIosArrowBack />
//       </div>
//       <div className='setpass1'>Set a new password</div>
//       <div className='setpass2'>Create a new password. Ensure it differs from</div>
//       <div className='setpass3'>previous ones for security</div>
//       <div className='form-container'>
//         <div className='input-group'>
//           <label htmlFor='password' className='setpass4'>Password</label>
//           <div className='password-field'>
//             <input
//               type={showPassword ? "text" : "password"}
//               id='password'
//               placeholder='Enter your new password'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <span onClick={togglePasswordVisibility} className='toggle-visibility'>
//               {showPassword ? '🙈' : '👁️'}
//             </span>
//           </div>
//         </div>
//         <div className='input-group'>
//           <label htmlFor='confirm-password' className='setpass4'>Confirm Password</label>
//           <div className='password-field'>
//             <input
//               type={showConfirmPassword ? "text" : "password"}
//               id='confirm-password'
//               placeholder='Re-enter password'
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//             />
//             <span onClick={toggleConfirmPasswordVisibility} className='toggle-visibility'>
//               {showConfirmPassword ? '🙈' : '👁️'}
//             </span>
//           </div>
//         </div>
//         {error && <p className='error'>{error}</p>}
//         {success && <p className='success'>{success}</p>}
//         <button type='button' className='submit-btn' onClick={clickHandler}>
//           Update Password
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Setnewpassword;

import React, { useState, useEffect } from 'react';
import './Otpcode.css';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Setnewpassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [token, setToken] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Get the token from the location state
    if (location.state && location.state.token) {
      setToken(location.state.token); // Setting token from previous page
    }
  }, [location]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const clickHandler = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/forgot/resetPassword', {
        token,
        password,
        confirmPassword,
      });

      setSuccess(response.data.msg);
      setError('');
      navigate('/SuccessPage');
    } catch (error) {
      setSuccess('');
      setError(error.response?.data?.msg || 'Failed to reset password');
    }
  };

  return (
    <div className='setpassheader'>
      <div className='setpassarrow1' onClick={() => navigate(-1)}>
        <IoIosArrowBack />
      </div>
      <div className='setpass1'>Set a new password</div>
      <div className='setpass2'>Create a new password. Ensure it differs from</div>
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
              required
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
              required
            />
            <span onClick={toggleConfirmPasswordVisibility} className='toggle-visibility'>
              {showConfirmPassword ? '🙈' : '👁️'}
            </span>
          </div>
        </div>
        {error && <p className='error'>{error}</p>}
        {success && <p className='success'>{success}</p>}
        <button type='button' className='submit-btn' onClick={clickHandler}>
          Update Password
        </button>
      </div>
    </div>
  );
};

export default Setnewpassword;



