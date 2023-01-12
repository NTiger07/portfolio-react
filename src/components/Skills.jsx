import React, { Component } from "react";
import html from "../assets/HTML.svg";
import css from "../assets/CSS.svg";
import js from "../assets/JavaScript.svg";
import ts from "../assets/TypeScript.svg";
import react from "../assets/React-Dark.svg";
import axios from "../assets/axios.svg";
import api from "../assets/api.svg";
import node from "../assets/NodeJS-Dark.svg";
import express from "../assets/expressjs.svg";
import git from "../assets/Git.svg";
import github from "../assets/Github-Dark.svg";
import vscode from "../assets/VSCode-Dark.svg";
import netlify from "../assets/netlify.svg";
import nodemon from "../assets/nodemon.svg";
import npm from "../assets/npmjs.svg";
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
          <span>
            <img src={netlify} alt="netlify" />
            Netlify
          </span>
        </div>
      </div>
    );
  }
}

export default Skills;
