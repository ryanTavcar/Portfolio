
import React from 'react';

//Components
import ProjectItem from './ProjectItem';

//Stylesheet
import '../css/Projects.css';

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
        <div className="wrapper">

            <blockquote className="quote" cite="Ralph Johnson">Before software can be reusable it first has to be usable.</blockquote>

            {
                projectData.map( (item) => {

                    return <ProjectItem 
                                key={item.classname}
                                title={item.title}
                                url={item.url}
                                image={item.image}
                                description={item.description}
                                classname={item.classname} >
                            </ProjectItem>
                })
            }
        </div>
    )
}

export default Project
