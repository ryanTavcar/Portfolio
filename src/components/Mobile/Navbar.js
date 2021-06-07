import {useState} from 'react';
import "../../css/Main.css";
import Projects from './Projects';
import About from './About';
import Socials from './Socials';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Navbar() {

    const [useNavbar, setNavbar] = useState({'display': 'none'})
    const [useToggle, setToggle] = useState(false)

    const [useHeading, setHeading] = useState("my work.");

    const handleNavbarActive = () => {
        setNavbar({'display': 'block'})
        setToggle(true);
        return
    };

    const handleNavbarInactive = () => {
        setNavbar({'display': 'none'})
        setToggle(false);
        return
    }

    const changeHeading = (heading) => {
        return setHeading(heading)
    }

    return (
        <>  
            <h3>{useHeading}</h3>
            <button onClick={useToggle? handleNavbarInactive : handleNavbarActive} >
                <i className="fa fa-bars"></i> 
            </button>

            <Router>

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
        </>
    )
}

export default Navbar