import React from "react";
import recipe from "../projectimages/recipe.png";
import weather from "../projectimages/weather.png";
import room from "../projectimages/room.png";
import easybank from "../projectimages/easybank.png";
import repo from "../svgs/repo.svg";
import website from "../svgs/website.svg";
import "./Projects.css";

const Projects = (props) => {
  return (
    <div className="projects_section">
      <h1>MY PROJECTS</h1>
      <div className="projects_container">
        <div className="project_card">
          <div className="project_image">
            <span>VGNUP</span>
            <img src={recipe} alt="projectimage" />
          </div>
          <div className="project_content">
            <span className="project-title">
              <b>Recipe App</b>
            </span>
            <p>
              The recipe app is a web-based application built with React. It
              utilizes the Edemam API to retrieve and display recipes based on
              the user search queries. The app features a clean and intuitive
              user interface that allows users to easily browse and search for
              recipes by ingredients, diet, cuisine origin and meal type.
              Deployed to Netlify.
            </p>
            <div className="project_tools">
              <span>
                <b>Built with:</b>
              </span>
              <div className="tools_content">
                <span>ReactJS</span>
                <span>Async API</span>
                <span>Hooks</span>
                <span>CSS3</span>
                <span>Responsive Design</span>
                <span>Edemam API</span>
                <span>Netlify</span>
              </div>
            </div>
            <div className="project_links">
              <button>
                <img src={repo} alt="reposvg" />
                <a
                  href="https://github.com/NTiger07/Recipe-App-Build"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Repo
                </a>
              </button>
              <button id="live">
                <img src={website} alt="websitesvg" />
                <a
                  href="https://vgnup.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Website
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="project_card even">
          <div className="project_image evenback">
            <span>De Armas</span>
            <img src={weather} alt="projectimage" />
          </div>
          <div className="project_content evencontent">
            <span className="project-title">
              <b>Weather App</b>
            </span>
            <p>
              This Weather App is an easy and convenient way to quickly check
              the current temperature, description, humidity and wind speed of
              any city or country. Using the OpenWeatherMap API users can easily
              search for current weather conditons of any city. Made with
              Vanilla JavaScript and deployed to Netlify.
            </p>
            <div className="project_tools">
              <span>
                <b>Built with:</b>
              </span>
              <div className="tools_content">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Vanilla JavaScript</span>
                <span>OpenWeatherMap API</span>
                <span>Netlify</span>
              </div>
            </div>
            <div className="project_links">
              <button>
                <img src={repo} alt="reposvg" />
                <a
                  href="https://github.com/NTiger07/Weather-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Repo
                </a>
              </button>
              <button id="live">
                <img src={website} alt="websitesvg" />
                <a
                  href="https://vgweather.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Website
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="project_card">
          <div className="project_image">
            <span>Room</span>
            <img src={room} alt="projectimage" />
          </div>
          <div className="project_content">
            <span className="project-title">
              <b>Room</b>
            </span>
            <p>
              The Room app is a single page application React application based
              on the room design from{" "}
              <a
                href="https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq"
                target="_blank"
                rel="noreferrer"
                className="fementor"
              >
                frontendmentors.io
              </a>
              . The project is meant to showcase my skills in using ReactJS
              library, CSS3 and <b>a slideshow component</b>. Deployed to
              Netlify.
            </p>
            <div className="project_tools">
              <span>
                <b>Built with:</b>
              </span>
              <div className="tools_content">
                <span>ReactJS</span>
                <span>Hooks</span>
                <span>CSS3</span>
                <span>Responsive Design</span>
                <span>Netlify</span>
              </div>
            </div>
            <div className="project_links">
              <button>
                <img src={repo} alt="reposvg" />
                <a
                  href="https://github.com/NTiger07/room-react-build"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Repo
                </a>
              </button>
              <button id="live">
                <img src={website} alt="websitesvg" />
                <a
                  href="https://vgroom.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Website
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="project_card even">
          <div className="project_image evenback">
            <span>Easy Bank</span>
            <img src={easybank} alt="projectimage" />
          </div>
          <div className="project_content evencontent">
            <span className="project-title">
              <b>Easy Bank</b>
            </span>
            <p>
              EasyBank landing page is an intermediate UI design made by{" "}
              <a
                href="https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN"
                className="fementor"
                target="_blank"
                rel="noreferrer"
              >
                frontendmentor.io
              </a>
              . It's a landing page made for a hypothetical online bank that
              helps invest and budget money. Made with Vanilla JavaScript and
              deployed to Netlify.
            </p>
            <div className="project_tools">
              <span>
                <b>Built with:</b>
              </span>
              <div className="tools_content">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Responsive Design</span>
                <span>Vanilla JavaScript</span>
                <span>Netlify</span>
              </div>
            </div>
            <div className="project_links">
              <button>
                <img src={repo} alt="reposvg" />
                <a
                  href="https://github.com/NTiger07/easybank-landingpage"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Repo
                </a>
              </button>
              <button id="live">
                <img src={website} alt="websitesvg" />
                <a
                  href="https://easynt.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Website
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
