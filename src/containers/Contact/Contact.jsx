import React from 'react';
import { Link } from "react-router-dom";

const Contact = () => {
    return (


        <form className="container">
            <div className="row">
                <div className="col-sm-9 main-content">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>Contact</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div 
                            className="container"
                            action="https://formspree.io/f/mgepqwzp"
                            method="post">
                                <div className="form-group">
                                    <label for="name">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="Name"
                                        placeholder="Name"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="form-control"
                                        id="email"
                                        name="Email"
                                        aria-describedby="emailHelp"
                                    />
                                    <small id="emailHelp" className="form-text text-muted"
                                    >I'll never share your email with anyone else.</small
                                    >
                                    <div className="form-group">
                                        <label for="exampleFormControlTextarea1">Message</label>
                                        <textarea className="form-control" name="Message" placeholder="Message" id="Message" rows="3"></textarea>
                                    </div>
                                </div>
                                <Link type="submit" className="btn btn-primary" to="/home">Submit</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3"></div>
            </div>
        </form>
    );
};

export default Contact;