import React from "react";
import "./cv.css";

export default function CVButtons() {
  return (
    <div className="cv-buttons">
      {/* View CV */}
      <a
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        View CV
      </a>

      {/* Download CV */}
      <a href="/cv.pdf" download className="btn btn-outline">
        Download CV
      </a>
    </div>
  );
}
