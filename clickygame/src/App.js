import React, { Component } from 'react';
import logo from './public/assets/images/basketball.jpg';
import './public/assets/css/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div class="navbar navbar-dark bg-primary">
            <Navbar />
          </div>
        </Router>
        <header className="App-header">
          <h1>Clicky Game!</h1>
          <h3>Click on a Team Logo to earn points, but don't click on any more than once!</h3>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
