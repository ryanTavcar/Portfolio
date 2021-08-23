
import React from 'react';

//Stylesheet
import '../css/Projects.css';

function ProjectInfo({ description, image }) {

    return (
        <>
            <div className="project-info-wrapper">
                <div className="project-info-content">
                    <img className="project-info-img" src={image} alt="project-info"></img>
                    <div className="project-info-text">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectInfo