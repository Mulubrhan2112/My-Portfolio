import React from "react";

import "./style.css";
function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>

      <h3>
        Email:{" "}
        <a href="mailto:mulubrhakebede19@email.com?subject=Hello&body=I saw your portfolio">
          <button>Email Me</button>
        </a>
      </h3>

      <p>
        <h3>
          Phone:{" "}
          <a href="tel:+251912345678">
            <button>Call Me</button>
          </a>
        </h3>
      </p>
      <h3>
        Telegram:{" "}
        <a href="https://t.me/MulerK21" target="_blank">
          <button>Message Me on Telegram</button>
        </a>
      </h3>
    </section>
  );
}

export default Contact;
