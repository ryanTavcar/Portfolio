import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

//Stylesheet
import '../css/main.scss';

//Componenents
import Projects from './Projects';
import About from './About';
import Socials from './Socials';
import HamburgerNavbar from './HamburgerNavbar'; 
import Navbar from './Navbar';
import Resume from './Resume'

function Main() {

    const isSmallScreen = useMediaQuery({ minWidth: 200, maxWidth: 800 });
    const isLargeScreen = useMediaQuery({ minWidth: 801, maxWidth: 3840 });

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
        <div className="Main-container">
        
        {isSmallScreen && 
            <>
                <div className="hamburger-menu">
                    <h3>{useHeading}</h3>
                    <button onClick={useToggle? handleNavbarInactive : handleNavbarActive} >
                        <i className="fa fa-bars"></i> 
                    </button>
                </div>

                <Router>

                    <HamburgerNavbar useNavbar={useNavbar} changeHeading={changeHeading}/>

                    <Switch>
                            <Route exact path="/">
                                <Projects />
                            </Route>
                            <Route exact path="/about">
                                <About />
                            </Route>
                            <Route exact path="/resume">
                                <Resume />
                            </Route>
                            <Route exact path="/socials">
                                <Socials />
                            </Route>
                        </Switch>
                        
                </Router>
            </>
        }

        {isLargeScreen &&
            <>
                <h3 className="heading">{useHeading}</h3>
                <Router>

                    <Navbar changeHeading={changeHeading} />

                    <Switch>
                        <Route exact path="/" >
                            <Projects />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/resume">
                            <Resume />
                        </Route>
                        <Route exact path="/socials">
                            <Socials />
                        </Route>
                    </Switch>

                </Router>
            </>
        
        }
        </div>
    )
}

export default Main
