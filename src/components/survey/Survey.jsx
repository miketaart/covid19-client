import React, { Component } from 'react';
import axios from 'axios';
import CheckBox from './CheckBox';
import { withRouter } from 'react-router-dom';

class Survey extends Component {
    autoSave;
    constructor(props) {
        super(props)
        this.state = {
            nickName: '',
            email: '',
            gender: '',
            dateSymptomsAppeared: '',
            symptoms: [
                { value: "Cough", isChecked: false },
                { value: "High temperature", isChecked: false },
                { value: "headache", isChecked: false },
                { value: "Sore throat", isChecked: false },
                { value: "Shortness of breath", isChecked: false },
                { value: "Severe muscle pain", isChecked: false },
                { value: "Harder to smell or taste", isChecked: false },
                { value: "I have no symptoms", isChecked: false },
            ],
            title: '',
            message: '',
            date: '',
            timeStamp: '',
        }
    }

    handleChange = (e) => {
        if (e.target.type === 'checkbox') {
            let symptoms = this.state.symptoms
            symptoms.forEach(symptom => {
                if (symptom.value === e.target.value)
                    symptom.isChecked = e.target.checked
            })
            this.setState({ symptoms: symptoms })
        } else
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
            title: this.state.title,
            message: this.state.message,
            date: new Date().toLocaleDateString('nl-NL', { timeZone: 'Europe/Amsterdam' }),
            timeStamp: new Date().toLocaleTimeString('nl-NL', { timeZone: 'Europe/Amsterdam' })
        }

        axios.post("http://localhost:5000/data", response)
        sessionStorage.clear("autoSave")
        this.props.history.push('/')
    }

    componentDidMount() {
        this.autoSave = JSON.parse(sessionStorage.getItem('autoSave'));
        if (sessionStorage.getItem('autoSave')) {
            this.setState({
                nickName: this.autoSave.nickName,
                email: this.autoSave.email,
                gender: this.autoSave.gender,
                dateSymptomsAppeared: this.autoSave.dateSymptomsAppeared,
                symptoms: this.autoSave.symptoms,
                title: this.autoSave.title,
                message: this.autoSave.message
            })
        } else {
            this.setState({
                nickName: '',
                email: '',
                gender: '',
                dateSymptomsAppeared: '',
                symptoms: [
                    { value: "Cough", isChecked: false },
                    { value: "High temperature", isChecked: false },
                    { value: "headache", isChecked: false },
                    { value: "Sore throat", isChecked: false },
                    { value: "Shortness of breath", isChecked: false },
                    { value: "Severe muscle pain", isChecked: false },
                    { value: "Harder to smell or taste", isChecked: false },
                    { value: "I have no symptoms", isChecked: false },
                ],
                title: '',
                message: ''
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        sessionStorage.setItem('autoSave', JSON.stringify(prevState));
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
                            Your name
                        </label>
                        <input
                            placeholder="SillyDragon123"
                            name="nickName"
                            value={this.state.nickName}
                            onChange={this.handleChange}
                            required="required"
                        />
                    </p>
                    <p>
                        <label>Your gender</label>
                        <input
                            type="radio"
                            name="gender"
                            value='male'
                            onChange={this.handleChange}
                            checked={this.state.gender === 'male'}

                        />
                        <label className="Survey__Form__Gender-label" htmlFor="gender">male</label>

                        <input
                            type="radio"
                            name="gender"
                            value='female'
                            onChange={this.handleChange}
                            checked={this.state.gender === 'female'}
                        />
                        <label className="Survey__Form__Gender-label">female</label>
                    </p>
                    <p>
                        <label>
                            Date symptoms appeared
                        </label>
                        <input
                            type="date"
                            name="dateSymptomsAppeared"
                            value={this.state.dateSymptomsAppeared}
                            onChange={this.handleChange}
                            required="required"
                        />
                    </p>

                    <div>
                        <label>Check your symptoms</label>
                        <ul className="Survey__Form__List">
                            {
                                this.state.symptoms.map((symptom, index) => {
                                    return (<CheckBox key={index} handleChange={this.handleChange}  {...symptom} />)
                                })
                            }
                        </ul>
                    </div>

                    <p>
                        <label>
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required="required"
                        />
                    </p>
                    <p>
                        <label>
                            Title of your post
                        </label>
                        <input
                            placeholder="Enter a descriptive title"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                            required="required"
                        />
                    </p>
                    <p>
                        <label>
                            Describe your experience
                        </label>
                        <textarea
                            placeholder="Your experience"
                            name="message"
                            value={this.state.message}
                            onChange={this.handleChange}
                            required="required"
                        />
                    </p>
                    <button className="Survey__Form-button" onClick={this.handleSubmit}>Post your experience</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Survey);