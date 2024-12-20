// import React, { useState } from 'react';
// import './styles.css';
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
// import { Link,useNavigate } from 'react-router-dom'; // Import Link for navigation
// import Navbar from '../Dashboard/Navbar';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const SignIn = () => {
//   const [emailOrPhone, setEmailOrPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false); // State for password visibility
//   const [error,setError]=useState('');
//   const navigate = useNavigate();// use for next route

//   // Form validation
//   const validateForm = () => {
//     if (!emailOrPhone || !password) {
//       toast.error("please fill all details")
//       return false;
//     }
//     return true;
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log({ emailOrPhone, password });
//       // Proceed with sign-in logic
//     } else {
//       console.error('Form validation failed');
//     }
//   };
//   const NavbarHandler =()=>{
//     toast.success("signin successful")
//     navigate('/Navbar');
//   }
//   return (
//     <div className="auth-container">
//       <form className="auth-form" onSubmit={handleSubmit}>
//         <h2>Sign In</h2>

//         <div className="form-group">
//           <label>Email/Phone Number</label>
//           <input
//             type="text"
//             placeholder="Enter your email or phone number"
//             value={emailOrPhone}
//             onChange={(e) => setEmailOrPhone(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Password</label>
//           <div className="password-input-container">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <span 
//               className="toggle-password" 
//               onClick={() => setShowPassword(!showPassword)}
//               style={{ cursor: 'pointer' }}
//             >
//               <i className={`fas fa-eye${showPassword ? '' : '-slash'}`} />
//             </span>
//           </div>
//         </div>

//         <button type="submit" className="auth-button" onClick={NavbarHandler}>Sign In</button>

//         {/* Add the link to the Sign Up page */}
//         <div className="auth-footer">
//           <p>If you don't have an account, <Link to="/signup" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>Sign Up</Link></p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignIn;

// signin 

import React, { useState } from 'react';
import './styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation
import Navbar from '../Dashboard/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import  Forgotpassword  from './Forgotpassword';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigate = useNavigate(); // use for next route

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:5001/api/signin', {
          email,
          password,
        });
        if (response.status === 200) {
          toast.success('Signin successful!');
          setEmail('');
          setPassword('');
          navigate('/Navbar');
        } else {
          toast.error(response.data.message || 'Signin failed. Please try again.');
        }
      } catch (error) {
        console.log('error', error.message);
        toast.error(error.response?.data?.msg || 'Error connecting to server. Please try again later.');
      }
    }
  };
  const handleForgotPassword = () => {
    navigate('/Forgotpassword'); // Navigates to the desired route
  };
  // Form validation
  const validateForm = () => {
    if (!email || !password) {
      toast.error("Please fill all details");
      return false;
    }
    return true;
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className='signin'>Sign<span className='in'>In</span></h2>

        <div className="form-group">
          <label>Email/Phone Number</label>
          <input
            type="text"
            placeholder="Enter your email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <div className="password-input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: 'pointer' }}
            >
              <i className={`fas fa-eye${showPassword ? '' : '-slash'}`} />
            </span>
          </div>
        </div>
      {/* code for forgot password ui */}
      <div className='fp'>
      <p className='forgot' onClick={handleForgotPassword} style={{ cursor: 'pointer' }}>
        Forgot Password?
      </p>
    </div>

        <button type="submit" className="auth-button">Sign In</button>

        {/* Add the link to the Sign Up page */}
        <div className="auth-footer">
          <p>If you don't have an account, <Link to="/signup" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>Sign Up</Link></p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignIn;

