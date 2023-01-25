import React, { Component } from "react";
import html from "../svgs/HTML.svg";
import css from "../svgs/CSS.svg";
import js from "../svgs/JavaScript.svg";
import ts from "../svgs/TypeScript.svg";
import react from "../svgs/React-Dark.svg";
import axios from "../svgs/axios.svg";
import api from "../svgs/api.svg";
import node from "../svgs/NodeJS-Dark.svg";
import express from "../svgs/expressjs.svg";
import git from "../svgs/Git.svg";
import github from "../svgs/Github-Dark.svg";
import vscode from "../svgs/VSCode-Dark.svg";
import nodemon from "../svgs/nodemon.svg";
import npm from "../svgs/npmjs.svg";
import netlify from "../svgs/netlify.svg";
import "./Skills.css";

class Skills extends Component {
  render() {
    return (
      <div className="skills_section">
        <h2>MY ECOSYSTEM</h2>
        <div className="skills_content">
          <span>
            <img src={html} alt="html" />
            HTML
          </span>
          <span>
            <img src={css} alt="css" />
            CSS
          </span>
          <span>
            <img src={js} alt="js" />
            JavaScript
          </span>
          <span>
            <img src={ts} alt="ts" />
            TypeScript
          </span>
          <span>
            <img src={react} alt="react" />
            ReactJS
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
            <img src={api} alt="api" />
            APIs
          </span>
          <span>
            <img src={axios} alt="axios" />
            Axios
          </span>
          <span>
            <img src={nodemon} alt="nodemon" />
            Nodemon
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
          {/* <span>
            <img src={netlify} alt="netlify" />
            Netlify
          </span> */}
        </div>
      </div>
    );
  }
}

export default Skills;
