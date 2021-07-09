import React from 'react';

//Components
import ProjectItem from './ProjectItem';

//Stylesheet
import '../css/Projects.css';

// Data
import projectData from '../resources/projectData'


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
