import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: props.post
        }
    }
    componentDidMount() {
        console.log(this.state.post)
    }
    render() {
        return (
            <li className="Blog__Post-Container" key={this.state.post.id}>
                <Link className="Blog__Post-link" to={`/posts/${this.state.post.id}`}> {this.state.post.title} </Link>
                <p> {this.state.post.message}</p>
                <p> By {this.state.post.user.nickName} on {this.state.post.date}</p>
            </li>
        );
    }
}

export default Post;