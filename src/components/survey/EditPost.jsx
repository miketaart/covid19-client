import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

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
      id: ''
    }
  }

  getPostDetails = () => {
    let postId = this.props.match.params.id;
    axios.get(`${process.env.REACT_APP_API_BASE}/data/${postId}`)
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
          id: response.data.id
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

    axios.put(`${process.env.REACT_APP_API_BASE}/data/${this.state.id}`, response)
    this.props.history.push(`/posts/${this.state.id}`)
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentDidMount() {
    this.getPostDetails();
  }

  render() {
    return (
      <div className="EditForm">
        <form>
          <p className="EditForm-container">
            <label htmlFor="title">Title</label>
            <input
              className="EditForm__Title"
              placeholder="Edit title"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              required="required"
            />
          </p>
          <p className="EditForm-container">
            <label htmlFor="message">Message</label>
            <textarea
              className="EditForm__Message"
              placeholder="Edit message"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
              required="required"
            />
          </p>
          <Link to={`/posts/${this.props.match.params.id}`}><button className="Survey__Form-button">Back</button></Link>
          <button className="Survey__Form-button" onClick={this.handleSubmit}>Edit</button>
        </form>
      </div>
    )
  }
}

export default withRouter(EditPost);