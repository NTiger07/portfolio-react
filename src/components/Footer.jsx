import React from "react";
import linkedin from "../svgs/linkedin.svg";
import github from "../svgs/github.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_section">
      <span>
        Want me building stuff for you? Hit me on
        <button>
          <a href="https://www.linkedin.com/in/favourolaleru/">LinkedIn</a>
        </button>
      </span>
      <div className="footer_links">
        <h2>Follow me on</h2>
        <div className="links_container">
          <a
            href="https://github.com/NTiger07"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/favourolaleru/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
