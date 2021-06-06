import "../css/Head.css";
import image from '../resources/profile.jpg';
import { useMediaQuery } from 'react-responsive'

function Head() {

    const isTabletOrMobile = useMediaQuery({ minWidth: 200, maxWidth: 780 });
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 780, maxWidth: 1280 });
    const isBigScreen = useMediaQuery({ minWidth: 1281, maxWidth: 2000 });

    return (
        <div className="head-container">
            {isTabletOrMobile &&
                <>
                    <h1>Mobile/Tablet</h1>
                </>
            }
            {isDesktopOrLaptop &&
                <>
                    <h1>Laptop</h1>
                    <img className="profile-image" src={image} alt='profile'/>
                </>
            }
            {isBigScreen &&
                <>
                    <h1>Bigscreen</h1>
                    <img className="profile-image" src={image} alt='profile'/>
                </>
            }
        </div>
    )
};


{/* For devices larger than Tablet <img className="profile-image" src={image} alt='profile'/> */}

export default Head
