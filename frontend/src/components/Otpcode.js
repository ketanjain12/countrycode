import React, { useState } from 'react';
import './Otpcode.css';
import { IoIosArrowBack } from "react-icons/io";
import { Link,useNavigate } from 'react-router-dom';

const Otpcode = () => {
  const [otp, setOtp] = useState(new Array(5).fill(""));
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    const otpArray = [...otp];
    otpArray[index] = element.value;
    setOtp(otpArray);

    // Move to the next input box automatically
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const clickHandler = (event) => {
    event.preventDefault();
    // You can validate OTP here
    console.log("Entered OTP: ", otp.join(""));
    navigate("/Passwordreset"); // Replace '/success' with the desired route
  };

  return (
    <div className='header'>
      <div className='arrow' onClick={() => navigate(-1)}><IoIosArrowBack /></div>
      <div className='headingh2'>Check your email</div>
      <div className='emailheading'>We sent a reset link to alpha...@gmail.com</div>
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

      <button type='button' className='submit-btn' onClick={clickHandler}>
        Verify Code
      </button>
      {/* havenot */}
      <div className='Resend'>
           <div className='Resend1'>Haven't got the email yet? <Link to="" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>Resend email</Link>
           </div>
      </div>
    </div>
  );
};

export default Otpcode;
