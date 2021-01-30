import React from 'react';
import Card from "../../components/Card/Card";
import project_1 from "../../assets/project_1.png"

const Portfolio = () => {
    return (
        <div className="container">
        <div className="row">
          <div className="col-sm-8 main-content-port">
            <div className="row">
              <div className="col-sm-12">
                <h3>Portfolio</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 portfolio-column">
                <Card image={project_1} title="Project 1" description="Description" /> 
              </div>
              <div className="col-sm-6 portfolio-column">
                <Card image={project_1} title="Project 1" description="Description" /> 
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 portfolio-column">
                <a href="https://bhayes11.github.io/password-generator/" target="_blank"><img src="assets/images/third.jpg"
                    className="portfolio-image" alt="Portfolio Image" width="100%" /></a>
                <h5>Password Generator</h5>
                <p className="port-text">The user is able to choose between 8 to 128 mixed characters to create a secure
                  password.
                </p>
              </div>
              <div className="col-sm-6 portfolio-column">
                <a href="https://bhayes11.github.io/work-day-scheduler/" target="_blank"><img src="assets/images/first.png"
                    className="portfolio-image" alt="Portfolio Image" width="100%" /></a>
                <h5>Work Day Scheduler</h5>
                <p className="port-text">The user is able to input data for each hour in a working day and save the activity as
                  the day progresses.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 portfolio-column">
                <a href="https://github.com/bhayes11/burger" target="_blank"><img src="assets/images/burger.png"
                    className="portfolio-image" alt="Portfolio Image" width="100%" /></a>
                <h5>Burger App</h5>
                <p className="port-text">The user is able to enter a burger, devour it, and delete it from the list.</p>
              </div>
              <div className="col-sm-6 portfolio-column">
              </div>
            </div>
    
            <div className="col-sm-6"></div>
          </div>
        </div>
        <div className="col-sm-4"></div>
      </div>
    );
};

export default Portfolio;