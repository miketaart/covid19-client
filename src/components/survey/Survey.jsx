import React, { Component } from 'react';
import axios from 'axios';
import CheckBox from './CheckBox';
import { withRouter } from 'react-router-dom';

const initialState = {
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
    nameError: '',
    emailError: '',
    titleError: '',
    messageError: ''
}

class Survey extends Component {
    autoSave;
    constructor(props) {
        super(props)
        this.state = initialState;
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

    validate = () => {
        let nameError = '';
        let emailError = '';
        let titleError = '';
        let messageError = '';

        if (!this.state.nickName) {
            nameError = 'We really want to know your name.';
        }

        if (!this.state.email.includes("@")) {
            emailError = 'Forgot the @?';
        }

        if (!this.state.title) {
            titleError = 'Throw me a title and I forgive you.';
        }
        if (!this.state.message) {
            messageError = 'In a hurry? You forgot to tell your story.';
        }

        if (emailError || nameError || titleError || messageError) {
            this.setState({ nameError, emailError, titleError, messageError });
            return false;
        }

        return true;
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

        const isValid = this.validate();
        if (isValid) {
            axios.post(`${process.env.REACT_APP_API_BASE}/data`, response)
            sessionStorage.clear("autoSave")
            this.props.history.push('/')

            this.setState(initialState);
        }
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
                <h1 className="Survey__Header">Share your experience</h1>
                <hr />

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
                        <span className="error__message">{this.state.nameError}</span>
                    </p>
                    <hr />
                    <p className="Survey__Form__Radio">
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
                    <hr />
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
                    <hr />
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
                    <hr />
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
                        <div className="error__message">{this.state.emailError}</div>
                    </p>
                    <hr />
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
                        <span className="error__message">{this.state.titleError}</span>
                    </p>
                    <hr />
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
                        <span className="error__message">{this.state.messageError}</span>
                    </p>
                    <button className="Survey__Form-button" onClick={this.handleSubmit}>Post your experience</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Survey);