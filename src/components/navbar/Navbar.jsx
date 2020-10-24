import React from 'react';
import Time from './Time';
import Date from './Date';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="Navbar__logo-container">
                <img style={{ width: "50px", outline: "1px solid #F80701" }} className="Navbar__logo" src="https://image.freepik.com/vrije-vector/covid-19-rode-logo-sjabloon_23-2148501246.jpg" alt="logo" />
            </div>
            <Link to="/survey" className="">Share you experience</Link>
            <div style={{ width: "250px", outline: "1px solid #F80701" }} className="Navbar__TimeDate-container">
                <Date />
                <Time />
            </div>
        </div>
    );
}

export default Navbar;
