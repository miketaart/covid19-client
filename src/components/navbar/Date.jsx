import React from 'react';

const Date = () => {
    
    let d = new window.Date();
    let date = d.getDate()
    let month = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let nameOfMonth = month[d.getMonth()]
    let year = d.getFullYear()

    return (
        <div>
            {date} {nameOfMonth} {year}
        </div>
    );
}

export default Date;
