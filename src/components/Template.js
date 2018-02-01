import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import logo from '../logo.svg';
//import background from './background2.jpeg';
import './styles.css';
import Header from '../shared/header/Header';



import HomePage from './Home/HomePage'
import AboutPage from './About/AboutPage'
import ProjectsPage from './Projects/ProjectsPage'
import SkillsPage from './Skills/SkillsPage'
/*
const style = {
  background: 'url('+background+') no-repeat center center fixed',
}
*/


class Index extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <MuiThemeProvider>
            <div>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/skills" component={SkillsPage} />
              <Route exact path="/projects" component={ProjectsPage} />
            </div>
        </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}

export default Index;
