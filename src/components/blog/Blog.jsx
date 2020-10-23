import React, { Component } from 'react'
import axios from 'axios';

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

    render() {
        let search = this.state.search.toLowerCase()
        return (
            <div className="Blog">
                <input className="input" type="text" placeholder="Filter by symptoms" value={this.state.search} onChange={this.updateSearch} />
                {this.state.posts
                    .filter((post) =>
                        post.message.toLowerCase()
                            .includes(search))
                    .map(post => (
                        <div className="Blog__Post-Container" key={post.id}>
                            <p className="Blog__Post">{post.timeStamp} {post.dateSymptomsAppeared.split('-').reverse().join('-')}</p>
                        </div>
                    ))}
            </div>
        )
    }
}
