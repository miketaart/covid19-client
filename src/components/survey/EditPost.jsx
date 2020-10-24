import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class EditPost extends Component {
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
      id: '6'
    }
  }

  getPostDetails = () => {
    axios.get(`http://localhost:5000/data/${this.state.id}`)
      .then(response => {
        this.setState({
          nickName: response.data.user.nickName,
          email: response.data.user.email,
          gender: response.data.user.gender,
          dateSymptomsAppeared: response.data.dateSymptomsAppeared,
          symptoms: response.data.symptoms,
          title: response.data.title,
          message: response.data.message,
          date: response.data.date,
          timeStamp: response.data.timeStamp,
        });
      })
      .catch(err => console.log(err));
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
      date: this.state.date,
      timeStamp: this.state.timeStamp
    }

    axios.request({
      method: 'put',
      url: `http://localhost:5000/data/${this.state.id}`,
      data: response
    })
    this.props.history.push('/blog')
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentDidMount() {
    this.getPostDetails();
  }

  render() {
    return (
      <div>
        <form>
          <p>
            <input
              placeholder="Enter a descriptive title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              required="required"
            />
          </p>
          <p>
            <input
              placeholder="Your experience"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
              required="required"
            />
          </p>
          <button className="Survey__Form-button" onClick={this.handleSubmit}>Edit</button>
        </form>
      </div>
    )
  }
}

export default withRouter(EditPost);