import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa"; // Importing icons
import WebDevelopment from "../NavServices/WebDevelopment";
import { ImageSlider } from "./ImageSlider";
const Navbar = () => {
  const [theme,setTheme]=useState("light");

  // load theme from local storage and set it
  useEffect(()=>{
    const savedTheme=localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme",savedTheme)
  },[]);

  //toggle b/w light and dark themes
  const toggleTheme=()=>{
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme",newTheme);
    document.documentElement.setAttribute("data-theme",newTheme)
  }

  return (
    <div>
    <nav className="navbar">
      <div className="navbar-brand">Ketan Jain</div>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === "light" ? <FaMoon /> : <FaSun />} {/* Using icons here */}
      </button>
      <ul className="navbar-menu">
        <li className="nav-item">
          <Link to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/AboutUs">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a href="#">Services</a>
          <ul className="dropdown-menu">
            <li>
             <Link to='/WebDevelopment'>Web Development</Link>
            </li>
            <li>
              <a href="#">Mobile App Development</a>
            </li>
            <li>
              <a href="#">Digital Marketing</a>
            </li>
            <li>
              <a href="#">Graphic Design</a>
            </li>
            <li>
              <a href="#">Consulting Services</a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a href="#">Pages</a>
          <ul className="dropdown-menu">
           <li>
            <Link to='/Reviews'>App Reviews</Link>
           </li>
            <li>
              <Link to='/Portfolio'>Portfolio</Link>
            </li>
            <li>
              {/* <a href="#">Testimonials</a> */}
              <Link to='/Testimonial'>Testimonial</Link>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a href="#">Blog</a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">Latest Posts</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">Popular Articles</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Guest Posts</a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/ContactPage">Contact</Link>
        </li>
      </ul>
    </nav>
    {/* homepage */}
    <div className="homepage">

      <h1>hlo my name is ketan jain</h1>
      {/* <ImageSlider/> */}
    </div>
    </div>
  );
};

export default Navbar;
