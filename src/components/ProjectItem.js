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

    const [mouse, setMouse] = useState({ posX: null, posY: null });

    const externalURL = (e) => {
        console.log(e)
        const repo = e.target.children[1].lastChild.innerText;
        window.location.assign(`https://github.com/ryanTavcar/${repo}`);
    }

    function trueHover (e){

        //Left Side
        if ( (window.innerWidth / 2) > e.clientX ) {
                setMouse({posX: e.pageX + 100, posY: e.pageY })
                setState({[classname]: true})

        // Right Side
        } else if ( (window.innerWidth / 2)  < e.clientX ) {
                setMouse({posX: e.pageX - 800, posY: e.pageY })
                setState({[classname]: true})
        }
    }
    
    function falseHover(e){
        if (e.relatedTarget.className === 'wrapper' || e.target.classname !== classname || e.target.previousSibling.classname === 'project-info-wrapper') {
            setState({[classname]: false})
            setMouse({posX: null, posY: null})
        }
    }

    return (
        <>
        {isLargeScreen && 
            <>
                {state[classname] &&
                <ProjectInfo 
                    mouse={mouse} 
                    title={title}
                    description={"At vero eos et accusamus et iusto odio dignissimos ducimus qui, At vero eos et accusamus et iusto odio dignissimos ducimus qui"}
                    image={image}
                ></ProjectInfo> 
                }

            <div className={classname} onClick={externalURL} onMouseEnter={trueHover} onMouseLeave={falseHover} >
                <img src={image} alt="project"></img>
                <div className="meta">
                    <h2>{title}</h2>
                    <span>{url}</span>
                </div>
            </div>
            </>
        }

        {isSmallScreen && 
            <>
                <div className={classname} onClick={externalURL} onMouseEnter={trueHover} onMouseLeave={falseHover} >
                <img src={image} alt="project"></img>
                <div className="meta">
                    <h2>{title}</h2>
                    <span>{url}</span>
                </div>
            </div>
            </>
        }
        </>
    )
}

export default ProjectItem
