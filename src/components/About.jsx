import React from "react";
import resume from "../svgs/resume.svg";
import repo from "../svgs/repo.svg";
import "./About.css";

const About = (props) => {
  return (
    <div className="about_section">
      <h1>ABOUT ME</h1>
      <div className="row">
        <div className="about_section-image">
          <img src="" alt="favour" />
        </div>
        <div className="about_section-content" id="scrollabout">
          <span>I'm Favour Olaleru</span>
          <p>
            I specialize in designing and developing user-friendly web
            interfaces that are visually appealing and easy to navigate. With a
            solid understanding of HTML, CSS, and JavaScript, I am able to
            create responsive and interactive websites that adapt to various
            screen sizes and devices.
          </p>
          <p>
            My skills also include the use of frameworks such as React, as well
            as working with APIs to connect the frontend to the backend. My goal
            is to create a seamless user experience that enhances engagement and
            drives conversions.
          </p>
          <p>
            In my spare time, I like to research the newest advancements in
            Artificial Intelligence, read up on Tesla cars, enjoy playing video
            games, and listen to music.
          </p>
          <div className="about_section-links">
            <span>
              <img src={resume} alt="resume" />
              <a href="https://drive.google.com/file/d/1e9AXHgAbbSlqV0tcTWyZExfVYycR3-1Z/view?usp=sharing">
                Get Resume
              </a>
            </span>
            /
            <span>
              <img src={repo} alt="repo" />
              <a href="https://github.com/NTiger07">View My Repo</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
