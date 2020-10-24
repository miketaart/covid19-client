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

    sortEarliestLogic = (a, b) => {
        a = a.date.split('-').reverse().join('');
        b = b.date.split('-').reverse().join('');
        return a.localeCompare(b);
    }

    sortLatestLogic = (a, b) => {
        a = a.date.split('-').reverse().join('');
        b = b.date.split('-').reverse().join('');
        return b.localeCompare(a);
    }

    sortByEarliest = () => {
        this.setState({
            posts: this.state.posts.sort(this.sortEarliestLogic),
        });
    };

    sortByLatest = () => {
        this.setState({
            posts: this.state.posts.sort(this.sortLatestLogic),
        });
    };

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
            <div className="Blog-Container">
                <input className="input" type="text" placeholder="Search in messages" value={this.state.search} onChange={this.updateSearch} />
                <button onClick={this.sortByLatest} className="sort-button">Sort by latest</button>
                <button onClick={this.sortByEarliest} className="sort-button sort-button-active">Sort by earliest</button>
                <div className="Blog">
                    {this.state.posts
                        .filter((post) =>
                            post.message.toLowerCase()
                                .includes(search))
                        .map(post => (
                            <Post key={post.id} post={post} />
                        ))}
                </div>
            </div>
        )
    }
}
