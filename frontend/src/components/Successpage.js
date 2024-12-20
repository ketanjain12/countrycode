import React from 'react';
import './Otpcode.css';
import { useNavigate } from 'react-router-dom';
import { MdOutlineDone } from "react-icons/md";

const SuccessPage = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/signin"); // Replace '/login' with your desired route
    };

    return (
        <div className="passwordresetheader">
            <div className="success-icon">
                <span className='success-icon1'><MdOutlineDone /></span> {/* Success checkmark */}
            </div>
            <h2 className="success-title">Successful</h2>
            <p className="success-message">
                Congratulations! Your password has been changed. Click continue to login.
            </p>
            <button className="success-button" onClick={handleButtonClick}>
               click for login
            </button>
        </div>
    );
};

export default SuccessPage;
