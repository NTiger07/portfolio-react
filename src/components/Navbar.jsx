import React, { Component } from "react";
import "./NAvbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar_container">
        <div className="logo_container">
          <span>Favour Olaleru</span>
        </div>
        <div className="links_container">
          <ul>
            <li>
              <a href="">About Me</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
