import React from 'react';
import Time from './Time';
import Date from './Date';

const Navbar = () => {
    return (
        <div className="Navbar">
            <h1 className="Navbar__title">The Covid-19 Experience</h1>
            <div style={{ width: "250px" }} className="Navbar__TimeDate-container">
                <Date />
                <Time />
            </div>
        </div>
    );
}

export default Navbar;
