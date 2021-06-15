import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

//Stylesheet
import '../css/Socials.css'

function Socials() {

    const github = (e) => {
        window.location.assign('https://github.com/ryanTavcar/');
    };

    const linkedin = (e) => {
        window.location.assign('https://www.linkedin.com/in/ryan-james-tavcar-9a642416a/');
    };

    return (
        <div className="social-wrapper">
            <div onClick={github}>
                <FaGithub size={60}/>
            </div>
            <div onClick={linkedin}>
                <FaLinkedin size={60}/>
            </div>
            
        </div>
    )
}

export default Socials
