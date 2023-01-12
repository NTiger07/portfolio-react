import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about_section">
        <h1>ABOUT ME</h1>
        <div className="row">
          <div className="about_section-image">
            <img src="" alt="svgillustration" />
          </div>
          <div className="about_section-content">
            <span>I'm Favour Olaleru</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eum
              in commodi obcaecati aspernatur reiciendis omnis at nisi saepe
              asperiores, vero tempora suscipit voluptate vel officia facilis
              delectus! Deserunt odit perferendis enim voluptatibus quisquam
              nemo.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eum
              in commodi obcaecati aspernatur reiciendis omnis at nisi saepe
              asperiores, vero tempora suscipit voluptate vel officia facilis
              delectus! Deserunt odit perferendis enim voluptatibus quisquam
              nemo.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
