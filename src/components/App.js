import React, { Component } from 'react';
import '../styles/App.css';
import Background from '../images/background.jpg'

class App extends Component {
  render() {
    return (
      <div>
        <h3 className="splash-header">Sup, Welcome to the blog</h3>
        <img className="img-fluid splash-img" src={Background} alt="background" />
      </div>

    );
  }
}

export default App;
