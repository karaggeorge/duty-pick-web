import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Helmet from 'react-helmet'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet title="Duty Pick" />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
