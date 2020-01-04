import React, { useState, Component } from 'react';
import UsersName from './userName';
import TablaTicTacToe from './tabla';

class App extends Component {
  constructor() {
    super()
    this.state = {
      playerX: '',
      playerO: '',
      coin: '',
      startPlay: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.getCoin = this.getCoin.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  getCoin(coin) {
    this.setState({ startPlay: true, coin: coin })
  }

  render() {

    if (!this.state.startPlay) {
      return <UsersName funcS={this.handleChange} funcZ={this.getCoin} />
    } else {
      return <TablaTicTacToe coin={this.state.coin} playerX={this.state.playerX} playerO={this.state.playerO} />
    }


  }
}

export default App;