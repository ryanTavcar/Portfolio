import React, {useState} from 'react';
import { useMediaQuery } from 'react-responsive'
import { useHistory } from 'react-router-dom'

//Stylesheet
import '../css/Projects.css';

//Componenents
import ProjectInfo from './ProjectInfo'

function ProjectItem({ title, url, classname, image, description}) {

    const history = useHistory()

    const isSmallScreen = useMediaQuery({ minWidth: 200, maxWidth: 1024 });
    const isLargeScreen = useMediaQuery({ minWidth: 1025, maxWidth: 3840 });

    const [state, setState] = useState({ [classname]:false});

    const externalURL = () => {
        window.location.assign(url);
    }

    const externalDemo = () => {
        window.location.assign(url);
    }

    const trueHover = (e) => {
        // setState({[classname]: true})
        // console.log(e)
        setState({[classname]: true})

    }

    const falseHover = (e) => {
        setState({[classname]: false})
    }

    return (
        <>
        {isLargeScreen && 
            <>
                {state[classname] &&
                    <ProjectInfo 
                        description={description}
                        image={image}
                    ></ProjectInfo> 
                }

            <div className={classname} onClick={externalDemo} onMouseEnter={trueHover} onMouseLeave={falseHover}>
                <img src={image} alt="project" style={{height: '100%', width: '100%'}}></img>
                <div className="meta">
                    <span>{url}</span>
                    <h2>{title}</h2>
                    <ul className="cta-list">
                        <li className="cta-item">
                            <button onClick={externalURL} >code</button>
                        </li>
                        <li className="cta-item">
                            <button onClick={externalDemo} >demo</button>
                        </li>
                    </ul>
                </div>
            </div>
            </>
        }

        {isSmallScreen && 
            <>
                <div className={classname} onClick={externalDemo} onMouseEnter={trueHover} onMouseLeave={falseHover}>
                    <img src={image} alt="project"></img>
                    <div className="meta">
                        <span>{url}</span>
                        <h2>{title}</h2>
                        <ul className="cta-list">
                            <li className="cta-item">
                                <button onClick={externalURL} >code</button>
                            </li>
                            <li className="cta-item">
                                <button onClick={externalDemo} >demo</button>
                            </li>
                        </ul>
                    </div>
                </div> 
            </>
        }
        </>
    )
}

export default ProjectItem