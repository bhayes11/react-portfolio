import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar-style">
            {/* <a className="navbar-brand" href="index.html">Brian Hayes</a> */}
            <NavLink to="/" className="nav-link" activeClassName="active" activeStyle={{fontWeight: "bold", color: "gray"}}>Brian Hayes</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        {/* <a className="nav-link" href="portfolio.html">Portfolio</a> */}
                        <NavLink to="/portfolio" className="nav-link" activeClassName="active">Portfolio</NavLink>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="contact.html">Contact</a> */}
                        <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;