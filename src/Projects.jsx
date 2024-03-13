import React from "react";
import "./Projects.css";
import weather from "../public/weather.png";
import fakeshop from "../public/fakeShop.png";
import dk from "../public/dk.png";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const projects = [
  {
    title: "Weather app",
    description: "This is my weather app",
    imageUrl: weather,
    link: "https://weathert.vercel.app/",
  },
  {
    title: "Fake shop",
    description: "This is a fake ecommerce website",
    imageUrl: fakeshop,
    link: "https://syvar-shop.vercel.app/",
  },
  {
    title: "Drum kit",
    description: "This is my drumkit",
    imageUrl: dk,
    link: "https://drum-kit-tisha.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="mainContainerProject">
      <div className="subContainerProject">
        <div className="project-heading">My projects</div>
        <div className="projectContainer">
          {projects.map((project, index) => (
            <Link key={index} to={project.link}>
              <div className="projectItem" key={index}>
                <div className="projectImage">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="projectImage2"
                  />
                </div>
                <div className="projectInfo">
                  <h3 className="projectTitle">{project.title}</h3>
                  <p className="projectDesc">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
