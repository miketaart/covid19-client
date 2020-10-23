import React, { Component } from 'react';
import axios from 'axios';
import Toggle from './Toggle';

/*
    Nice to haves: 
    show time of selected country instead of time client's location.
    Now first entry is hard coded but make it dynamic in future.
    Regional stats to frame the main subject of the app. What's the bread and butter of the app and why is this one better than the already existing covid apps?
    Implement News api for to get recommended reads/articles regarding covid19
    Add differential stat below stat relative to the day before.
*/

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.getAllCountries = this.getAllCountries.bind(this)
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getTotalInfo = this.getTotalInfo.bind(this);
        this.getCountryInfo = this.getCountryInfo.bind(this)

        this.state = {
            loading: true,
            countryList: [],
            selectedCountry: 'world',
            flagUrl: '',
            totalCases: '',
            newCases: '',
            deaths: '',
            getStatsYesterday: false
        }
    }

    getAllCountries = () => {
        axios
            .get(`https://disease.sh/v3/covid-19/countries?yesterday=${this.state.getStatsYesterday}&twoDaysAgo=false`)
            .then((response) => {
                this.setState({
                    loading: false,
                    countryList: response.data
                }, () => this.getCountryInfo())
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getCountryInfo = () => {
        if (this.state.selectedCountry === 'world') {
            this.getTotalInfo()
        } else {
            axios.get(`https://disease.sh/v3/covid-19/countries/${this.state.selectedCountry}?yesterday=${this.state.getStatsYesterday}&twoDaysAgo=false&strict=true`)
                .then((res) => {
                    this.setState({
                        loading: false,
                        totalCases: res.data.cases,
                        newCases: res.data.todayCases,
                        deaths: res.data.deaths,
                        flagUrl: res.data.countryInfo.flag
                    })
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    getTotalInfo = () => {
        axios.get(`https://disease.sh/v3/covid-19/all?yesterday=${this.state.getStatsYesterday}&twoDaysAgo=false`)
            .then((res) => {
                this.setState({
                    loading: false,
                    totalCases: res.data.cases,
                    newCases: res.data.todayCases,
                    deaths: res.data.deaths,
                    flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/International_Flag_of_Planet_Earth.svg/1280px-International_Flag_of_Planet_Earth.svg.png'
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleChange = (e) => {
        this.setState({
            selectedCountry: e.target.value
        }, () => this.getCountryInfo())
    }

    handleClick = () => {
        this.setState({
            getStatsYesterday: !this.state.getStatsYesterday
        }, () => this.getCountryInfo());
    }

    componentDidMount() {
        this.getAllCountries()
    }

    render() {
        return (
            <div className="Dashboard">

            <div className="Dashboard__Stat-container">
                <div className="Dashboard__Stat">
                    <h2>{this.state.totalCases.toLocaleString('en').replace(/,/g, '.') }</h2>
                    <p>Total cases</p>
                </div>
                <div className="Dashboard__Stat">
                    <h2>{this.state.newCases.toLocaleString('en').replace(/,/g, '.') }</h2>
                    <p>New cases</p>
                </div>
                <div className="Dashboard__Stat">
                    <h2>{this.state.deaths.toLocaleString('en').replace(/,/g, '.') }</h2>
                    <p>Total Deaths</p>
                </div>
            </div>
                
            <Toggle action={this.handleClick}>{this.state.getStatsYesterday ? 'Yesterday' : 'Today'}</Toggle>

                <div className="Dashboard__options-container">
                
                    <div className="Dashboard__Options">
                    <select name="countries" id="countries" onChange={this.handleChange} >
                        <option value="world">World</option>
                        {this.state.countryList.map(data => (
                            <option key={data.country} value={data.country}>{data.country}</option>
                        ))}
                    </select>
                    </div>

                    <div className="Dashboard__Options__Flag-container">
                        <img className="Dashboard__Options__Flag" src={this.state.flagUrl} alt="Flag" />
                    </div>
                </div>

            </div>
        );
    }
}

export default Dashboard;