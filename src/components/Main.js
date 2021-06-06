import "../css/Main.css";
import { useMediaQuery } from 'react-responsive'

function Main() {

    const isTabletOrMobile = useMediaQuery({ minWidth: 200, maxWidth: 780 });
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 780, maxWidth: 1280 });
    const isBigScreen = useMediaQuery({ minWidth: 1281, maxWidth: 2000 });

    return (
        <div className="Main-container">
            {isTabletOrMobile &&
                <>
                    <nav className="Navbar">
                        <ul className="Navbar-ul">
                            <li className="Navbar-li">Projects</li>
                            <li className="Navbar-li">About</li>
                            <li className="Navbar-li">Socials</li>
                        </ul>
                    </nav>
                </>
            }
            {isDesktopOrLaptop &&
                <>
                    <nav className="Navbar">
                        <ul className="Navbar-ul">
                            <li className="Navbar-li">Projects</li>
                            <li className="Navbar-li">About</li>
                            <li className="Navbar-li">Socials</li>
                        </ul>
                    </nav>
                </>
            }
            {isBigScreen &&
                <>
                    <nav className="Navbar">
                        <ul className="Navbar-ul">
                            <li className="Navbar-li">Projects</li>
                            <li className="Navbar-li">About</li>
                            <li className="Navbar-li">Socials</li>
                        </ul>
                    </nav>

                </>
            }
        </div>
    )
}

export default Main
