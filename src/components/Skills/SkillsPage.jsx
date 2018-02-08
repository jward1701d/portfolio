import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import './skillspage.css';

export default function SkillsPage() {
  return (
    <div className="aboutContainer">
      <Paper className="skillsPaper" elevation={4}>
        <Typography variant="headline" component="h1" className="mainTitle">
          Skills
        </Typography>
        <div className="innerContainer">
          <div className="col1">
            <Typography variant="headline" component="h3" className="subTitle">
              Web Development
            </Typography>
            <Typography component="p" className="content">
              <ul>
              <li>HTML / HTML 5</li>
              <li>CSS / CSS 3</li>
              <li>SASS / SCSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Twitter Bootstrap 3</li>
              <li>JSON</li>
              <li>GIT</li>
              <li>WAMP</li>
              </ul>
            </Typography>
          </div>
          <div className="col2">
            <Typography variant="headline" component="h3" className="subTitle">
              Game Development
            </Typography>
            <Typography component="p" className="content">
            <ul>
            <li>C#</li>
            <li>C++</li>
            </ul>
            </Typography>
          </div>
          <div className="col3">
            <Typography variant="headline" component="h3" className="subTitle">
              Skills Currently in Development
            </Typography>
            <Typography component="p" className="content">
            <ul>
            <li>React JS</li>
            <li>Node JS</li>
            <li>Express JS</li>
            <li>Mongo DB</li>
            <li>Redux</li>
            <li>ASP.NET Core 2.0</li>  
            <li>PHP</li>
            <li>UNITY 3D</li>
            </ul>
            </Typography>
          </div>
        </div>
      </Paper>
    </div>
  );
}