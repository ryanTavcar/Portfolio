import React from 'react';
import { NavLink } from "react-router-dom";

//Stylesheet
import '../css/HamburgerNavbar.css'

function HamburgerNavbar({changeHeading, useNavbar}) {

    return (
        <nav className="Navbar-mobile" style={useNavbar} >
            <ul className="Navbar-ul-mobile">
                <li className="Navbar-li" onClick={() => changeHeading('my work.')}>
                    <NavLink to="/" className="navbar-link-mobile" exact activeStyle={{textDecoration: 'underline'}} >Projects</NavLink>
                </li>
                <li className="Navbar-li" onClick={() => changeHeading('about me.')}>
                    <NavLink to="/about" className="navbar-link-mobile" exact activeStyle={{textDecoration: 'underline'}} >About</NavLink>
                </li>
                <li className="Navbar-li" onClick={() => changeHeading('my resume.')}>
                    <NavLink to="/resume" className="navbar-link-mobile" exact activeStyle={{textDecoration: 'underline'}} >Resume</NavLink>
                </li>
                <li className="Navbar-li" onClick={() => changeHeading('my socials.')}>
                    <NavLink to="/socials" className="navbar-link-mobile" exact activeStyle={{textDecoration: 'underline'}} >Socials</NavLink>
                </li>
            </ul>
        </nav>

    )
}

export default HamburgerNavbar
