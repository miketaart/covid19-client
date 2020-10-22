import React, { Component } from 'react'

export default class Time extends Component {
    constructor() {
        super()
        this.state = {
            time: new Date()
        }
    }

    currentTime = () => {
        this.setState({
            time: new Date()
        })
    }

    componentDidMount() {
        setInterval(() => this.currentTime(), 1000)
    }
    render() {
        return (
            <div>
                {this.state.time.toLocaleTimeString()}
            </div>
        )
    }
}