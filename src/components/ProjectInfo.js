import React from 'react';

//Stylesheet
import '../css/Projects.css';

function ProjectInfo({mouse, title, description, image}) {

    return (
        <div className="project-info-wrapper" style={{left: `${mouse.posX}px`, top: `${mouse.posY}px`}}>
            <div className="project-info-content">
                <img className="project-info-img" src={image} alt="project-info"></img>
                <div className="project-info-text">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectInfo
