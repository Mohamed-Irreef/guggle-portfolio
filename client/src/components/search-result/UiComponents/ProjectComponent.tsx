import React from 'react';
import { Link } from 'react-router';

const ProjectComponent = ({ project }) => {
  return (
    <div className="proj-component">
      <Link to={project.githubLink} className="text-deco-proj">
        <div className="proj-component-nav">
          <div className="proj-component-nav-logo">
            <img src={project.navLogo} alt="" />
          </div>
          <div className="">
            <p className="proj-component-title1">{project.navTitle}</p>
            <p className="proj-component-titleLink">{project.navPath}</p>
          </div>
        </div>
      </Link>

      <div className="">
        <p className="proj-component-heading">
          {project.heading.slice(0, 52)}
          {project.heading.length > 52 ? '...' : null}
        </p>
      </div>
      <div className="proj-component-body">
        <Link to={project.githubLink}>
          <div className="proj-preview">
            <img src={project.projImage} alt="Thumbnail"></img>
          </div>
        </Link>
        <div className="proj-content-para">
          <p className="proj-content-paraline1">
            {project.description.slice(0, 180)}...
          </p>
          <p className="proj-content-paraline2">{project.techStack}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
