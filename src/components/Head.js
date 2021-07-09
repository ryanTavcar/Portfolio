import React from 'react';
import '../css/Head.css';
// import image from '../resources/profile.jpg';


function Head() {
    return (
        <div className="head-container">
            <div className="heading-text">
                <h1 className="heading" >Hello</h1>
                <p>Passionate, deeply motivated and intrigued guy about the world of computers and programming</p>
            </div>
            
            <img className="profile-image" src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt='profile'/>
        </div>
    )
}

export default Head
