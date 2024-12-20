// import React,{useState} from 'react'
// import './Otpcode.css'
// import { IoIosArrowBack } from "react-icons/io";
// import { useNavigate } from 'react-router-dom';
//  const Passwordreset = () => {

    
//     const clickHandler = (event) => {
//         event.preventDefault();
//         // You can validate OTP here
//         navigate("/Setnewpassword"); // Replace '/success' with the desired route
//       };
    
//     const navigate=useNavigate();
//   return (
//     <div className='passheader'>
//     <div className='arrow1' onClick={() => navigate(-1)}><IoIosArrowBack /></div>
//     <div className='setpass1'>Password reset</div>
//     <div className='setpass2'>Your password has been successfully reset.</div>
//     <div className='setpass3'>click confirm to set a new password</div>
   
//     <button type='button' className='submit-btn' onClick={clickHandler}>
//         Confirm
//       </button>
//     </div>
//   )
// }
// export default Passwordreset;

import React, { useState } from 'react';
import './Otpcode.css'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Passwordreset = () => {
    const navigate = useNavigate();
     const clickHandler=(event)=>{
        event.preventDefault();
        navigate("/Setnewpassword")
     }

    return (
        <div className='passwordresetheader'>
            <div className='passresetarrow1' onClick={() => navigate(-1)}><IoIosArrowBack /></div>
            <div className='passheading1'>Password reset</div>
            <div className='passheading2'>Your password has been successfully reset.</div>
            <div className='passheading3'>click confirm to set a new password</div>
            
                <button type='button' className='submit-btn' onClick={clickHandler}>
                    Confirm
                </button>
            </div>
       
    );
};

export default Passwordreset;
