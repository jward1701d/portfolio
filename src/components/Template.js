import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import logo from '../logo.svg';
//import background from './background2.jpeg';
import './styles.css';

import Header from '../shared/header/Header';
import Footer from '../shared/footer/Footer';
import HomePage from './Home/HomePage'
import AboutPage from './About/AboutPage'
import ProjectsPage from './Projects/ProjectsPage'
import SkillsPage from './Skills/SkillsPage'

import Coalfield from './Projects/web/coalfield';
import Speedway from './Projects/web/speedway';
import Distillery from './Projects/web/distillery';
import Restoration from './Projects/web/restoration';
import Challange from './Projects/web/challange';


class Index extends Component {
  render() {
    return (
      <Router>
        <div >
          <Header />
            <div className="container">
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/skills" component={SkillsPage} />
              <Route exact path="/projects" component={ProjectsPage} />
              <Route exact path="/projects/web/coalfield" component={Coalfield} />
              <Route exact path="/projects/web/speedway" component={Speedway} />
              <Route exact path="/projects/web/distillery" component={Distillery} />
              <Route exact path="/projects/web/restoration" component={Restoration} />
              <Route exact path="/projects/web/challange" component={Challange} />
            </div>
            <Footer />
        </div>
      </Router>
    );
  }
}

export default Index;
