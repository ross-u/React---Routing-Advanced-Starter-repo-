// components/Projects.js

import React from 'react';

import { projects } from './../data';

//
class Projects extends React.Component {
  state = {
    projects: projects
  }

  render() {
    const { projects } = this.state;

    return (
      <div>
        <h2>Projects:</h2>
        {projects.map(project => {
          return (
            <div key={project.id} className="project">
              <h3>{project.name}</h3>
              <h4>{project.technologies}</h4>
            </div>
          );
        })}
      </div>
    );
  }
};


export default Projects;