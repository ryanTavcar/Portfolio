import React from 'react';
import { Link } from "react-router-dom";

//Stylesheet
import '../css/HamburgerNavbar.css'

function HamburgerNavbar({changeHeading, useNavbar}) {

    return (
        <nav className="Navbar-mobile" style={useNavbar} >
            <ul className="Navbar-ul-mobile">
                <li className="Navbar-li" onClick={() => changeHeading('my work.')}>
                    <Link to="/">Projects</Link>
                </li>
                <li className="Navbar-li" onClick={() => changeHeading('about me.')}>
                    <Link to="/about">About</Link>
                </li>
                <li className="Navbar-li" onClick={() => changeHeading('my socials.')}>
                    <Link to="/socials">Socials</Link>
                </li>
            </ul>
        </nav>

    )
}

export default HamburgerNavbar
