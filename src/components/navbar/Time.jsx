import React, { Component } from 'react'

export default class Time extends Component {
    constructor() {
        super()
        this.state = {
            time: new Date()
        }
    }

    // Get specific time accurate on the second
    currentTime = () => {
        this.setState({
            time: new Date()
        })
    }

    componentDidMount() {
        // Repeat getting time every second to create a clock
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