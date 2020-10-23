import React, { Component } from 'react';
import axios from 'axios';

export default class Survey extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nickName: '',
            email: '',
            gender: '',
            dateSymptomsAppeared: '',
            symptoms: [
                { value: "Cough", isChecked: false },
                { value: "Fever or high temperature", isChecked: false },
                { value: "headache", isChecked: false },
                { value: "Sore throat", isChecked: false },
                { value: "Shortness of breath", isChecked: false },
                { value: "Severe muscle pain", isChecked: false },
                { value: "Suddenly harder to smell", isChecked: false },
                { value: "Suddenly harder to taste", isChecked: false },
                { value: "I have no symptoms", isChecked: false },
            ],
            message: '',
            date: '',
            timeStamp: '',

        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = () => {
        let response = {
            user: {
                nickName: this.state.nickName,
                email: this.state.email,
                gender: this.state.gender,
            },
            dateSymptomsAppeared: this.state.dateSymptomsAppeared,
            symptoms: this.state.symptoms,
            message: this.state.message,
            date: new Date().toLocaleDateString('en-GB', { timeZone: 'Europe/Amsterdam' }),
            timeStamp: new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/Amsterdam' }),
        }

        axios.post("http://localhost:5000/data", response)
    }

    render() {
        return (
            <div className="Survey">
                <div className="Survey_Header-Container">
                    <p className="Survey_Header">Share your experience</p>
                </div>

                <form className="Survey__Form">
                    <p>
                        <label>
                            How do people call you?
                        </label>
                        <input
                            placeholder="SillyDragon123"
                            value={this.state.nickName}
                            onChange={this.handleChange}
                        />
                    </p>
                    <p>
                        <label htmlFor="">What's your gender?</label>
                        <input
                            type="radio"
                            value='male'
                            onChange={this.handleChange}
                        />
                        <label htmlFor="gender">male</label>

                        <input
                            type="radio"
                            value='female'
                            onChange={this.handleChange}
                        />
                        <label htmlFor="gender">female</label>
                    </p>
                    <p>
                        <label>
                            When did the symptoms appear?
                        </label>
                        <input
                            type="date"
                            value={this.state.dateSymptomsAppeared}
                            onChange={this.handleChange}
                        />
                    </p>

                    <p>
                        <label>What are your symptoms?</label>
                    </p>

                    <p>
                        <label>
                            Your email?
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </p>
                    <p>
                        <label>
                            Describe your experience
                        </label>
                        <input
                            placeholder="Your message"
                            value={this.state.message}
                            onChange={this.handleChange}
                        />
                    </p>
                    <button className="Survey__Form-button" onClick={this.handleSubmit}>Post your experience</button>
                </form>
            </div>
        )
    }
}
