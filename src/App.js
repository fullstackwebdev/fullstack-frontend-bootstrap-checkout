import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Checkout from './components/Checkout.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Checkout} />


      </Router>

    );
  }
}

export default App;
