import React from 'react';
import { Link } from 'react-router-dom'
import Chip from '@material-ui/core/Chip';
//Components

//Stylesheet
import '../css/project.scss';

// Data
import projectData from '../resources/projectData'


const badgeColor = (label) => {
    switch (label) {
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

function Project() {


    return (
        <div className="project-wrapper">

            {/* <blockquote className="quote" cite="Ralph Johnson">Before software can be reusable it first has to be usable.</blockquote> */}

            {
                projectData.map( (project) => (
                    <ul className="card card-body">
                        <li>
                            <h2>{project.title}</h2>
                            <div className="project-contents">
                                <img src={project.image} alt={`${project.title} image`} height="200"></img>
                                <div className="badge-text">
                                    {project.label.map(label => (
                                    <Chip 
                                        label={label}
                                        color='default'
                                        className={`chip-badge  ${badgeColor(label)}`}
                                        /> 
                                ))}
                                <p>{project.description}</p>

                                <div className="project-url">
                                    <p>Source code:</p>
                                    <Link className="Link" to={{pathname: project.url}} target="_blank">{project.title}</Link>

                                    {project.demo &&
                                        <>
                                            <p>Demo:</p>
                                            <Link className="Link" to={{pathname: project.url}} target="_blank">{project.title}</Link>
                                            
                                        </>
                                    }
                                </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                ))
            }
        </div>
    )
}

export default Project
