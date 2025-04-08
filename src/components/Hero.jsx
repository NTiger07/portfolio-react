import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import linkedin from "../svgs/linkedin.svg";
import github from "../svgs/github.svg";
import "./Hero.css";

const Hero = () => {
  const { ref: heroanim, inView: elementIsVisible } = useInView();
  return (
    <div className="hero_section" id="scrollhero">
      <div
        ref={heroanim}
        className={`hero_section-content ${
          elementIsVisible ? "dissolveInBottom" : ""
        } `}
      >
        <h1>HI, MY NAME IS</h1>
        <span>Favour Olaleru.</span>
        <span id="fedev">I Am A Fullstack Developer.</span>
        <p className="fedev">
          I'm a fullstack developer with a solid grasp of both frontend and
          backend tech. I create clean, user-friendly interfaces and build
          scalable, well-structured systems that support smooth, reliable
          performance.
        </p>
      </div>
      <div className="hero_section-links">
        {/* <a
          href="https://twitter.com/FavourOlaleru"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="twitter" />
        </a> */}
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
      <div
        className={`hero_section-contact ${
          elementIsVisible ? "dissolveInTop" : ""
        }`}
      >
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
          <Link to="/contact">Contact Me</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
