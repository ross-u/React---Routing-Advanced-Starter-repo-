// components/Projects.js

import React from 'react';

export const myProjects = [
  {
    id: '1a',
    name: 'The Frogger Clone',
    year: 2017,
    technologies: 'JavaScript, jQuery',
    description: 'The first project game clone.',
  },
  {
    id: '2b',
    name: 'iTravel',
    year: 2017,
    technologies: 'Mongo DB, ExpressJS, NodeJS, JavaScript, HTML, CSS',
    description:
      'Web App that allows logged in users to share their experiences about travel destinations.',
  },
  {
    id: '3c',
    name: 'The Plan',
    year: 2017,
    technologies:
      'Mongo DB, ExpressJS, Angular2, NodeJS, JavaScript, HTML, CSS',
    description:
      'Web App that allows logged in users to plan your next activity with your friends or business partners.',
  },
];

//
export const Projects = () => {
  return (
    <div>
      <h2>Projects:</h2>
      {myProjects.map(project => {
        return (
          <div key={project.id} className="project">
            <h3>{project.name}</h3>
            <h4>{project.technologies}</h4>
          </div>
        );
      })}
    </div>
  );
};
