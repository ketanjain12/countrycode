// import React, { useState, useEffect } from 'react';
// import './Otpcode.css';
// import { IoIosArrowBack } from "react-icons/io";
// import { useNavigate, useLocation } from 'react-router-dom';
// import axios from 'axios';

// const Otpcode = () => {
//   const [otp, setOtp] = useState(new Array(5).fill(""));
//   const [email, setEmail] = useState(''); // State for email
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const [token, setToken] = useState('');  // State to store the token

//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     // Get the token from the location state
//     if (location.state && location.state.email) {
//       setEmail(location.state.email); // Set email from ForgotPassword page
//     }
//   }, [location]);

//   const handleChange = (element, index) => {
//     if (isNaN(element.value)) return;
//     const otpArray = [...otp];
//     otpArray[index] = element.value;
//     setOtp(otpArray);

//     if (element.nextSibling) {
//       element.nextSibling.focus();
//     }
//   };

//   const clickHandler = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/forgot/verifyCode', {
//         email,         // Send the email captured in state
//         code: otp.join("")
//       });
//       setSuccess(response.data.msg);

//        // Store token in state after successful OTP verification
//        const  {token}  = response.data;  // Assuming the token is returned from the API response
//        setToken(token);

//       navigate("/Passwordreset", { state: { token } });
//     } catch (error) {
//       setError(error.response?.data?.msg || 'Invalid or expired code');
//     }
//   };

//   return (
//     <div className='header'>
//       <div className='arrow' onClick={() => navigate(-1)}><IoIosArrowBack /></div>
//       <div className='headingh2'>Check your email</div>
//       <div className='emailheading'>We sent a reset link to {email}</div>
//       <div className='emailheading2'>Enter the 5-digit code mentioned in the email:</div>

//       <div className='otp-input-container'>
//         {otp.map((data, index) => (
//           <input
//             className='otp-input'
//             type='text'
//             maxLength='1'
//             key={index}
//             value={data}
//             onChange={(e) => handleChange(e.target, index)}
//             onFocus={(e) => e.target.select()}
//           />
//         ))}
//       </div>
//       {error && <p className='error'>{error}</p>}
//       {success && <p className='success'>{success}</p>}
//       <button type='button' className='submit-btn' onClick={clickHandler}>
//         Verify Code
//       </button>
//     </div>
//   );
// };

// export default Otpcode;

// for changes 
import React, { useState, useEffect } from 'react';
import './Otpcode.css';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Otpcode = () => {
  const [otp, setOtp] = useState(new Array(5).fill(""));
  const [email, setEmail] = useState(''); // State for email
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [token, setToken] = useState('');  // State to store the token

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Get the email from the location state
    if (location.state && location.state.email) {
      setEmail(location.state.email); // Set email from ForgotPassword page
    }
  }, [location]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    const otpArray = [...otp];
    otpArray[index] = element.value;
    setOtp(otpArray);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const clickHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/forgot/verifyCode', {
        email,         // Send the email captured in state
        code: otp.join("")
      });
      setSuccess(response.data.msg);

      // Store token in state after successful OTP verification
      const { token } = response.data;  // Assuming the token is returned from the API response
      setToken(token);

      // Passing token using navigate to the next page
      navigate("/Setnewpassword", { state: { token } });
    } catch (error) {
      setError(error.response?.data?.msg || 'Invalid or expired code');
    }
  };

  return (
    <div className='header'>
      <div className='arrow' onClick={() => navigate(-1)}><IoIosArrowBack /></div>
      <div className='headingh2'>Check your email</div>
      <div className='emailheading'>We sent a reset link to {email}</div>
      <div className='emailheading2'>Enter the 5-digit code mentioned in the email:</div>

      <div className='otp-input-container'>
        {otp.map((data, index) => (
          <input
            className='otp-input'
            type='text'
            maxLength='1'
            key={index}
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onFocus={(e) => e.target.select()}
          />
        ))}
      </div>
      {error && <p className='error'>{error}</p>}
      {success && <p className='success'>{success}</p>}
      <button type='button' className='submit-btn' onClick={clickHandler}>
        Verify Code
      </button>
    </div>
  );
};

export default Otpcode;





