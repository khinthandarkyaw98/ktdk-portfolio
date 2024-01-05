import React from 'react';
import './ProjectsCard.css';

const ProjectsCard = ({ details }) => {
  return (
    <div className='projects-card'>
      <h6>{details.title}</h6>
      
      <div className="preview">
        <div className="preview-container">
          <a href={details.link} target="_blank">
            <img className="preview-image" src={details.image} alt="" />
          </a>
        </div>

        <div className="preview-description">
          <div className="preview-languages">
            {details.lang.map((item) => (
              <span>{item}</span>
            ))}
          </div>
          <div className="preview-buttons">
            <button onClick={() => window.open(details.link, '_blank')}>
            <img src="./assets/images/link-icon.png"  alt="" />
            <span>Live</span>
            </button>
              <button onClick={() => window.open(details.code, '_blank')}>
                <img src="./assets/images/github-icon.png" alt="" />
                <span>code</span>
              </button>
          </div>
        </div>
      </div>
      
    </div>
  )
};

export default ProjectsCard;