import React, { useState } from "react";
import "./Reviews.css";


const reviewsData = [
 {
   name: "Ketan Jain",
   place: "Newyork",
   rating: 1.5,
   desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati eligendi suscipit illum officia ex eos.",
   imgSrc:
     "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__480.png",
 },
 {
   name: "2",
   place: "Paris",
   rating: 2,
   desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati eligendi suscipit illum officia ex eos.",
   imgSrc:
     "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__480.png",
 },
 {
   name: "3",
   place: "New York",
   rating: 3,
   desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati eligendi suscipit illum officia ex eos.",
   imgSrc:
     "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__480.png",
 },
 {
   name: "4",
   place: "Tokyo",
   rating: 4.5,
   desc: "Great experience, highly recommend! Everything was beyond expectations.",
   imgSrc:
     "https://cdn.pixabay.com/photo/2016/03/31/18/20/businessman-1294474__480.png",
 },
 {
   name: "5",
   place: "Los Angeles",
   rating: 4,
   desc: "Good service, but there is room for improvement in certain areas.",
   imgSrc:
     "https://cdn.pixabay.com/photo/2017/10/18/17/27/camera-2869889__480.png",
 },
 {
   name: "6",
   place: "Sydney",
   rating: 5,
   desc: "Absolutely loved the experience! Will definitely come back again.",
   imgSrc:
     "https://cdn.pixabay.com/photo/2015/04/20/13/17/girl-731891__480.png",
 },
 {
   name: "7",
   place: "Dubai",
   rating: 1.5,
   desc: "Not happy with the service. Needs significant improvement.",
   imgSrc:
     "https://cdn.pixabay.com/photo/2016/03/31/20/11/man-1295365__480.png",
 },
 {
   name: "8",
   place: "London",
   rating: 2.5,
   desc: "Average experience, nothing special. Could be better.",
   imgSrc:
     "https://cdn.pixabay.com/photo/2016/03/31/20/11/girl-1295368__480.png",
 },
 {
   name: "9",
   place: "Singapore",
   rating: 3.5,
   desc: "Pretty decent overall, with a few minor drawbacks.",
   imgSrc:
     "https://cdn.pixabay.com/photo/2017/02/23/13/05/person-2091742__480.png",
 },
 {
   name: "10",
   place: "Rome",
   rating: 4.5,
   desc: "Loved it! The atmosphere and service were impeccable.",
   imgSrc:
     "https://cdn.pixabay.com/photo/2015/03/26/09/54/beautiful-690772__480.png",
 },
 {
   name: "11",
   place: "Hong Kong",
   rating: 5,
   desc: "Outstanding experience from start to finish.",
   imgSrc:
     "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814051__480.png",
 },
 {
   name: "12",
   place: "Barcelona",
   rating: 2,
   desc: "Not up to the mark. Expected a lot more.",
   imgSrc:
     "https://cdn.pixabay.com/photo/2016/11/22/19/08/girl-1850047__480.jpg",
 },
 {
   name: "13",
   place: "Toronto",
   rating: 3,
   desc: "Average, but not bad. The staff were friendly.",
   imgSrc:
     "https://cdn.pixabay.com/photo/2015/09/02/12/46/man-918979__480.jpg",
 },
 {
   name: "14",
   place: "Amsterdam",
   rating: 5,
   desc: "A perfect experience! Couldn’t ask for anything more.",
   imgSrc:
     "https://cdn.pixabay.com/photo/2018/11/13/21/44/instagram-3814057__480.png",
 },
 {
   name: "15",
   place: "Cape Town",
   rating: 4,
   desc: "Enjoyable experience, and the scenery was beautiful.",
   imgSrc:
     "https://cdn.pixabay.com/photo/2017/11/14/03/20/adult-2942298__480.jpg",
 },
 {
   name: "16",
   place: "Mumbai",
   rating: 1.5,
   desc: "Disappointed. The service was not what I expected.",
   imgSrc:
     "https://cdn.pixabay.com/photo/2017/04/30/18/58/lady-2270721__480.jpg",
 },
 {
   name: "17",
   place: "San Francisco",
   rating: 3.5,
   desc: "Good, but could use a bit more attention to detail.",
   imgSrc:
     "https://cdn.pixabay.com/photo/2017/11/06/09/53/man-2923538__480.jpg",
 },
 {
   name: "18",
   place: "Berlin",
   rating: 2.5,
   desc: "Nothing special, but not terrible either. Very average.",
   imgSrc:
     "https://files.oaiusercontent.com/file-Dv5RBNvcphFlIRXUajZKOLXa?se=2024-11-12T12%3A45%3A53Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db2e08854-faba-454c-85cb-4208c67731d1.webp&sig=sz9cltINKGnHfTwMa1v4F2e4cepZljz7mlhxtQyY5yI%3D",
 },
 {
   name: "19",
   place: "Bangkok",
   rating: 5,
   desc: "The best experience of my life! Highly recommended.",
   imgSrc:
     "https://files.oaiusercontent.com/file-Dv5RBNvcphFlIRXUajZKOLXa?se=2024-11-12T12%3A45%3A53Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db2e08854-faba-454c-85cb-4208c67731d1.webp&sig=sz9cltINKGnHfTwMa1v4F2e4cepZljz7mlhxtQyY5yI%3D",
 },
 {
   name: "20",
   place: "Seoul",
   rating: 4,
   desc: "Enjoyable and fun. I would definitely come back.Enjoyable and fun. I would definitely come back.Enjoyable and fun. I would definitely come back.Enjoyable and fun. I would definitely come back.Enjoyable and fun. I would definitely come back.Enjoyable and fun. I would definitely come back.Enjoyable and fun. I would definitely come back.Enjoyable and fun. I would definitely come back.Enjoyable and fun. I would definitely come back.Enjoyable and fun. I would definitely come back.Enjoyable and fun. I would definitely come back.Enjoyable and fun. I would definitely come back.Enjoyable and fun. I would definitely come back.Enjoyable and fun. I would definitely come back.Enjoyable and fun. I would definitely come back.Enjoyable and fun. I would definitely come back.Enjoyable and fun. I would definitely come back.Enjoyable and fun. I would definitely come back.Enjoyable and fun. I would definitely come back.Enjoyable and fun. I would definitely come back.Enjoyable and fun. I would definitely come back.Enjoyable and fun. I would definitely come back.Enjoyable and fun. I would definitely come back.Enjoyable and fun. I would definitely come back.Enjoyable and fun. I would definitely come back.",
   imgSrc:
     "https://wallpapers.com/images/high/doraemon-standing-alone-t58bgwgoqmnz3qa3.webp",
 },
];


// add more dtaa as needed


function Reviews() {
 const [currentIndex, setCurrentIndex] = useState(0);
 const [selectedRating, setSelectedRating] = useState("all"); // State for rating filter


 // Filter the reviews based on the selected rating
 const filteredReviews =
   selectedRating === "all"
     ? reviewsData
     : reviewsData.filter(
         (review) =>
           review.rating === parseFloat(selectedRating) ||
           review.rating === parseFloat(selectedRating) + 0.5
       );


 const handlePrev = () => {
   setCurrentIndex((prevIndex) =>
     prevIndex === 0 ? filteredReviews.length - 1 : prevIndex - 1
   );
 };


 const handleNext = () => {
   setCurrentIndex((prevIndex) =>
     prevIndex === filteredReviews.length - 1 ? 0 : prevIndex + 1
   );
 };


 return (
   <div className="rev-section">
     <div className="Reviewtitle">
       <h2 className="Reviewtitle1">Website</h2>
       <h2 className="Reviewtitle2">Reviews</h2>
     </div>


     {/* Rating Filter */}
     <div className="filter-section">
       <label htmlFor="ratingFilter">Filter by Rating: </label>
       <select
         id="ratingFilter"
         value={selectedRating}
         onChange={(e) => setSelectedRating(e.target.value)}
         className="rating1"
       >
         <option value="all">All Ratings</option>
         <option value="1">1 & 1.5 Stars</option>
         <option value="2">2 & 2.5 Stars</option>
         <option value="3">3 & 3.5 Stars</option>
         <option value="4">4 & 4.5 Stars</option>
         <option value="5">5 Stars</option>
       </select>
     </div>


     {filteredReviews.length > 0 ? (
       <div className="reviews-slider">
         <button className="slider-btn left" onClick={handlePrev}>
           &#9664;
         </button>
         <div className="review">
           <div className="head-review">
             <img
               src={filteredReviews[currentIndex].imgSrc}
               alt={filteredReviews[currentIndex].name}
               width="250px"
             />
           </div>
           <div className="body-review">
             <div className="name-review">
               {filteredReviews[currentIndex].name}
             </div>
             <div className="place-review">
               {filteredReviews[currentIndex].place}
             </div>
             <div className="rating">
               {Array(Math.floor(filteredReviews[currentIndex].rating))
                 .fill()
                 .map((_, index) => (
                   <i key={index} className="fas fa-star"></i>
                 ))}
               {filteredReviews[currentIndex].rating % 1 !== 0 && (
                 <i className="fas fa-star-half"></i>
               )}
             </div>
             <div className="desc-review">
               {filteredReviews[currentIndex].desc}
             </div>
           </div>
         </div>
         <button className="slider-btn right" onClick={handleNext}>
           &#9654;
         </button>
       </div>
     ) : (
       <p className="noreview">
         No reviews available for the selected rating.
       </p>
     )}


     <div className="credit">
       Made with <span style={{ color: "tomato" }}>❤</span> by{" "}
       <a href="https://www.learningrobo.com/">Ketan Jain</a>
     </div>
   </div>
 );
}


export default Reviews;
