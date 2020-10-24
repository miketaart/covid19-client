import React, { Component } from 'react'
import axios from 'axios';
import Post from './Post';
//import { Link } from 'react-router-dom'

export default class Blog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            search: ''
        }
    }

    getAllPosts = () => {
        axios
            .get(`http://localhost:5000/data`)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    posts: response.data,
                }, () => { console.log(this.state.posts) })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    updateSearch = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    componentDidMount() {
        this.getAllPosts()
    }

    render() {
        let search = this.state.search.toLowerCase()

        return (
            <div className="Blog">
                <input className="input" type="text" placeholder="Search in messages" value={this.state.search} onChange={this.updateSearch} />
                <ul>
                    {this.state.posts
                        .filter((post) =>
                            post.message.toLowerCase()
                                .includes(search))
                        .map(post => (
                            <Post key={post.id} post={post} />
                        ))}
                </ul>
            </div>
        )
    }
}
