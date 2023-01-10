import React, { Component } from "react";
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
              <a href="#">Home</a>
            </li>
            <li className="nav-links">
              <a href="#">About Me</a>
            </li>
            <li className="nav-links">
              <a href="#">Skills</a>
            </li>
            <li className="nav-links">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
