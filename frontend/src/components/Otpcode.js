// import React, { useState } from 'react';
// import './Otpcode.css';
// import { IoIosArrowBack } from "react-icons/io";
// import { Link,useNavigate } from 'react-router-dom';

// const Otpcode = () => {
//   const [otp, setOtp] = useState(new Array(5).fill(""));
//   const navigate = useNavigate();

//   const handleChange = (element, index) => {
//     if (isNaN(element.value)) return;
//     const otpArray = [...otp];
//     otpArray[index] = element.value;
//     setOtp(otpArray);

//     // Move to the next input box automatically
//     if (element.nextSibling) {
//       element.nextSibling.focus();
//     }
//   };

//   const clickHandler = (event) => {
//     event.preventDefault();
//     // You can validate OTP here
//     console.log("Entered OTP: ", otp.join(""));
//     navigate("/Passwordreset"); // Replace '/success' with the desired route
//   };

//   return (
//     <div className='header'>
//       <div className='arrow' onClick={() => navigate(-1)}><IoIosArrowBack /></div>
//       <div className='headingh2'>Check your email</div>
//       <div className='emailheading'>We sent a reset link to alpha...@gmail.com</div>
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

//       <button type='button' className='submit-btn' onClick={clickHandler}>
//         Verify Code
//       </button>
//       {/* havenot */}
//       <div className='Resend'>
//            <div className='Resend1'>Haven't got the email yet? <Link to="" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>Resend email</Link>
//            </div>
//       </div>
//     </div>
//   );
// };

// export default Otpcode;

// jan 2 new code api integration code
// import React, { useState } from 'react';
// import './Otpcode.css';
// import { IoIosArrowBack } from "react-icons/io";
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Otpcode = () => {
//   const [otp, setOtp] = useState(new Array(5).fill(""));
//   const [email, setEmail] = useState(''); // Capture email from ForgotPassword
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const navigate = useNavigate();

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
//       const response = await axios.post('http://localhost:5001/forgot/verifyCode', {
//         email,
//         code: otp.join("")
//       });
//       setSuccess(response.data.msg);
//       navigate("/Passwordreset");
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
    // Get the token from the location state
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
      const response = await axios.post('http://localhost:5001/forgot/verifyCode', {
        email,         // Send the email captured in state
        code: otp.join("")
      });
      setSuccess(response.data.msg);

       // Store token in state after successful OTP verification
       const  {token}  = response.data;  // Assuming the token is returned from the API response
       setToken(token);

      navigate("/Passwordreset", { state: { token } });
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

