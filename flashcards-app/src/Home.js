import React from 'react';
import './Home.css'; // Import your CSS file
import webpageImage from './webpage.png';
import frenchImage from './french.png';
import sqlImage from './sql.png';


const Home = () => {
  const projects = [
    {
      title: 'Personal Webpage',
      imageUrl: webpageImage,
      externalLink: 'https://gultaj7.github.io/wm1-personalwebpage/',
      learnMoreText: 'view page'
    },
    {
      title: 'Oracle Database SQL',
      imageUrl: sqlImage,
      externalLink: 'https://www.data.edu.az/az/verified/2022977/',
      learnMoreText: 'view sertificate'
    },
    {
      title: 'French',
      imageUrl: frenchImage,
      externalLink: 'https://shorturl.at/aACMP',
      learnMoreText: 'see video'
    },
  ];

  return (
    <div className="content">
      <div>
        <h2 className="header">About Me</h2>
        <p>
          Gultaj Muradova, a junior-year IT student at ADA University, aspires to pursue a career in data science.
        </p>
      </div>

      <div>
        <h2 className="header">Activity</h2>

        <div className="card-list">
          {projects.map((project, index) => (
            <div className="card" key={index}>
              <h3 className="project-title">{project.title}</h3>
              <img
                src={project.imageUrl}
                alt={`Project ${index + 1}`}
                className="project-image"
              />
              <a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="learn-more-link"
              >
                {project.learnMoreText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
