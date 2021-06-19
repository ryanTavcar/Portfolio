import React from 'react';

//Components
import ProjectItem from './ProjectItem';

//Stylesheet
import '../css/Projects.css';

function Project() {

    return (
        <div className="wrapper">

            <blockquote className="quote" cite="Radek sam w sobie">Nie chce mi się szukać dennego cytatu, który odmieni moje życie o 360 stopni.</blockquote>

            <ProjectItem 
                title={"Callback Cats"}
                url={'callback-cats'}
                image={"https://cdn.stocksnap.io/img-thumbs/960w/SLEIJCNKIJ.jpg"}
                classname={'item01'} > 
            </ProjectItem>

            <ProjectItem 
                title={"CallBack Cats API"}
                url={'callback-cats-api'}
                image={"https://cdn.stocksnap.io/img-thumbs/960w/OLRVTGAAS2.jpg"}
                classname={'item02'}>
            </ProjectItem>

            <ProjectItem 
                title={"Portfolio"}
                url={'Portfolio'}
                image={"https://cdn.stocksnap.io/img-thumbs/960w/6DY9WEKPPB.jpg"}
                classname={'item03'}>
            </ProjectItem>

            <ProjectItem 
                title={"Pillars"}
                url={'Pillars'}
                image={"https://cdn.stocksnap.io/img-thumbs/960w/VEQY2MMJYL.jpg"}
                classname={'item04'}>
            </ProjectItem>

            <ProjectItem 
                title={"Weather App"}
                url={'weather-app'}
                image={"https://cdn.stocksnap.io/img-thumbs/960w/EIB873F1MT.jpg"}
                classname={'item05'}>
            </ProjectItem>

            <ProjectItem 
                title={"Rails Marketplace App"}
                url={'Rails_marketplace_app'}
                image={"https://cdn.stocksnap.io/img-thumbs/960w/IERCHNQJIH.jpg"}
                classname={'item06'}>
            </ProjectItem>

            <ProjectItem 
                title={"Palette Generator"}
                url={'Palette-Generator-V2'}
                image={"https://cdn.stocksnap.io/img-thumbs/960w/CWHC0BHB89.jpg"}
                classname={'item07'}>
            </ProjectItem>

            <ProjectItem 
                title={"Got Milk?"}
                url={'Got-Milk'}
                image={"https://cdn.stocksnap.io/img-thumbs/960w/XKDN0IGNFJ.jpg"}
                classname={'item08'}>
            </ProjectItem>

            <ProjectItem 
                title={"Javascript Calculator"}
                url={'Javascript-Calculator'}
                image={"https://cdn.stocksnap.io/img-thumbs/960w/XKDN0IGNFJ.jpg"}
                classname={'item09'}>
            </ProjectItem>

            <ProjectItem 
                title={"CSS Picture Frame"}
                url={'CSS-Picture-Frame'}
                image={"https://cdn.stocksnap.io/img-thumbs/960w/XKDN0IGNFJ.jpg"}
                classname={'item10'}>
            </ProjectItem>
        </div>
    )
}

export default Project
