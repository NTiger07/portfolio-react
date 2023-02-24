import React from "react";
import twitter from "../svgs/twitter.svg";
import linkedin from "../svgs/linkedin.svg";
import github from "../svgs/github.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero_section" id="scrollhero">
      <div className="hero_section-content dissolveInTop">
        <h1>HI, MY NAME IS</h1>
        <span>Favour Olaleru.</span>
        <span id="fedev">I Am A Front-End Developer.</span>
        <p className="fedev">
          I am a skilled frontend developer with expertise in HTML, CSS,
          JavaScript, and React. I develop user-friendly web interfaces that are
          visually appealing and easy to navigate, with a focus on creating
          seamless user experience.
        </p>
      </div>
      <div className="hero_section-links">
        <a
          href="https://twitter.com/FavourOlaleru"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="twitter" />
        </a>
        <a
          href="https://www.linkedin.com/in/favourolaleru/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/NTiger07" target="_blank" rel="noreferrer">
          <img src={github} alt="github" />
        </a>
      </div>
      <div className="hero_section-contact dissolveInBottom">
        <button>
          <svg
            stroke="currentColor"
            fill="#fff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path>
            <path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path>
          </svg>
          <a href="mailto:falaleru@gmail.com" target="_blank" rel="noreferrer">
            Contact Me
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
