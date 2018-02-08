import React, { Component } from 'react';
import './homepage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="left">
          <h1>James  Ward</h1>
          <h3>- Web developer</h3>
          <h3>- Game Programmer</h3>
        </div>
        <div className="right">
          <img src="http://via.placeholder.com/250x250"/>
        </div>
      </div>
    );
  }
}

export default HomePage;