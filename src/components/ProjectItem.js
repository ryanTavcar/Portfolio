import React, {useState} from 'react';
import { useMediaQuery } from 'react-responsive'

//Stylesheet
import '../css/Projects.css';

//Componenents
import ProjectInfo from './ProjectInfo'

function ProjectItem({ title, url, classname, image }) {

    const isSmallScreen = useMediaQuery({ minWidth: 200, maxWidth: 1024 });
    const isLargeScreen = useMediaQuery({ minWidth: 1025, maxWidth: 3840 });

    const [state, setState] = useState({ [classname]:false});

    const externalURL = (e) => {
        window.location.assign(`https://github.com/ryanTavcar/${url}`);
    }

    const externalDemo = (e) => {
        // window.location.assign(`https://github.com/ryanTavcar/${url}`);
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
                        description={"At vero eos et accusamus et iusto odio dignissimos ducimus qui, At vero eos et accusamus et iusto odio dignissimos ducimus qui"}
                        image={image}
                    ></ProjectInfo> 
                }

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
