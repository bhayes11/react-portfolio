import React from 'react';
import {Link} from "react-router-dom";

const Contact = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 main-content">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>Contact</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <form>
                                <div className="form-group">
                                    <label for="name">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
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
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                    />
                                    <small id="emailHelp" className="form-text text-muted"
                                    >I'll never share your email with anyone else.</small
                                    >
                                    <div className="form-group">
                                        <label for="exampleFormControlTextarea1">Message</label>
                                        <textarea className="form-control" placeholder="Message" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>
                                <Link type="submit" className="btn btn-primary" to="/home">Submit</Link>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3"></div>
            </div>
        </div>
    );
};

export default Contact;