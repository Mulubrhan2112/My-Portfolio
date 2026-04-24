import React from "react";
import "./style.css";
import { href } from "react-router-dom";
function Projects() {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <section className="projects">
        <div className="project-card">
          <h3>My Portfolio </h3>
          <p>React App</p>
        </div>
        <div
          className="project-card"
          onClick={() => {
            window.open("https://music-player-9ef95.web.app/", "_blank");
          }}
        >
          <h3>Music Player App</h3>
          <p>JavaScript App</p>
        </div>
        <div className="project-card">
          <h3>Roman Number Converter</h3>
          <p>JavaScript App</p>
        </div>
        <div
          className="project-card"
          onClick={() => {
            window.open(
              "https://food-ordering-app-seven-theta.vercel.app/",
              "_blank",
            );
          }}
        >
          <h3>Food Ordering App</h3>
          <p>React App</p>
        </div>
        <div
          className="project-card"
          onClick={() => {
            window.open("https://calorie-counter-2b348.web.app/", "_blank");
          }}
        >
          <h3>Calorie Counter</h3>
          <p>JavaScript App</p>
        </div>
        <div className="project-card">
          <h3>Football Team Card Filter</h3>
          <p>JavaScrip App</p>
        </div>
        <div
          className="project-card"
          onClick={() => {
            window.open("https://shopping-cart-1a492.web.app", "_blank");
          }}
        >
          <h3>Shopping Cart</h3>
          <p>JavaScript App</p>
        </div>
        <div
          className="project-card"
          onClick={() => {
            window.open("https://cash-register-5c677.web.app", "_blank");
          }}
        >
          <h3>Cash Register</h3>
          <p>JavaScript App</p>
        </div>
      </section>
      {/* <button>View Pictures</button> */}
    </>
  );
}
export default Projects;
