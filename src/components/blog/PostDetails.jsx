import React, { Component } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom'

class PostDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            details: '',
            name: '',
            gender: ''
        }
    }

    getSinglePost() {
        let postId = this.props.match.params.id;
        axios.get(`http://localhost:5000/data/${postId}`)
            .then(response => {
                this.setState({
                    details: response.data,
                    name: response.data.user.nickName,
                    gender: response.data.user.gender
                }, () => { console.log(this.state) })
            })
            .catch(error => error)
    }

    componentDidMount() {
        this.getSinglePost()
    }
    render() {
        return (
            <div className="">
                <h1 className=""> {this.state.title} </h1>
                <p>Symptoms</p>
                <h2>{this.state.gender}</h2>
                <h3>Date Symptoms appeared: {this.state.details.dateSymptomsAppeared}</h3>
                <p> {this.state.message}</p>
                <p> By {this.state.name} on {this.state.details.date}</p>
            </div>
        );
    }
}

export default PostDetails;