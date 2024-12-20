
import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="main-container1">
        {/* left side */}
      <div className="header1">
        <h2>Crack the Code to Success with CodeHelp</h2>
        <p>
          Elevate your programming skills, solve challenges, and unlock the
          world of coding possibilities.
        </p>
        <div className="buttons1">
          <button className="view-courses1">View Courses</button>
          <button className="watch-video1">Watch Video <span>Live</span></button>
        </div>
        <div className="student-count1">
          <div className="avatars1">
            {/* Placeholder for avatars */}
            <img src="./images/profile.jpg" alt="avatar1" />
            <img src="./images/back.jpg" alt="avatar2" />
            <img src="./images/profile.jpg" alt="avatar3" />
          </div>
          <p>70,000+ Happy Students</p>
        </div>
      </div>
      {/* right section */}
      <div className="menu1">
        <button>Free Web Dev</button>
        <button>Quick Compiler</button>
        <button>Tutorials</button>
        <button>Articles</button>
        <button>Dev Challenges</button>
        <button>Interview Experiences</button>
        <button>Mock Tests</button>
        <button>Core CS Subjects</button>
      </div>
    </div>
  );
}

export default Home;
