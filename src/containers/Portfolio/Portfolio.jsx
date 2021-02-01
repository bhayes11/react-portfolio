import React from 'react';
import Card from "../../components/Card/Card";
import project_1 from "../../assets/project_1.png"
import pro_2 from "../../assets/pro_2.png"
import third from "../../assets/third.jpg"
import burger from "../../assets/burger.png"
import first from "../../assets/first.png"
import fitness from "../../assets/fitness.png"
import "./Portfolio.css";

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
              <Card 
                image={project_1} 
                title="ISS Tracker" 
                Github="https://github.com/bhayes11/ISS-Tracker"
                Website="https://github.com/bhayes11/ISS-Tracker"/>
              </div>
              <div className="col-sm-6 portfolio-column">
                <Card 
                image={pro_2} 
                title="Code Crushers: Survive The Banana Force" 
                Github="https://github.com/bhayes11/code-crushers-survive-the-banana-force"
                Website="https://limitless-bastion-03523.herokuapp.com/"/> 
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 portfolio-column">
              <Card 
                image={third} 
                title="Password Generator" 
                Github="https://github.com/bhayes11/password-generator"
                Website="https://bhayes11.github.io/password-generator/"/>
              </div>
              <div className="col-sm-6 portfolio-column">
              <Card 
                image={burger} 
                title="Devour A Burger" 
                Github="https://github.com/bhayes11/burger"
                Website="https://murmuring-sierra-76474.herokuapp.com/"/>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 portfolio-column">
              <Card 
                image={first} 
                title="Work Day Scheduler" 
                Github="https://github.com/bhayes11/work-day-scheduler"
                Website="https://bhayes11.github.io/work-day-scheduler/"/>
              </div>
              <div className="col-sm-6 portfolio-column">
              <Card 
                image={fitness} 
                title="Fitness Tracker" 
                Github="https://github.com/bhayes11/workout-tracker"
                Website="https://ancient-ravine-92555.herokuapp.com/?id=5ffcafdb6e0bf80017dadd47"/>
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