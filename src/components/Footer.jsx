import React from "react";
import x from "../svgs/x.svg";
import linkedin from "../svgs/linkedin.svg";
import github from "../svgs/github.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_section">
      {/* <span>
        Want me building stuff for you? Hit me on
        <button>
          <a href="https://www.x.com/freddie_defi/" className="footer_links">
            <img src={x} alt="X" />
          </a>
        </button>
      </span> */}
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
          {/* <a
            href="https://www.x.com/freddie_defi/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={x} alt="X" />
          </a> */}
          <a
            href="https://www.linkedin.com/in/olalerufavour/"
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
