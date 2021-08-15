import React from 'react';
import '../css/head.scss';
import video from '../resources/selectphoto.mp4';
import ReactPlayer from "react-player";
import headsvg from '../resources/portfolio-bg.svg';

function Head() {
    return (
        <div className="head-container">
            <h2 className="subheading">Web Developer </h2>
            <h1 className="heading">Ryan Tavcar </h1>
            <p className="text"> Deeply motivated and team focused guy all about the world of computers and programming</p>
            
            {/* <div className="feature">
                <h4>New Favourite feature - upload to s3 bucket</h4>
                <ReactPlayer url={video} loop="true" playing="playing" />
            </div> */}
        </div>
    )
}

export default Head
