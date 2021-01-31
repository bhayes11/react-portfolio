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
                <Card image={project_1}/> 
                <div>ISS Tracker</div>
                <p className="port-text">ISS Tracker is a dynamic, responsive codebase created to actively track the location of
                the International Space Station at all times.</p>
              </div>
              <div className="col-sm-6 portfolio-column">
                <Card image={pro_2} title="Project 2" description="Description" /> 
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 portfolio-column">
                <Card image={third} title="Password Generator" description="Description" /> 
              </div>
              <div className="col-sm-6 portfolio-column">
                <Card image={burger} title="Burger" description="Description" /> 
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 portfolio-column">
                <Card image={first} title="Work Day Scheduler" description="Description" /> 
              </div>
              <div className="col-sm-6 portfolio-column">
                <Card image={fitness} title="Fitness Tracker" description="Description" /> 
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