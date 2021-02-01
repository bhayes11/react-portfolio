import React from 'react';

const Card = (props) => {
    return (
        <div ClassName="container">
            <div Classname="row">
                <div ClassName="col-sm-6 backgroundWhite">
                    <div ClassName="card">
                        <img src={props.image} className="card-img-top" alt={props.title}></img>
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