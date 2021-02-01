import React from 'react';
import "./Card.css";

const Card = (props) => {
    return (
        <div className="container card-pad">
            <div className="row">
                <div className="col-sm-12 card-title port-pad">
                    <div className="card large-port">
                        <img src={props.image} className="card-top portfolio-image" alt={props.title}></img>
                        <div className="card-body">
                            <h4 className="card-title">{props.title}</h4>
                            <a classname="card-link" href={props.Github}>Github Repository</a>
                            <br/>
                            <a classname="card-link" href={props.Website}>Live Site</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;