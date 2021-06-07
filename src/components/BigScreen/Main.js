import React from 'react';
import Projects from './Projects';
import About from './About';
import Socials from './Socials';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Main() {
    return (
        <div className="Main-container">
        <Router>
            <nav className="Navbar">
                <ul className="Navbar-ul">
                    <li className="Navbar-li">
                        <Link to="/">Pojects</Link>
                    </li>
                    <li className="Navbar-li">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="Navbar-li">
                        <Link to="/socials">Socials</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Projects />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/socials">
                    <Socials />
                </Route>
            </Switch>
        </Router>
    </div>
    )
}

export default Main
