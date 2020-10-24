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

    getSinglePost() {
        let postId = this.props.match.params.id;
        axios.get(`http://localhost:5000/data/${postId}`)
            .then(response => {
                this.setState({
                    details: response.data,
                    title: response.data.title,
                    name: response.data.user.nickName,
                    gender: response.data.user.gender,
                    dateSymptomsAppeared: response.data.dateSymptomsAppeared.split('-').reverse().join('-'),
                    symptomsList: response.data.symptoms,
                    message: response.data.message
                }, () => { console.log(this.state.gender) })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deletePost = () => {
        let postId = this.props.match.params.id;
        axios.delete(`http://localhost:5000/data/${postId}`)
            .then(response => {
                this.props.history.push('/')
            })
            .catch((error) => {
                console.log(error);
            })
    }

    componentDidMount() {
        console.log(this.props)
        this.getSinglePost()
    }
    render() {
        return (
            <div className="">
                <article>
                    <h2 className="Post__title"> {this.state.title}</h2>
                    <p className="Post__user">A {this.state.gender} named {this.state.name} started feeling symptoms on {this.state.dateSymptomsAppeared}</p>
                    <p className="Post__message"> {this.state.message}</p>
                </article>

                <Link to="/">Back</Link>
                <Link to={`/posts/edit/${this.props.match.params.id}`}>Edit</Link>
                <button onClick={this.deletePost}>Delete post</button>
            </div>
        );
    }
}

export default withRouter(PostDetails);