import React, { Component } from 'react';
//import axios from 'axios';

export default class Survey extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nickName: '',
            email: '',
            sex: '',
            dateSymptomsAppeared: '',
            q1: '',
            q2: '',
            symptoms: [
                { value: "cough", isChecked: false },
                { value: "fever", isChecked: false },
                { value: "headache", isChecked: false },
                { value: "musclepain", isChecked: false }
            ],
            date: '',
            comment: '',
            timeStamp: '',
        }
    }

    render() {
        return (
            <div className="Survey">
                <div className="Survey_Header-Container">
                    <p className="Survey_Header">Share your experience</p>
                </div>

                <form className="Survey__Form">
                    <label>
                        <input
                            placeholder="Add first name"
                        />
                    </label>
                    <label>
                        <input
                            placeholder="Date of birth"
                            type="date"
                        />
                    </label>
                    <div>
                        <input
                            type="radio"
                            value='male'
                        />
                        <label htmlFor="sex">male</label>
                        <input
                            type="radio"
                            value='female'
                        />
                        <label htmlFor="sex">female</label>
                    </div>
                    <label>
                        <input
                        type="email"
                            placeholder="Email"
                        />
                    </label>
                    <label>
                        <input
                            placeholder="q1"
                        />
                    </label>
                    <label>
                        <input
                            placeholder="q2"
                        />
                    </label>
                    <label>
                        <input
                            placeholder="comment"
                        />
                    </label>

                    <button className="formButton" >Add experience</button>
                </form>
            </div>
        )
    }
}
