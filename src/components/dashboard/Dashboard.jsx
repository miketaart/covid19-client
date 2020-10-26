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
            population: '',
            selectedCountry: 'world',
            flagUrl: '',
            totalCases: '',
            totalDeaths: '',
            totalRecovered: '',
            todayCases: '',
            todayDeaths: '',
            todayRecovered: '',
            newCases: '',
            deaths: '',
            totalTests: '',
            getStatsYesterday: false
        }
    }

    getAllCountries = () => {
        axios
            .get(`${process.env.REACT_APP_COVID_API}/countries?yesterday=${this.state.getStatsYesterday}&twoDaysAgo=false`)
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
            axios.get(`${process.env.REACT_APP_COVID_API}/countries/${this.state.selectedCountry}?yesterday=${this.state.getStatsYesterday}&twoDaysAgo=false&strict=true`)
                .then((res) => {
                    this.setState({
                        loading: false,
                        population: res.data.population,
                        totalCases: res.data.cases,
                        totalDeaths: res.data.deaths,
                        totalRecovered: res.data.recovered,
                        todayCases: res.data.todayCases,
                        todayDeaths: res.data.todayDeaths,
                        todayRecovered: res.data.todayRecovered,
                        totalTests: res.data.tests,
                        flagUrl: res.data.countryInfo.flag
                    })
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    getTotalInfo = () => {
        axios.get(`${process.env.REACT_APP_COVID_API}/all?yesterday=${this.state.getStatsYesterday}&twoDaysAgo=false`)
            .then((res) => {
                this.setState({
                    loading: false,
                    population: res.data.population,
                    totalCases: res.data.cases,
                    totalDeaths: res.data.deaths,
                    totalRecovered: res.data.recovered,
                    todayCases: res.data.todayCases,
                    todayDeaths: res.data.todayDeaths,
                    todayRecovered: res.data.todayRecovered,
                    totalTests: res.data.tests,
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
                <div className="Dashboard__Options-container">
                    <Toggle action={this.handleClick}>{this.state.getStatsYesterday ? 'Yesterday' : 'Today'}</Toggle>

                    <div className="Dashboard__Options">
                        <select className="Dashboard__Options-select" name="countries" id="countries" onChange={this.handleChange} >
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
                <div className="Dashboard-container">
                    <div className="Dashboard__Stat-container">
                        <div className="Dashboard__Stat">
                            <h2>{this.state.totalCases.toLocaleString('en').replace(/,/g, '.')}</h2>
                            <p>Total cases</p>
                        </div>
                        <div className="Dashboard__Stat">
                            <h2>{this.state.totalDeaths.toLocaleString('en').replace(/,/g, '.')}</h2>
                            <p>Total deaths</p>
                        </div>
                        <div className="Dashboard__Stat">
                            <h2>{this.state.totalRecovered.toLocaleString('en').replace(/,/g, '.')}</h2>
                            <p>Total recovered</p>
                        </div>
                    </div>
                    <div className="Dashboard__Stat-container">
                        <div className="Dashboard__Stat">
                            <h2>{this.state.todayCases.toLocaleString('en').replace(/,/g, '.')}</h2>
                            <p>Today cases</p>
                        </div>
                        <div className="Dashboard__Stat">
                            <h2>{this.state.todayDeaths.toLocaleString('en').replace(/,/g, '.')}</h2>
                            <p>Today deaths</p>
                        </div>
                        <div className="Dashboard__Stat">
                            <h2>{this.state.todayRecovered.toLocaleString('en').replace(/,/g, '.')}</h2>
                            <p>Today recovered</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
