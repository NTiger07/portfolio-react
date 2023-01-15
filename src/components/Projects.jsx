import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="projects_section">
        <h1>My Projects</h1>
        <div className="projects_container">
          <div className="project_card">
            <div className="project_image">
              <img src="" alt="" />
            </div>
            <div className="project_content">
              <span>
                <b></b>
              </span>
              <p></p>
              <div className="project_tools">
                <span>
                  <b>Built with:</b>
                </span>
                <div className="tools_content">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
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
      </div>
    );
  }
}

export default Projects;
