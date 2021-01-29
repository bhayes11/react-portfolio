import React from 'react';

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
                                <img src="assets/images/bio.png" className="float-left about-image" alt="Brian Hayes" width="40%" />
                                <p>
                                As a media and technology professional, Brian Hayes has been
                                involved in projects ranging from video production, illustration
                                and design to mobile website development. Brian has a background
                                in Graphic Communication from Kennesaw State University and is
                                currently focused on becoming a MERN developer. Due to his
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
                            <div className="card-body">
                                <h5 className="card-title text-center">Full Stack Web developer</h5>
                                <a href="https://www.linkedin.com/in/brian-hayes-4a723948/" className="ml-5">LinkedIn</a>
                                <a href="https://github.com/bhayes11" className="ml-5">Github</a>
                                <a href="./assets/images/Brian_Hayes_Resume.pdf" className="ml-5">Resume</a>
                            </div>
                        </div>
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