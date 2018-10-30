import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";
import CurrencyTable from "./CurrencyTable.js";
import SearchBar from "./SearchBar";
import { getAllRates } from "./queries.js";
import { getSingleRate } from "./queries.js";

class App extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
    number: 1,
    singleRate: [],
    rates: [],
    selected: ""
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
    getAllRates().then(res => {
      const rates = res.data[0].rates;
      this.setState({ rates });
    });
  }

  tick = () => {
    this.setState({ time: new Date().toLocaleTimeString() });
  }

  onChange = (event) => {
    this.setState({ number: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    getSingleRate(this.state.selected, this.state.number).then(res => {
      const singleRate = res.data.rates;
      this.setState({ singleRate });
    })
  }

  onClickFn = (rate) => {
    this.setState({ selected: rate.code });
  }

  render() {
    return (
      <div>
        <Header time={this.state.time} />
        <div className="container">
          <div className="row">
            <CurrencyTable onClickFn={this.onClickFn} selected={this.state.selected} rates={this.state.rates} />
            <SearchBar handleSubmit={this.handleSubmit} onChange={this.onChange} singleRate={this.state.singleRate} number={this.state.number} selected={this.state.selected} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
