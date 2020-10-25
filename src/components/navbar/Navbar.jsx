import React from 'react';
import Time from './Time';
import Date from './Date';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="Navbar">
            <NavLink style={{ "text-decoration": "none" }} to="/"><h1 className="Navbar__title">The Covid-19 Experience</h1></NavLink>
            <div style={{ width: "250px" }} className="Navbar__TimeDate-container">
                <Date />
                <Time />
            </div>
        </div>
    );
}

export default Navbar;
