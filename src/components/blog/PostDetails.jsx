import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class PostDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            details: '',
            name: '',
            gender: '',
            symptomsList: '',
            dateSymptomsAppeared: '',
            message: ''
        }
    }

    getSinglePost() {
        let postId = this.props.match.params.id;
        axios.get(`http://localhost:5000/data/${postId}`)
            .then(response => {
                this.setState({
                    details: response.data,
                    name: response.data.user.nickName,
                    gender: response.data.user.gender,
                    dateSymptomsAppeared: response.data.dateSymptomsAppeared,
                    symptomsList: response.data.symptoms,
                    message: response.data.message
                }, () => { console.log(this.state.symptomsList) })
            })
            .catch(error => error)
    }

    componentDidMount() {
        this.getSinglePost()
    }
    render() {
        return (
            <div className="">
                <h2 className=""> {this.state.details.title} </h2>
                <p>{this.state.gender}</p>
                <p>Symptoms appeared on {this.state.dateSymptomsAppeared.split('-').reverse().join('-')}</p>
                <p> {this.state.message}</p>
                <p> By {this.state.name} on {this.state.details.date}</p>
                <Link to="/">Back</Link>
                <Link to={`/posts/edit/${this.props.match.params.id}`}>Edit</Link>
            </div>
        );
    }
}

export default PostDetails;