import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom'

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

    //Get a single post/experience based on the id
    getSinglePost() {
        let postId = this.props.match.params.id;
        axios.get(`${process.env.REACT_APP_API_BASE}/data/${postId}`)
            .then(response => {
                this.setState({
                    details: response.data,
                    title: response.data.title,
                    name: response.data.user.nickName,
                    gender: response.data.user.gender,
                    dateSymptomsAppeared: response.data.dateSymptomsAppeared.split('-').reverse().join('-'),
                    symptomsList: response.data.symptoms,
                    message: response.data.message
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // Delete a single post/experience based on the id
    deletePost = () => {
        let postId = this.props.match.params.id;
        axios.delete(`${process.env.REACT_APP_API_BASE}/data/${postId}`)
            .then(response => {
                this.props.history.push('/')
            })
            .catch((error) => {
                console.log(error);
            })
    }

    componentDidMount() {
        this.getSinglePost()
    }
    render() {
        return (
            <div className="PostDetails">
                <article className="PostDetails__Experience">
                    <h2 className="PostDetails__Title"> {this.state.title}</h2>
                    <p className="PostDetails__User">Written by {this.state.name} ({this.state.gender}). Symptoms appeared for the first time on {this.state.dateSymptomsAppeared}.</p>
                    <p className="PostDetails__Message"> {this.state.message}</p>
                </article>

                <Link to="/"><button className="PostDetails-button">Back</button></Link>
                <Link to={`/posts/edit/${this.props.match.params.id}`}><button className="PostDetails-button">Edit</button></Link>
                <button className="PostDetails-button" onClick={this.deletePost}>Delete</button>
            </div>
        );
    }
}

export default withRouter(PostDetails);