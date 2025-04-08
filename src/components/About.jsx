import React from "react";
import resume from "../svgs/resume.svg";
import repo from "../svgs/repo.svg";
import favour from "../favour.jpg"
import "./About.css";

const About = (props) => {
  return (
    <div className="about_section">
      <h1>ABOUT ME</h1>
      <div className="row">
        <div className="about_section-image">
          <img src={favour} alt="favour" />
        </div>
        <div className="about_section-content" id="scrollabout">
          <h2>I'm Favour Olaleru</h2>
          <p>
            I specialize in building fullstack web applications with clean,
            intuitive interfaces and robust, scalable architecture. I work with
            TypeScript and frameworks like React and Next.js on the
            frontend, while using Node.js, Express and MongoDB to
            handle the backend and data logic.
          </p>
          <p>
            I use these tools to create seamless user experiences, integrate
            third-party APIs, manage data efficiently, and ensure smooth
            interaction between the client and server. My goal is to deliver
            well-rounded applications that are responsive, maintainable, and
            aligned with both user needs and business goals.
          </p>
          <p>
            In my spare time, I like to research the newest advancements in
            Artificial Intelligence, read up on Tesla cars, enjoy playing video
            games, and listen to music.
          </p>
          <div className="about_section-links">
            <span>
              <img src={resume} alt="resume" />
              <a 
              href="https://drive.google.com/file/d/1xqdFzvB5UMPmqQUpyJE2csarK5vWE2oV/view?usp=sharing" 
              target="_blank"
              rel="noreferrer"
              >
                Get Resume
              </a>
            </span>
            /
            <span>
              <img src={repo} alt="repo" />
              <a href="https://github.com/NTiger07"
              target="_blank"
              rel="noreferrer"
              >View My Repo</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
