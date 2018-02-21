import React, { Component } from 'react';
import './homepage.css';

const photo = require('./selfie1.JPG');


class HomePage extends Component {
  render() {
    return (
      <div className="row superContainer">
        <div className="col-md-6 left">
          <h1>James  Ward</h1>
          <h3>- Web developer</h3>
          <h3>- Game Designer / Programmer</h3>
        </div>
        <div className="col-md-6">
          <img className="right img-responsive" src={photo} alt="James Ward"/>
        </div>
      </div>
    );
  }
}

export default HomePage;