import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import './Forgotpassword.css';
import { useNavigate } from 'react-router-dom';

const Forgotpassword = () => {
  const navigate = useNavigate();

  const clickHandler = (event) => {
    event.preventDefault(); // Prevent form submission
    navigate("/Otpcode");
  };

  return (
    <div className='header'>
      <div className='arrow'><IoIosArrowBack /></div>
      <div className='headingh2'>Forgot Password</div>
      <div className='emailheading'>Please enter your email to reset the password</div>

      {/* Form */}
      <form className='form'>
        <div className='form-group'>
          <label htmlFor='email'>Your Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email'
            required
          />
        </div>
        <button type='button' className='submit-btn' onClick={clickHandler}>
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default Forgotpassword;
