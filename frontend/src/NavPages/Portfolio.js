// import React, { useState } from "react";
// import "./Portfolio.css";

// const Portfolio = () => {
//   const [selectedImageIndex, setSelectedImageIndex] = useState(null);

//   const handleSelect = (index) => {
//     setSelectedImageIndex(index);
//   };

//   const handleDeselect = () => {
//     setSelectedImageIndex(null);
//   };

//   return (
//     <div>
//       <h2 className="title">Category</h2>
//       <div className="image-section">
//         {/* Image 1 */}
//         <figure
//           className={`image-wrapper ${
//             selectedImageIndex === 0 ? "selected" : ""
//           }`}
//           onClick={() =>
//             selectedImageIndex === 0 ? handleDeselect() : handleSelect(0)
//           }
//         >
//           <img
//             src="https://wallpapers.com/images/high/doraemon-standing-alone-t58bgwgoqmnz3qa3.webp"
//             className="image"
//             alt="Image 1"
//           />
//           <figcaption className="image-text">Doraemon 1</figcaption>
//         </figure>

//         {/* Image 2 */}
//         <figure
//           className={`image-wrapper ${
//             selectedImageIndex === 1 ? "selected" : ""
//           }`}
//           onClick={() =>
//             selectedImageIndex === 1 ? handleDeselect() : handleSelect(1)
//           }
//         >
//           <img
//             src="https://wallpapers.com/images/high/doraemon-standing-alone-t58bgwgoqmnz3qa3.webp"
//             className="image"
//             alt="Image 2"
//           />
//           <figcaption className="image-text">Doraemon 2</figcaption>
//         </figure>

//         {/* Image 3 */}
//         <figure
//           className={`image-wrapper ${
//             selectedImageIndex === 2 ? "selected" : ""
//           }`}
//           onClick={() =>
//             selectedImageIndex === 2 ? handleDeselect() : handleSelect(2)
//           }
//         >
//           <img
//             src="https://wallpapers.com/images/high/doraemon-standing-alone-t58bgwgoqmnz3qa3.webp"
//             className="image"
//             alt="Image 3"
//           />
//           <figcaption className="image-text">Doraemon 3</figcaption>
//         </figure>

//         {/* Image 4 */}
//         <figure
//           className={`image-wrapper ${
//             selectedImageIndex === 3 ? "selected" : ""
//           }`}
//           onClick={() =>
//             selectedImageIndex === 3 ? handleDeselect() : handleSelect(3)
//           }
//         >
//           <img
//             src="https://wallpapers.com/images/high/doraemon-standing-alone-t58bgwgoqmnz3qa3.webp"
//             className="image"
//             alt="Image 4"
//           />
//           <figcaption className="image-text">Doraemon 4</figcaption>
//         </figure>

//         {/* Image 5 */}
//         <figure
//           className={`image-wrapper ${
//             selectedImageIndex === 4 ? "selected" : ""
//           }`}
//           onClick={() =>
//             selectedImageIndex === 4 ? handleDeselect() : handleSelect(4)
//           }
//         >
//           <img
//             src="https://wallpapers.com/images/high/doraemon-standing-alone-t58bgwgoqmnz3qa3.webp"
//             className="image"
//             alt="Image 5"
//           />
//           <figcaption className="image-text">Doraemon 5</figcaption>
//         </figure>

//         {/* Image 6 */}
//         <figure
//           className={`image-wrapper ${
//             selectedImageIndex === 5 ? "selected" : ""
//           }`}
//           onClick={() =>
//             selectedImageIndex === 5 ? handleDeselect() : handleSelect(5)
//           }
//         >
//           <img
//             src="https://wallpapers.com/images/high/doraemon-standing-alone-t58bgwgoqmnz3qa3.webp"
//             className="image"
//             alt="Image 6"
//           />
//           <figcaption className="image-text">Doraemon 6</figcaption>
//         </figure>

//         {/* Image 7 */}
//         <figure
//           className={`image-wrapper ${
//             selectedImageIndex === 6 ? "selected" : ""
//           }`}
//           onClick={() =>
//             selectedImageIndex === 6 ? handleDeselect() : handleSelect(6)
//           }
//         >
//           <img
//             src="https://wallpapers.com/images/high/doraemon-standing-alone-t58bgwgoqmnz3qa3.webp"
//             className="image"
//             alt="Image 7"
//           />
//           <figcaption className="image-text">Doraemon 7</figcaption>
//         </figure>

//         {/* Image 8 */}
//         <figure
//           className={`image-wrapper ${
//             selectedImageIndex === 7 ? "selected" : ""
//           }`}
//           onClick={() =>
//             selectedImageIndex === 7 ? handleDeselect() : handleSelect(7)
//           }
//         >
//           <img
//             src="https://wallpapers.com/images/high/doraemon-standing-alone-t58bgwgoqmnz3qa3.webp"
//             className="image"
//             alt="Image 8"
//           />
//           <figcaption className="image-text">Doraemon 8</figcaption>
//         </figure>
//       </div>
//     </div>
//   );
// };
// css file
// * {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//   }

//   .title {
//     color: aqua;
//     text-align: center;
//     margin-top: 20px;
//   }

//   .image-section {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr); /* 4 images per row */
//     margin: 0 5px; /* 5px gap on both left and right sides */
//     box-sizing: border-box; /* Include padding and border in the total width */
//     width: 500px;
//     height: 440px;
//     margin-left: 500px;
//     margin-top: 100px;
//     gap: 15px;

//   }

//   .image-wrapper {
//     cursor: pointer; /* Pointer cursor to indicate clickable items */
//     position: relative;
//     border-radius: 10px;
//     border: 1px solid transparent ;
//   }

//   .image {
//     width: 100%;
//     height: 200px;
//     object-fit: cover;
//     border-radius: 0px;
//     transition: transform 0.3s; /* Smooth hover effect */
//     padding: 5px;

//   }

//   .image:hover {
//     transform: scale(1.05); /* Scale the image slightly on hover */
//   }

//   .image-text {
//     margin-top: -13px;
//     text-align: center;
//     background-color: transparent;
//     transition: background-color 0.3s;
//     padding: 5px;
//     border-bottom-left-radius: 10px;  /* Top left corner radius */
//     border-bottom-right-radius: 10px; /* Top right corner radius */
//   }

//   .image-wrapper:hover .image-text {
//     background-color: #93c572; /* Pistachio green on hover */
//   }

//   .image-wrapper.selected .image-text {
//     background-color: #4caf50; /* Dark green when selected */
//   }
// export default Portfolio;

// new code
// Creater.js
import React from "react";
import "./Portfolio.css"; // Import the CSS file

const Portfolio = () => {
  return (
    <div className="container">
      <div className="title">
      <h2>Team Profiles</h2>
      <div>"We are a group of 4 members. If you’d like to learn more about any of us, feel free to explore our social media accounts.
        <br></br> We have included links to each member’s social media profile below every post."</div>
        </div>
      <div className="main">
        <div className="g" id="g1">
          <div className="image">
            <img
              src="https://cdn.pixabay.com/photo/2024/07/26/15/04/man-8923758_1280.png"
              alt="image"
            />
          </div>
          <span className="name">Ketan Jain</span>
          <span className="post">Team lead</span>
          <span className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            optio, cumque repellendus inventore nam quae ratione soluta cum
            facere asperiores nulla nobis odio! Nobis officiis eligendi quam
            minus quos deleniti.
          </span>
          <div className="links">
            <a href="#">
              <i className="bx bxl-facebook-circle"></i>
            </a>
            <a href="#">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram-alt"></i>
            </a>
          </div>
        </div>
        <div className="g" id="g2">
          <div className="image">
            <img
              src="https://cdn.pixabay.com/photo/2024/07/26/15/04/man-8923758_1280.png"
              alt="image"
            />
          </div>
          <span className="name">Ketan Jain</span>
          <span className="post">Team lead</span>
          <span className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            optio, cumque repellendus inventore nam quae ratione soluta cum
            facere asperiores nulla nobis odio! Nobis officiis eligendi quam
            minus quos deleniti.
          </span>
          <div className="links">
            <a href="#">
              <i className="bx bxl-facebook-circle"></i>
            </a>
            <a href="#">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram-alt"></i>
            </a>
          </div>
        </div>
        <div className="g" id="g3">
          <div className="image">
            <img
              src="https://cdn.pixabay.com/photo/2024/07/26/15/04/man-8923758_1280.png"
              alt="image"
            />
          </div>
          <span className="name">Ketan Jain</span>
          <span className="post">Team lead</span>
          <span className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            optio, cumque repellendus inventore nam quae ratione soluta cum
            facere asperiores nulla nobis odio! Nobis officiis eligendi quam
            minus quos deleniti.
          </span>
          <div className="links">
            <a href="#">
              <i className="bx bxl-facebook-circle"></i>
            </a>
            <a href="#">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram-alt"></i>
            </a>
          </div>
        </div>
        <div className="g" id="g4">
          <div className="image">
            <img
              src="https://cdn.pixabay.com/photo/2024/07/26/15/04/man-8923758_1280.png"
              alt="image"
            />
          </div>
          <span className="name">Ketan Jain</span>
          <span className="post">Team lead</span>
          <span className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            optio, cumque repellendus inventore nam quae ratione soluta cum
            facere asperiores nulla nobis odio! Nobis officiis eligendi quam
            minus quos deleniti.
          </span>
          <div className="links">
            <a href="#">
              <i className="bx bxl-facebook-circle"></i>
            </a>
            <a href="#">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram-alt"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="credit">
        Made with <span>❤ </span>by{" "}
        <a href="https://www.learningrobo.com/">learningrobo</a>
      </div>
    </div>
  );
};

export default Portfolio;
