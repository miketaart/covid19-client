import React from 'react';
import Time from './Time';
import Date from './Date';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="Navbar__logo-container">
                <img style={{ width: "50px", outline: "1px solid #F80701" }} className="Navbar__logo" src="https://image.freepik.com/vrije-vector/covid-19-rode-logo-sjabloon_23-2148501246.jpg" alt="logo" />
            </div>
            <h1>The Covid-19 Experience</h1>

            <div style={{ width: "250px", outline: "1px solid #F80701" }} className="Navbar__TimeDate-container">
                <Date />
                <Time />
            </div>
        </div>
    );
}

export default Navbar;
