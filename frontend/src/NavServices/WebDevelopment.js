// import React from 'react';
// import './WebDevelopment.css';

// function App() {
//   return (
//     <div className="container">
//       <div className="header">
//         <h1>Professional Web Development Services</h1>
//         <p>
//           We are a reliable and affordable digital agency and talent network. We channel creativity,
//           colors, copy and code to help our clients with better branding.
//         </p>
//         <span className="image-credit">Image from Freepik</span>
//       </div>

//       <div className="services">
//         <div className="service-card">
//           <div className="icon">📄</div>
//           <h3>BRANDING</h3>
//         </div>
//         <div className="service-card">
//           <div className="icon">🏅</div>
//           <h3>QUALITY</h3>
//         </div>
//         <div className="service-card">
//           <div className="icon">🎨</div>
//           <h3>DESIGN</h3>
//         </div>
//         <div className="service-card">
//           <div className="icon">✈️</div>
//           <h3>CREATIVITY</h3>
//         </div>
//       </div>

//       <div className="button-container">
//         <button className="contact-btn">Contact Us</button>
//       </div>
//     </div>
//   );
// }

// export default App;

// other code
import React from 'react';
import './WebDevelopment.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="main-container">
      <div className="header">
        <h1>Professional Web Development Services With KJ</h1>
        <p>
          We are a reliable and affordable digital agency and talent network. We channel creativity,
          colors, copy and code to help our clients with better branding.
        </p>
        <span className="image-credit">Image from Backend</span>
      </div>

      <div className="services-container">
        <div className="service-card">
          <div className="icon">
            <img src="https://img.icons8.com/ios-filled/50/000000/branding.png" alt="Branding Icon" />
          </div>
          <h3>BRANDING</h3>
        </div>
        <div className="service-card">
          <div className="icon">
            <img src="https://img.icons8.com/ios-filled/50/000000/medal.png" alt="Quality Icon" />
          </div>
          <h3>QUALITY</h3>
        </div>
        <div className="service-card">
          <div className="icon">
            <img src="https://img.icons8.com/ios-filled/50/000000/paint-palette.png" alt="Design Icon" />
          </div>
          <h3>DESIGN</h3>
        </div>
        <div className="service-card">
          <div className="icon">
            <img src="https://img.icons8.com/ios-filled/50/000000/paper-plane.png" alt="Creativity Icon" />
          </div>
          <h3>CREATIVITY</h3>
        </div>
      </div>

      <div className="button-container">
        <button className="contact-button"><Link to="/ContactPage">Contact Us</Link></button>
      </div>
      
    </div>
  );
}

export default App;
