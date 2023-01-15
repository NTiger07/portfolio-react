import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="projects_section">
        <h1>My Projects</h1>
        <div className="projects_container">
          <div className="project_card">
            <img src="" alt="" />
            <span></span>
            <p></p>
            <span>Built with</span>
            <div className="project_links">
              <button>
                <a href=""></a>
              </button>
              <button>
                <a href=""></a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
