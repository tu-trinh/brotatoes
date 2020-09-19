import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.connectToServer = this.connectToServer.bind(this);
  }

  connectToServer() {
    fetch("/");
  }

  componentDidMount() {
    this.connectToServer();
  }

  render() {
    return (
      <Router>
        <div className = "container">
          <p>WAP</p>
        </div>
      </Router>
    );
  }
}

export default App;
