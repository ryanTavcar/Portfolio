import React from 'react';
import '../css/Projects.css';


function Project() {

    const externalURL = (e) => {
        const repo = e.target.children[1].lastChild.innerText;
        window.location.assign(`https://github.com/ryanTavcar/${repo}`);
    }

    return (
        <div className="wrapper">
            <div className="item01 items" onClick={externalURL}>
                <img src="https://cdn.stocksnap.io/img-thumbs/960w/UDX1LKMGAH.jpg" alt=""></img>
                <div className="meta">
                    <h2>CallBack Cats</h2>
                    <span>callback-cats</span>
                </div>
            </div>
            <div className="item02 items" onClick={externalURL}>
                <img src="https://cdn.stocksnap.io/img-thumbs/960w/SLEIJCNKIJ.jpg" alt=""></img>
                <div className="meta">
                    <h2>CallBack Cats API</h2>
                    <span>callback-cats-api</span>
                </div>
            </div>
            <div className="item03 items" onClick={externalURL}>
                <img src="https://cdn.stocksnap.io/img-thumbs/960w/OLRVTGAAS2.jpg" alt=""></img>
                <div className="meta">
                    <h2>Portfolio</h2>
                    <span>Portfolio</span>
                </div>
            </div>
            <div className="item04 items" onClick={externalURL}>
                <img src="https://cdn.stocksnap.io/img-thumbs/960w/6DY9WEKPPB.jpg" alt=""></img>
                <div className="meta">
                    <h2>Pillars</h2>
                    <span>Pillars</span>
                </div>
            </div>
            <div className="item05 items" onClick={externalURL}>
                <img src="https://cdn.stocksnap.io/img-thumbs/960w/VEQY2MMJYL.jpg" alt=""></img>
                <div className="meta">
                    <h2>Weather App</h2>
                    <span>weather-app</span>
                </div>
            </div>
            <div className="item06 items" onClick={externalURL}>
                <img src="https://cdn.stocksnap.io/img-thumbs/960w/EIB873F1MT.jpg" alt=""></img>
                <div className="meta">
                    <h2>Rails Marketplace App</h2>
                    <span>Rails_marketplace_app</span>
                </div>
            </div>

            <blockquote className="quote" cite="Radek sam w sobie">Nie chce mi się szukać dennego cytatu, który odmieni moje życie o 360 stopni.</blockquote>

            <div className="item07 items" onClick={externalURL}>
                <img src="https://cdn.stocksnap.io/img-thumbs/960w/IERCHNQJIH.jpg" alt=""></img>
                <div className="meta">
                    <h2>Palette Generator</h2>
                    <span>Palette-Generator-V2</span>
                </div>
            </div>
            <div className="item08 items" onClick={externalURL}>
                <img src="https://cdn.stocksnap.io/img-thumbs/960w/CWHC0BHB89.jpg" alt=""></img>
                <div className="meta">
                    <h2>Got Milk?</h2>
                    <span>Got-Milk</span>
                </div>
            </div>
            <div className="item09 items" onClick={externalURL}>
                <img src="https://cdn.stocksnap.io/img-thumbs/960w/XKDN0IGNFJ.jpg" alt=""></img>
                <div className="meta">
                    <h2>Javascript Calculator</h2>
                    <span>Javascript-Calculator</span>
                </div>
            </div>
            <div className="item10 items" onClick={externalURL}>
                <img src="https://cdn.stocksnap.io/img-thumbs/960w/XKDN0IGNFJ.jpg" alt=""></img>
                <div className="meta">
                    <h2>CSS Picture Frame</h2>
                    <span>CSS-Picture-Frame</span>
                </div>
            </div>
        </div>
    )
}

export default Project
