import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./constact";
import CVButtons from "./cv";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">MyPortfolio</h2>
        <ul className="nav-links">
         
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
      <Hero />
      <About />
      <Projects />
      <CVButtons />
      <Contact />
    </>
  );
}
export default Navbar;
