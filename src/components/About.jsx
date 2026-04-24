import React from "react";
import "./style.css";

function About() {
  return (
    <section className="about">
      <h2>I am Mulubrhan Kebede</h2>
      <p
        style={{
          textAlign: "center",
          maxWidth: "500px",
          margin: "0 auto",
          fontSize: "20px",
        }}
      >
        I’m an IT student at MIT Campus in Ethiopia with a deep passion for
        coding and problem-solving. I enjoy building modern, responsive web
        applications and bringing ideas to life through clean and efficient
        code. My main tech stack includes JavaScript, React, HTML, and CSS. I
        also have strong knowledge of Python, which I use for problem-solving
        and developing logical, efficient solutions. Currently, I’m expanding my
        skills by learning Next.js to build more advanced and scalable web
        applications. I’ve built several projects that reflect my skills and
        continuous growth as a developer. I’m always learning, experimenting,
        and pushing myself to improve. I’m driven by curiosity and the desire to
        create meaningful digital solutions that make a difference.
      </p>
      <div className="tools-section">
        <h4>Tools & Technologies</h4>
        <ul className="tools-list">
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Python</li>
          <li>VS Code</li>
          <li>Git & GitHub</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
