// import React from "react";
// import "./AboutUs.css";

// const AboutUs = () => {
//   return (
//     <div className="aboutus-wrapper">
//       {/* Background Section */}
//       <div className="aboutus-background">
//         {/* Blue circular background */}
//         <div className="background-circle"></div>
//         {/* Skyblue big box */}
//         <div className="background-skybox"></div>
//       </div>

//       {/* Main Content Section */}
//       <div className="aboutus-container">
//         {/* Left Section: Image */}
//         <div className="aboutus-image-section">
//           <div className="aboutus-image-wrapper">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4i4z_q2kC_1DsSkbWED64N3WAeaG1L9WwnQ&s"
//               alt="About Us"
//               className="aboutus-image"
//             />
//           </div>
//         </div>

//         {/* Right Section: Welcome Page */}
//         <div className="aboutus-welcome-section">
//           <h1 className="welcome-title">Welcome to AboutMe</h1>
//           <p className="welcome-description">
//           My name is Ketan Jain, and I am from Tendukheda. I completed my 10th and 12th studies with a strong academic background and graduated with a B.Tech degree in 2024. Throughout my academic journey, I developed a keen interest in technology and software development, which inspired me to work on various projects.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

// new code
// AboutUs.js
import React from "react";
import "./AboutUs.css"; // Make sure your CSS file is in the same directory

const AboutUs = () => {
  return (
    <div className="about-wrapper">
      <div className="about-left">
        <div className="about-left-content">
          <div>
            <div className="shadow">
              <div className="about-img">
                <img
                  src="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png"
                  alt="about image"
                />
              </div>
            </div>

            <h2>Ketan Jain</h2>
            <h3>Mern Stack Developer</h3>
          </div>

          <ul className="icons">
            <li>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="about-right">
        <h1>
          Hello<span>!</span>
        </h1>
        <h2>Here's who I am & what I do</h2>
        <div className="about-btns">
          <button type="button" className="btn btn-pink">
            Resume / CV
          </button>
          <button
            type="button"
            className="btn btn-white"
            onClick={() =>
              window.open(
                "https://github.com/ketanjain12",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            GitHub
          </button>
        </div>

        <div className="about-para">
          <p>
            My name is Ketan Jain, and I am from Tendukheda. I completed my 10th
            and 12th studies with a strong academic background and graduated
            with a B.Tech degree in 2024. Throughout my academic journey, I
            developed a keen interest in technology and software development,
            which inspired me to work on various projects.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus iure
            tempora alias laudantium sapiente impedit!
          </p>
        </div>
        <div className="credit">
          Made with <span style={{ color: "tomato" }}>❤</span> by{" "}
          <a href="https://github.com/ketanjain12" target="_blank">
            Ketan Jain
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

// CSS

// .aboutus-wrapper {
//   position: relative;
//   width: 100%;
//   height: 100vh;
//   background-color: #f0f8ff;
//   overflow: hidden;
// }

// /* Background Design */
// .aboutus-background {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: -1;
// }

// /* Blue circular background */
// .background-circle {
//   position: absolute;
//   top: -200px;
//   left: -150px;
//   width: 600px;
//   height: 600px;
//   background: #007bff;
//   border-radius: 50%;
//   z-index: -1;
// }

// /* Skyblue big box */
// .background-skybox {
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 300px;
//   background: #add8e6;
//   z-index: -2;
// }

// /* Main Content Container */
// .aboutus-container {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   height: 100%;
//   padding: 0 80px;
// }

// /* Left Section: Image with styled background */
// .aboutus-image-section {
//   flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .aboutus-image-wrapper {
//   position: relative;
//   width: 300px;
//   height: 400px;
//   background: linear-gradient(to bottom, #ffebee, #fce4ec);
//   border-radius: 15px;
//   overflow: hidden;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//   clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
// }

// .aboutus-image {
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }

// /* Right Section: Welcome Text */
// .aboutus-welcome-section {
//   flex: 1;
//   text-align: left;
//   padding: 20px 40px;
//   background-color: rgba(255, 255, 255, 0.9);
//   border-radius: 15px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// }

// .welcome-title {
//   font-size: 36px;
//   color: #333;
//   font-weight: bold;
//   margin-bottom: 20px;
// }

// .welcome-description {
//   font-size: 18px;
//   color: #555;
//   line-height: 1.6;
// }

// /* Responsive Design */
// @media (max-width: 768px) {
//   .aboutus-container {
//     flex-direction: column;
//     text-align: center;
//     padding: 20px;
//   }

//   .aboutus-welcome-section {
//     margin-top: 20px;
//   }
// }
