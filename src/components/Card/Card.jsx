import React from 'react';

const Card = (props) => {
    return (
        <div ClassName="container">
            <div Classname="row">
                <div ClassName="col-sm-6 backgroundWhite">
                    <div ClassName="card">
                        <img src={props.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h4 className="card-title">{props.title}</h4>
                            <p classname="card-text">{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;