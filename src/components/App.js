import React, { Component } from 'react';
import '../styles/App.css';
import Background from '../images/background.jpg'

class App extends Component {
  render() {
    return (
      <div>
        <h3>Sup, Welcome to the blog</h3>
        <img className="img-fluid" src={Background} alt="background" />
      </div>

    );
  }
}

export default App;
