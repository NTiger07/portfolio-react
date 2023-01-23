import React, { Component } from "react";
import Navbar from "./Navbar";
import twitter from "../svgs/twitter.svg";
import linkedin from "../svgs/linkedin.svg";
import github from "../svgs/github.svg";
import "./Hero.css";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero_section">
        <Navbar />
        <div className="hero_section-content">
          <h1>HI, MY NAME IS</h1>
          <span>Favour Olaleru.</span>
          <span>I Am A Front-End Developer.</span>
          <p>
            I am a skilled frontend developer with expertise in HTML, CSS,
            JavaScript, and React. I develop user-friendly web interfaces that
            are visually appealing and easy to navigate, with a focus on
            creating seamless user experience.
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
            href="https://www.linkedin.com/in/favour-olaleru-1a5133218/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            href="https://github.com/NTiger07"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github" />
          </a>
        </div>
        <div className="hero_section-contact">
          <button>
            <a
              href="mailto:falaleru@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Contact Me
            </a>
          </button>
        </div>
      </div>
    );
  }
}
