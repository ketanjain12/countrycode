
// jan 2 new code api integration code
import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import './Forgotpassword.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Forgotpassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const clickHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/forgot/forgotPassword', { email });
      setSuccess(response.data.msg);
      navigate("/Otpcode", { state: { email } }); // added state 
    } catch (error) {
      setError(error.response?.data?.msg || 'Something went wrong',error.message);
    }
  };

  return (
    <div className='header'>
      <div className='arrow'><IoIosArrowBack /></div>
      <div className='headingh2'>Forgot Password</div>
      <div className='emailheading'>Please enter your email to reset the password</div>

      <form className='form'>
        <div className='form-group'>
          <label htmlFor='email'>Your Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {error && <p className='error'>{error}</p>}
        {success && <p className='success'>{success}</p>}
        <button type='button' className='submit-btn' onClick={clickHandler}>
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default Forgotpassword;
