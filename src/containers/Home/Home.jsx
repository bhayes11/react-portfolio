import React from 'react';
import bio from "../../assets/bio.png";
import github from "../../assets/github.jpg";
import linkedin from "../../assets/linkedin.jpg";
import resume from "../../assets/resume.jpg";
import Brian_Hayes_Resume from "../../assets/Brian_Hayes_Resume.pdf";
import "./Home.css";

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 main-content">
                        <div className="row">
                            <div className="col-sm-12">
                                <h3>About Brian</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <img className="float-left about-image" src={bio} alt="Brian Hayes" width="40%"></img>
                                <p>
                                As a media and technology professional, Brian Hayes has been
                                involved in projects ranging from video production, illustration
                                and design to mobile website development. Brian has a background
                                in Graphic Communication from Kennesaw State University and is
                                currently focused on Full Stack Web Development. Due to his
                                proclivity for creating things, Brian enjoys learning how to
                                merge his artistic background with mobile development.
                                </p>
                                <p>
                                When Brian is not involved in his professional pursuits, he
                                enjoys fishing, kayaking, and mountain biking with his two brave
                                daughters. You will also find him grilling on his Weber on
                                Saturday nights or tending to his tiny garden.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <h3>Say Hello.</h3>
                        <a href="https://github.com/bhayes11" target="_blank"><img className="social" src={github} alt="GitHub"></img></a>
                        <a href="https://www.linkedin.com/in/brian-hayes-4a723948/" target="_blank"><img className="social" src={linkedin} alt="LinkedIn"></img></a>
                        <a href={Brian_Hayes_Resume} target="_blank"><img class="social" src={resume} alt="Resume"></img></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

// import  './LoginPage.css';
// // import RegistrationPage from "../RegistrationPage/RegistrationPage";
// import videoBG from "../../images/homepage.mp4"

{/* <main>
<video classNameNameName='videoTag' id="videobg" autoPlay muted>
    <source src={videoBG} type='video/mp4' />
</video> */}