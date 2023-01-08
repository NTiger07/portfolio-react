import React, { Component } from "react";
import Navbar from "./Navbar";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero_section">
        <Navbar />
        <div className="hero_section-content">
          <span>HI, MY NAME IS</span>
          <h1>Favour Olaleru.</h1>
          <span>I am a Front-End Developer.</span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
            pariatur repudiandae molestiae excepturi animi voluptatibus et
            laudantium deleniti, ut rem totam facilis recusandae amet quis
            incidunt voluptas. Ratione laborum magnam officiis quibusdam cum
            quo, beatae modi quis nisi, aliquid atque eveniet animi at quod
            placeat!
          </p>
        </div>
        <div className="hero_section-links">
          <img src={twitter} alt="twitter" />
          <img src={linkedin} alt="linkedin" />
          <img src={github} alt="github" />
        </div>
      </div>
    );
  }
}
