import React from "react";
import { Link } from "react-router-dom";
import hamburger from "../svgs/hamburger.svg";
import close from "../svgs/close.svg";
import "./Navbar.css";

export default function Navbar() {
  const [navOpen, setNavOpen] = React.useState(false);
  const toggle = () => {
    setNavOpen(!navOpen);
  };
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
      <div className="ham_image" onClick={toggle}>
        <img src={navOpen ? close : hamburger} alt="hamburger" />
      </div>
      {navOpen && (
        <div className="navlinks_mobile">
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
      )}
    </div>
  );
}
