import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./constact";
import CVButtons from "./cv";
import { useState } from "react";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState("");
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">MyPortfolio</h2>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
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
