import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: props.post
        }
    }

    render() {
        return (
            <Link style={{ textDecoration: 'none' }} to={`/posts/${this.state.post.id}`}>
                <article className="Post" key={this.state.post.id}>
                    <h3 className="Post__category">Experience</h3>
                    <h2 className="Post__title">{this.state.post.title}</h2>
                    <p className="Post__message"> {this.state.post.message.replace(/^(.{120}[^\s]*).*/, "$1") + '... '} <Link to={`/posts/${this.state.post.id}`}>Click me</Link> </p>
                    <p className="Post__user"> By {this.state.post.user.nickName} on {this.state.post.date}</p>
                </article>
            </Link>
        );
    }
}

export default Post;