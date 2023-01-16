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
              <img src="" alt="projectimage" />
            </div>
            <div className="project_content">
              <span className="project-title">
                <b>QUE MIRAS BOBO</b>
              </span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
                itaque quos beatae, veritatis quidem dolores a! Placeat rerum
                vero quia assumenda temporibus, corporis, consequuntur ullam,
                molestiae est laborum earum. Recusandae.
              </p>
              <div className="project_tools">
                <span>
                  <b>Built with:</b>
                </span>
                <div className="tools_content">
                  <span>Que</span>
                  <span>Miras</span>
                  <span>Bobo</span>
                </div>
              </div>
              <div className="project_links">
                <button>
                  <a href="">View Repo</a>
                </button>
                <button>
                  <a href="">View Website</a>
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
