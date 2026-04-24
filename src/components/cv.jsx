import React from "react";
import "./cv.css";

export default function CVButtons() {
  return (
    <div className="cv-buttons">
      {/* View CV */}
      <a
        href="../../public/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        View CV
      </a>

      {/* Download CV */}
      <a href="../../public/cv.pdf" download className="btn btn-outline">
        Download CV
      </a>
    </div>
  );
}
