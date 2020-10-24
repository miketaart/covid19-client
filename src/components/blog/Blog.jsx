import React, { Component } from 'react'
import axios from 'axios';
import EditPost from '../survey/EditPost'

export default class Blog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            search: '',
            show: false
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

    updateSearch = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    componentDidMount() {
        this.getAllPosts()
    }

    showEditor = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        let search = this.state.search.toLowerCase()
        const edit = this.state.show
        if (!edit) {
            return (
                <div className="Blog">
                    <input className="input" type="text" placeholder="Search in messages" value={this.state.search} onChange={this.updateSearch} />
                    {this.state.posts
                        .filter((post) =>
                            post.message.toLowerCase()
                                .includes(search))
                        .map(post => (
                            <div className="Blog__Post-Container" key={post.id}>
                                <p className="Blog__Post__Message"> {post.title}</p>
                                <p className="Blog__Post__Message"> {post.message}</p>
                                <p className="Blog__Post__Message"> By {post.user.nickName} on {post.date}</p>
                                <button onClick={this.showEditor}>Edit</button>
                            </div>
                        ))}
                </div>
            )
        } else {
            return (
                <div className="Blog">
                    {this.state.posts
                        .filter((post) =>
                            post.message.toLowerCase()
                                .includes(search))
                        .map(post => (
                            <div className="Blog__Post-Container" key={post.id}>
                                <EditPost />
                            </div>
                        ))}
                </div>
            )
        }

    }
}
