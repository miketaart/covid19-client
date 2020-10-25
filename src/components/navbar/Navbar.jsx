import React from 'react';
import Time from '.././navbar/Time';
import Date from '.././navbar/Date';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="Navbar">
            <NavLink style={{ textDecoration: "none" }} to="/"><h1 className="Navbar__title">The Covid-19 Experience</h1></NavLink>
            <div className="Navbar__TimeDate-container">
                <Date />
                <Time />
            </div>
            <hr className="Breakline" />
        </div>
    );
}

export default Navbar;
