import React from "react";
import repo from "../svgs/repo.svg";
import website from "../svgs/website.svg";
import "./Projects.css";

const Projects = (props) => {
  const projects = [
    {
      image: "/projectimages/hotel.png",
      title: "Hotel Management System",
      description:
        "The Hotel Management System is a full-stack web app built with ReactJS and ExpressJS. It features an interactive UI with advanced filtering for room bookings and management. The backend offers efficient CRUD operations via a RESTful API, optimized with MongoDB for fast queries. Built with TypeScript for maintainability, the app is deployed on OnRender.",
      tools: [
        "TypeScript",
        "ReactJS",
        "TailwindCSS",
        "MUI",
        "ExpressJS",
        "MongoDB",
      ],
      repo: "https://github.com/NTiger07/hotel-src",
      website: "https://hotelms.netlify.app/",
    },
    {
      image: "/projectimages/latex.png",
      title: "AI-Based Image-to-LaTeX System",
      description:
        "The AI-Based Image-to-LaTeX System is a backend application built with Express.js that converts mathematical expressions in images into LaTeX code. It uses the Google Gemini API for AI-driven OCR and LaTeX generation. The system supports up to five image uploads at once via Multer.js, and efficiently processes files using Node.js fs module. Error handling and validation are implemented to manage API failures and file issues.",
      tools: ["JavaScript", "ExpressJS", "Google Gemini AI"],
      repo: "https://github.com/NTiger07/gemini-latex",
      website: null,
    },
    {
      image: "/projectimages/recipe.png",
      title: "Recipe App",
      description:
        "The recipe app is a web-based application built with React. It utilizes the Edemam API to retrieve and display recipes based on the user search queries. The app features a clean and intuitive user interface that allows users to easily browse and search for recipes by ingredients, diet, cuisine origin and meal type. Deployed to Netlify.",
      tools: ["ReactJS", "CSS3", "Edemam API"],
      repo: "https://github.com/NTiger07/Recipe-App-Src",
      website: "https://vgnup.netlify.app",
    },
  ];
  return (
    <div className="projects_section">
      <h1>MY PROJECTS</h1>
      <div className="projects_container">
        {projects.map((project, index) => (
          <div className={`project_card${index % 2 === 0 ? "" : " even"}`}>
            <div className="project_image">
              <div className="project-bg">
                <img src={project.image} alt="projectimage" />
              </div>
            </div>
            <div
              className={`project_content${
                index % 2 === 0 ? "" : " evencontent"
              }`}
            >
              <span className="project-title">
                <b>{project.title}</b>
              </span>
              <p>{project.description}</p>
              <div className="project_tools">
                <span>
                  <b>Built with:</b>
                </span>
                <div className="tools_content">
                  {project.tools.map((tool, index) => (
                    <span>{tool}</span>
                  ))}
                </div>
              </div>
              <div className="project_links">
                <button>
                  <img src={repo} alt="reposvg" />
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    View Repo
                  </a>
                </button>
                <button className={project.website ? "" : "hide"} id="live">
                  <img src={website} alt="websitesvg" />
                  <a href={project.website} target="_blank" rel="noreferrer">
                    View Website
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
