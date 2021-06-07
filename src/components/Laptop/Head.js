import React from 'react'
import '../../css/Head.css';
import image from '../../resources/profile.jpg';

function Head() {
    return (
        <div className="head-container">
            <h1>Laptop</h1>
            <img className="profile-image" src={image} alt='profile'/>
        </div>
    )
}

export default Head
