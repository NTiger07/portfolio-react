import React, { Component } from "react";
import html from "../svgs/HTML.svg";
import css from "../svgs/CSS.svg";
import js from "../svgs/JavaScript.svg";
import ts from "../svgs/TypeScript.svg";
import react from "../svgs/React-Dark.svg";
import axios from "../svgs/axios.svg";
import api from "../svgs/api.svg";
import postman from "../svgs/postman.svg";
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
        <div className="skills_content zoomIn">
          <span className="zoomIn">
            <img src={html} alt="html" />
            HTML
          </span>
          <span className="zoomIn">
            <img src={css} alt="css" />
            CSS
          </span>
          <span className="zoomIn">
            <img src={js} alt="js" />
            JavaScript
          </span>
          <span className="zoomIn">
            <img src={ts} alt="ts" />
            TypeScript
          </span>
          <span className="zoomIn">
            <img src={react} alt="react" />
            ReactJS
          </span>
          <span className="zoomIn">
            <img src={node} alt="node" />
            NodeJS
          </span>
          <span className="zoomIn">
            <img src={express} alt="express" />
            ExpressJS
          </span>
          <span className="zoomIn">
            <img src={api} alt="api" />
            APIs
          </span>
          <span className="zoomIn">
            <img src={postman} alt="postman" />
            Postman
          </span>
          <span className="zoomIn">
            <img src={axios} alt="axios" />
            Axios
          </span>
          <span className="zoomIn">
            <img src={nodemon} alt="nodemon" />
            Nodemon
          </span>
          <span className="zoomIn">
            <img src={netlify} alt="netlify" />
            Netlify
          </span>
          <span className="zoomIn">
            <img src={npm} alt="npm" />
            NPM
          </span>
          <span className="zoomIn">
            <img src={git} alt="git" />
            Git
          </span>
          <span className="zoomIn">
            <img src={github} alt="github" />
            GitHub
          </span>
          <span className="zoomIn">
            <img src={vscode} alt="vscode" />
            VSCode
          </span>
        </div>
      </div>
    );
  }
}

export default Skills;
