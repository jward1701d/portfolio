import React, { Component } from 'react';
import './homepage.css';

const photo = require('./selfie1.JPG');


class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="left">
          <h1>James  Ward</h1>
          <h3>- Web developer</h3>
          <h3>- Game Designer / Programmer</h3>
        </div>
        <div className="right">
          <img src={photo}/>
        </div>
      </div>
    );
  }
}

export default HomePage;