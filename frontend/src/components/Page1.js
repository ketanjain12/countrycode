// Page1.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Page1 = () => {
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === 'ArrowRight') {
      navigate('/page2'); // Navigate to Page 2
    }
  };

  useEffect(() => {
    // Add event listener for keydown
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      margin: '0',
    }}>
      <div style={{
        textAlign: 'center',
        padding: '40px',
        border: '1px solid #ddd',
        borderRadius: '15px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
        maxWidth: '600px',
        width: '100%',
      }}>
        <h1 style={{ color: '#212529', marginBottom: '20px' }}>Welcome to Our Amazing Website!</h1>
        <p style={{ color: '#495057', marginBottom: '30px' }}>
          Discover an incredible experience as you navigate through our pages.
        </p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7gquXGrYMj2Ls1vLsmgKCiS0rmyat__krUA&s"
          alt="Welcome"
          style={{ width: '100%', maxWidth: '200px', borderRadius: '10px', marginBottom: '20px' }}
        />
        <br></br>
        <button
          onClick={() => navigate('/page2')}
          style={{
            padding: '12px 30px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#28a745'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page1;
