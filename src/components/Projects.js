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

            <blockquote className="quote" cite="Radek sam w sobie">Nie chce mi się szukać dennego cytatu, który odmieni moje życie o 360 stopni.</blockquote>

            {
                projectData.map( (item) => {

                    return <ProjectItem 
                            key={item.classname}
                            title={item.title}
                            url={item.url}
                            image={item.image}
                            classname={item.classname} > 
                            </ProjectItem>
                })
            }
        </div>
    )
}

export default Project
