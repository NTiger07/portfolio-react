import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar_container">
        <div className="logo_container">
          <a href="/">Favour Olaleru</a>
        </div>
        <div className="navlinks_container">
          <ul className="nav-list">
            <li className="nav-links">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-links">
              <Link to="/about">About Me</Link>
            </li>
            <li className="nav-links">
              <Link to="/skills">Skills</Link>
            </li>
            <li className="nav-links">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
