
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { MdDriveFileRenameOutline, MdOutlineMailOutline, MdOutlinePassword } from 'react-icons/md';
import { FaPhoneAlt, FaFacebookF, FaGoogle } from 'react-icons/fa';
import Navbar from '../Dashboard/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handlePhoneChange = (value) => setPhone(value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5001/api/signup', {
        name,
        email,
        phoneNo: phone.replace(/\D/g, ''),
        password,
      });
      // alert.success('Signup successful!');
      if (response.status === 201) {
        toast.success('Signup successful!');
        setName('');
        setEmail('');
        setPhone('');
        setPassword('');
        navigate('/signin');
      } else {
        toast.error(response.data.message || 'Signup failed. Please try again.');
      }
    } catch (error) {
      console.log('error', error.message);
      toast.error(error.response?.data?.message || 'Error connecting to server. Please try again later.');
    }
  };

  const softwareHandler = () => {
    alert('Want to go to the Sign In page?');
    navigate('/signin');
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        {/* Name */}
        <div className="form-group">
          <label>Name</label>
          <div className="input-with-icon">
            <MdDriveFileRenameOutline className="input-icon" />
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <div className="input-with-icon">
            <MdOutlineMailOutline className="input-icon" />
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label>Phone Number</label>
          <div className="input-with-icon2">
            <FaPhoneAlt className="input-icon2" />
            <PhoneInput
              country={'in'}
              value={phone}
              onChange={handlePhoneChange}
              search
              enableSearch={true}
              searchPlaceholder="Search for country..."
              disableSearchIcon={true}
              
              dropdownStyle={{
                maxHeight: '280px',
                paddingLeft: '3px',
                overflowY: 'auto',
              }}
              className="phone-dropdown2"
            />
          </div>
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password</label>
          <div className="input-with-icon password-input-container">
            <MdOutlinePassword className="input-icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              maxLength={8}
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

        <button type="submit" className="auth-button">
          Sign Up
        </button>

        <div className="social-auth">
          <p>Or sign up with:</p>
          <div className="social-icons" onClick={softwareHandler}>
            <FaFacebookF className="social-icon" />
            <FaGoogle className="social-icon" />
          </div>
        </div>

        <p className="auth-footer">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </form>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
};

export default Signup;


