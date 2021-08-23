import Chip from '@material-ui/core/Chip';
import React from 'react';

//Stylesheet
import '../css/Projects.css';
// import '../css/project.scss';

const badgeColor = (type) => {
    switch (type) {
        case 'Redux':
            return 'red';
        case 'React':
            return 'blue'
        case 'Express':
            return 'yellow'
        case 'Nodejs':
            return 'teal'
        case 'MongoDB':
            return 'green'
        case 'Javascript':
            return 'pink'
        case 'PostgreSQL':
            return 'deepOrange'
        case 'Ruby on Rails':
            return 'deepPurple'
        case 'Ruby':
            return 'deepRed'
        case 'CSS':
            return 'cyan'
        default:
            return
    }
}

function ProjectInfo({ description, image, label }) {

    return (
        <>
            <div className="project-info-wrapper">
                <div className="project-info-content">
                    <img className="project-info-img" src={image} alt="project-info"></img>
                    <div className="project-info-text">
                    <div className="badge-text">
                        {label.map(type => (
                            <Chip 
                                key={type}
                                label={type}
                                color='default'
                                className={`chip-badge ${badgeColor(type)}`}
                                /> 
                        ))}
                    </div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectInfo

