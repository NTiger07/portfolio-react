import React from "react";
import { useInView } from "react-intersection-observer";
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

const Skills = (props) => {
  const { ref: skillsanim, inView: elementIsVisible } = useInView();
  return (
    <div className="skills_section">
      <h2>MY ECOSYSTEM</h2>
      <div className="skills_content">
        <span
          ref={skillsanim}
          className={`${elementIsVisible ? "zoomIn" : ""}${
            props.disableAnimations ? "disable_animations" : ""
          }`}
        >
          <img src={html} alt="html" />
          HTML
        </span>
        <span
          ref={skillsanim}
          className={`${elementIsVisible ? "zoomIn" : ""}${
            props.disableAnimations ? "disable_animations" : ""
          }`}
        >
          <img src={css} alt="css" />
          CSS
        </span>
        <span
          ref={skillsanim}
          className={`${elementIsVisible ? "zoomIn" : ""}${
            props.disableAnimations ? "disable_animations" : ""
          }`}
        >
          <img src={js} alt="js" />
          JavaScript
        </span>
        <span
          ref={skillsanim}
          className={`${elementIsVisible ? "zoomIn" : ""}${
            props.disableAnimations ? "disable_animations" : ""
          }`}
        >
          <img src={ts} alt="ts" />
          TypeScript
        </span>
        <span
          ref={skillsanim}
          className={`${elementIsVisible ? "zoomIn" : ""}${
            props.disableAnimations ? "disable_animations" : ""
          }`}
        >
          <img src={react} alt="react" />
          ReactJS
        </span>
        <span
          ref={skillsanim}
          className={`${elementIsVisible ? "zoomIn" : ""}${
            props.disableAnimations ? "disable_animations" : ""
          }`}
        >
          <img src={node} alt="node" />
          NodeJS
        </span>
        <span
          ref={skillsanim}
          className={`${elementIsVisible ? "zoomIn" : ""}${
            props.disableAnimations ? "disable_animations" : ""
          }`}
        >
          <img src={express} alt="express" />
          ExpressJS
        </span>
        <span
          ref={skillsanim}
          className={`${elementIsVisible ? "zoomIn" : ""}${
            props.disableAnimations ? "disable_animations" : ""
          }`}
        >
          <img src={api} alt="api" />
          APIs
        </span>
        <span
          ref={skillsanim}
          className={`${elementIsVisible ? "zoomIn" : ""}${
            props.disableAnimations ? "disable_animations" : ""
          }`}
        >
          <img src={postman} alt="postman" />
          Postman
        </span>
        <span
          ref={skillsanim}
          className={`${elementIsVisible ? "zoomIn" : ""}${
            props.disableAnimations ? "disable_animations" : ""
          }`}
        >
          <img src={axios} alt="axios" />
          Axios
        </span>
        <span
          ref={skillsanim}
          className={`${elementIsVisible ? "zoomIn" : ""}${
            props.disableAnimations ? "disable_animations" : ""
          }`}
        >
          <img src={nodemon} alt="nodemon" />
          Nodemon
        </span>
        <span
          ref={skillsanim}
          className={`${elementIsVisible ? "zoomIn" : ""}${
            props.disableAnimations ? "disable_animations" : ""
          }`}
        >
          <img src={netlify} alt="netlify" />
          Netlify
        </span>
        <span
          ref={skillsanim}
          className={`${elementIsVisible ? "zoomIn" : ""}${
            props.disableAnimations ? "disable_animations" : ""
          }`}
        >
          <img src={npm} alt="npm" />
          NPM
        </span>
        <span
          ref={skillsanim}
          className={`${elementIsVisible ? "zoomIn" : ""}${
            props.disableAnimations ? "disable_animations" : ""
          }`}
        >
          <img src={git} alt="git" />
          Git
        </span>
        <span
          ref={skillsanim}
          className={`${elementIsVisible ? "zoomIn" : ""}${
            props.disableAnimations ? "disable_animations" : ""
          }`}
        >
          <img src={github} alt="github" />
          GitHub
        </span>
        <span
          ref={skillsanim}
          className={`${elementIsVisible ? "zoomIn" : ""}${
            props.disableAnimations ? "disable_animations" : ""
          }`}
        >
          <img src={vscode} alt="vscode" />
          VSCode
        </span>
      </div>
    </div>
  );
};

export default Skills;
