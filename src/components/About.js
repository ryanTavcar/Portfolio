import React from 'react'
import '../css/About.css'
import image from '../resources/Profile.jpg';

function About() {
    return (
        <div className="about-wrapper" >

            <div className="subtext">
                <p>A passionate </p>
                <p>developer, working in frontend</p>
            </div>

            <div className="img-wrapper">
                <img src={image} alt="" width="350" height="300"></img>
                <div className="img-wrapper-content">
                    <h3>I'm Ryan Tavcar.</h3>
                    <p>
                        I'm enthusiastic, focused and motivated Junior Developer seeking an opportunity to change careers to web industries by implementing concepts, 
                        knowledge, and methodologies learnt thereby adding value for the organization. Excellent communication skills- both oral and written. 
                        Flexible and adaptable to demands of changing work environments and technologies. Team player and also independently responsible.
                    </p>
                </div>
            </div>

            <div className="articles">

                <div className="card-articles">
                    <h3>Who Am I.</h3>
                    <p>
                        I am currently finishing my final assignment at coderacademy.com, where i have undertaken a full-stack course. I am in the midst of leveling up my skill with NodeJS 
                    </p>
                </div>
                

                <div className="card-articles">
                    <h3>What Seperates Me From The Others.</h3>
                    <p>
                        I'd say my camaraderie amongst any team I find myself in. I'm always eager to find myself working towards a common goal, as it usually leads to new and intruiging technology. I find this techological curiousity as a strength of mine because im always propelled to start engaging with it. This leads to my quick pickup of new frameworks and librrires.
                    </p>
                </div> 



                <div className="card-articles">
                    <h3>Where I See Myself In 5 Years.</h3>
                    <p>
                        In five years i hope to my in higher roles within a company, even taking on leadership roles. 
                    </p>
                </div>



                <div className="card-articles">
                    <h3>What My Skills are.</h3>
                    <p>
                        "My skills exist in"
                    </p>
                </div>


                <div className="card-articles">
                    <h3>How I Can Help You.</h3>
                    <p>
                        "At vero eos et accusamus et iusto odio dignissimos ducimus qui, At vero eos et accusamus et iusto odio dignissimos ducimus qui"
                    </p>
                </div>


                <div className="card-articles">
                    <h3>When I Shine.</h3>
                    <p>
                        "At vero eos et accusamus et iusto odio dignissimos ducimus qui, At vero eos et accusamus et iusto odio dignissimos ducimus qui"
                    </p>
                </div>

            </div>
        </div>
    )
}

export default About
