import React, { Component } from "react";
import html from "../assets/HTML.svg";
import css from "../assets/CSS.svg";
import js from "../assets/JavaScript.svg";
import ts from "../assets/TypeScript.svg";
import react from "../assets/React-Dark.svg";
import node from "../assets/NodeJS-Dark.svg";
import git from "../assets/Git.svg";
import github from "../assets/Github-Dark.svg";
import vscode from "../assets/VSCode-Dark.svg";
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
  }
}

export default Skills;
