import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

class Footer extends Component {
   
  render() {
    return (
      <div className="container-fluid footer"> 
        <div className="row">
          <div className="col-md-7 col-7">
          <span className="copywright">&copy;{new Date().getFullYear()} JamesOWard.com</span>
          </div>
          <div className="col-md-5 col-5  social-links">
            <Link target="_blank" to='https://www.linkedin.com/in/jward1701d/'><span className="social"><i className="fab fa-linkedin-in"/></span></Link>
            <Link target="_blank" to='https://github.com/jward1701d'><span className="social"><i className="fab fa-github"/></span></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;