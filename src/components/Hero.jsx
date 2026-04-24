import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero">
      <img
        src="photo_5907009560784866209_y.jpg"
        alt="Profile"
        className="profilePic"
      />
      <h1>Hello, I'm Mulubrhan</h1>
      <p>Frontend Developer | Coding Enthusiast</p>
      <Link to="/pictures">
        <button>View Pictures</button>
      </Link>
    </section>
  );
}
export default Hero;
