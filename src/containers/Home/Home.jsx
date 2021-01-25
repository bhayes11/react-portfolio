import React from 'react';

const Home = () => {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-9 main-content">
                        <div class="row">
                            <div class="col-sm-12">
                                <h3>About Brian</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <img
                                    src="assets/images/bio.png"
                                    class="float-left about-image"
                                    alt="Brian Hayes"
                                    width="40%"
                                />
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
<video className='videoTag' id="videobg" autoPlay muted>
    <source src={videoBG} type='video/mp4' />
</video> */}