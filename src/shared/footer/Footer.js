import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    year = () => {
        let date = new Date();
        let d = date.getFullYear();
        <span className="copywright">{{d}}</span> 
    }
  render() {
    return (
      <div className="footer"> 
        <span className="copywright">&copy;{new Date().getFullYear()} James O Ward.com</span>
      </div>
    );
  }
}

export default Footer;