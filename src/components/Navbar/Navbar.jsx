import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar-style">
            {/* <a className="navbar-brand" href="index.html">Brian Hayes</a> */}
            <Link to="/" className="navbar-brand">Brian Hayes</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        {/* <a className="nav-link" href="portfolio.html">Portfolio</a> */}
                        <Link to="/portfolio" className="navbar-brand">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="contact.html">Contact</a> */}
                        <Link to="/contact" className="navbar-brand">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;