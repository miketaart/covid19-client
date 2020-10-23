import React, { Component } from 'react'
import axios from 'axios';

export default class Blog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
        }
    }

    getAllPosts = () => {
        axios
            .get(`http://localhost:5000/data`)
            .then((response) => {
                console.log(response.data)
                const posts = response.data
                this.setState({
                    posts: posts,
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    componentDidMount() {
        this.getAllPosts()
    }

    render() {
        return (
            <div className="Blog">
                {this.state.posts
                    .map(post => (
                        <div className="Blog__Post-Container" key={post.id}>
                            <p className="Blog__Post">{post.timeStamp} {post.dateSymptomsAppeared.split('-').reverse().join('-')}</p>
                        </div>
                    ))}
            </div>
        )
    }
}
