import React from "react";
import { useInView } from "react-intersection-observer";
import js from "../svgs/JavaScript.svg";
import ts from "../svgs/TypeScript.svg";
import next from "../svgs/NextJS.svg";
import react from "../svgs/React-Dark.svg";
import mui from "../svgs/MUI.svg";
import tailwind from "../svgs/TailwindCSS-Dark.svg";
import postman from "../svgs/postman.svg";
import node from "../svgs/NodeJS-Dark.svg";
import express from "../svgs/expressjs.svg";
import mongodb from "../svgs/MongoDB.svg";
import git from "../svgs/Git.svg";
import github from "../svgs/Github-Dark.svg";
import vscode from "../svgs/VSCode-Dark.svg";
import npm from "../svgs/npmjs.svg";
import netlify from "../svgs/netlify.svg";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills_section">
      <h2>MY ECOSYSTEM</h2>
      <div className="skills_content">
        <span>
          <img src={js} alt="js" />
          JavaScript
        </span>
        <span>
          <img src={ts} alt="ts" />
          TypeScript
        </span>
        <span>
          <img src={next} alt="next" />
          NextJS
        </span>
        <span>
          <img src={react} alt="react" />
          ReactJS
        </span>
        <span>
          <img src={mui} alt="mui" />
          MaterialUI
        </span>
        <span>
          <img src={tailwind} alt="tailwind" />
          TailwindCSS
        </span>
        <span>
          <img src={node} alt="node" />
          NodeJS
        </span>
        <span>
          <img src={express} alt="express" />
          ExpressJS
        </span>
        <span>
          <img src={mongodb} alt="mongodb" />
          MongoDB
        </span>
        <span>
          <img src={postman} alt="postman" />
          Postman
        </span>
        <span>
          <img src={netlify} alt="netlify" />
          Netlify
        </span>
        <span>
          <img src={npm} alt="npm" />
          NPM
        </span>
        <span>
          <img src={git} alt="git" />
          Git
        </span>
        <span>
          <img src={github} alt="github" />
          GitHub
        </span>
        <span>
          <img src={vscode} alt="vscode" />
          VSCode
        </span>
      </div>
    </div>
  );
};

export default Skills;
