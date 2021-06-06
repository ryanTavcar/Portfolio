import {useState} from 'react';
import "../css/Main.css";

function Navbar() {

    const [useNavbar, setNavbar] = useState({'display': 'none'})
    const [useToggle, setToggle] = useState(false)

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

    return (
        <>
            <button onClick={useToggle? handleNavbarInactive : handleNavbarActive} >
                <i className="fa fa-bars"></i> 
            </button>
            <nav className="Navbar-mobile" style={useNavbar}>
                <ul className="Navbar-ul-mobile">
                    <li className="Navbar-li">Projects</li>
                    <li className="Navbar-li">About</li>
                    <li className="Navbar-li">Socials</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar