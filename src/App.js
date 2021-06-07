import React from 'react'
import './css/App.css';
import { useMediaQuery } from 'react-responsive'

import Mobile from './components/Mobile/Mobile';
import Tablet from './components/Tablet/Tablet';
import Laptop from './components/Laptop/Laptop';
import Desktop from './components/Desktop/Desktop';
import BigScreen from './components/BigScreen/BigScreen';

function App() {

  const isMobileDevice = useMediaQuery({ minWidth: 200, maxWidth: 415 });
  const isTabletDevice = useMediaQuery({ minWidth: 416, maxWidth: 1024 });
  const isLaptop = useMediaQuery({ minWidth: 1025, maxWidth: 1280 });
  const isDesktop = useMediaQuery({ minWidth: 1281, maxWidth: 1680 });
  const isBigScreen = useMediaQuery({ minWidth: 1681, maxWidth:  2200 });

  return (
    <div className="App">
      {isMobileDevice  &&
        <>
            <Mobile/>
        </>
      }
      {isTabletDevice &&
        <>
          <Tablet/>
        </>
      }
      {isLaptop && 
        <>
          <Laptop/>
        </>
      }
      {isDesktop  &&
        <>
          <Desktop/>
        </>
      }
      {isBigScreen   &&
        <>
          <BigScreen/>
        </>
      }
    </div>
  );
}

export default App;