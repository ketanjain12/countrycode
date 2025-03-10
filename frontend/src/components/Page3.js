// Page3.js
import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Page3 = () => {
  const navigate = useNavigate();

  const handleKeyDown =(e)=>{
    if(e.key === 'Enter' || e.key === 'ArrowRight'){
      navigate('/signup')
    }
  };
  useEffect(()=>{
    window.addEventListener('keydown',handleKeyDown);
    return()=>{
      window.removeEventListener('keydown',handleKeyDown)
    };
  },[]);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh', // Full viewport height to vertically center content
      backgroundColor: '#f8f9fa', // Light background color for better contrast
      margin: '0', // Remove default margin
    }}
  >

<div style={{
         textAlign: 'center',
         padding: '40px',
         border: '1px solid #ddd', // Thin border with a light gray color
         borderRadius: '15px', // Rounded corners for a polished look
         boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)', // Smooth shadow for depth
         backgroundColor: 'white', // White background for the content box
         maxWidth: '600px', // Set a maximum width for the content box
         width: '100%', // Make it responsive
       }}
     >
      <h1 style={{ color: '#212529', marginBottom: '20px' }}>Ready to Join Us?</h1>
     
      <p style={{ color: '#495057', marginBottom: '30px' }}>Sign up to access exclusive content and become part of our community.</p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSevwU1UKOWbqnMjwXbVTD1Q8NLta7PxHs1jw&s" // Replace with a real image URL
        alt="Join Us"
        style={{ width: '100%', maxWidth: '200px', borderRadius: '10px', marginBottom: '20px' }}
      />
      <br></br>
      <button 
          // onClick={goToSignUp} 
          onClick={()=>navigate('/signup')}
           style={{
    padding: '12px 30px',         
    fontSize: '18px',             // Larger font size for more emphasis
    backgroundColor: 'green',    
    color: 'white',              
    border: 'none',               // Remove border for a cleaner look
    borderRadius: '30px',         // Rounded corners (goal-like shape)
    cursor: 'pointer',            // Change cursor to pointer on hover
    fontWeight: 'bold',            // Bold text
    transition: 'all 0.3s ease',  // Smooth transition for hover effects
  }}
  onMouseEnter={(e) => e.target.style.backgroundColor = '#28a745'} // Hover effect (slightly darker green)
  onMouseLeave={(e) => e.target.style.backgroundColor = 'green'}   // Reset to original color
>
  Next
</button>
    </div>
    </div>
  );
};

export default Page3;
