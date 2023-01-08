import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar_container">
        <div className="logo_container">
          <img src="" alt="logo" />
        </div>
        <div className="links_container">
          <ul>
            <li>About Me</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    );
  }
}
