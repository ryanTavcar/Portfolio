import React, {useState} from 'react';
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

    const [useHeading, setHeading] = useState("my work.");

    const changeHeading = (heading) => {
        return setHeading(heading)
    }

    return (
        <div className="Main-container">
            <h3>{useHeading}</h3>
        <Router>
            <nav className="Navbar">
                <ul className="Navbar-ul">
                    <li className="Navbar-li" onClick={() => changeHeading('my work.')}>
                        <Link to="/">Pojects</Link>
                    </li>
                    <li className="Navbar-li" onClick={() => changeHeading('about me.')}>
                        <Link to="/about">About</Link>
                    </li>
                    <li className="Navbar-li" onClick={() => changeHeading('my socials.')}>
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
