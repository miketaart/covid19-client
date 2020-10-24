import React, { Component } from 'react'
import axios from 'axios';
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

    render() {
        let search = this.state.search.toLowerCase()

        return (
            <div className="Blog">
                <input className="input" type="text" placeholder="Search in messages" value={this.state.search} onChange={this.updateSearch} />
                {this.state.posts
                    .filter((post) =>
                        post.message.toLowerCase()
                            .includes(search))
                    .map(post => (
                        <div className="Blog__Post-Container" key={post.id}>
                            <h3 className="Blog__Post__Message"> {post.title}</h3>
                            <p className="Blog__Post__Message"> {post.message}</p>
                            <p className="Blog__Post__Message"> By {post.user.nickName} on {post.date}</p>
                        </div>
                    ))}
            </div>
        )
    }
}
