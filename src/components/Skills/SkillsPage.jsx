import React from 'react';

import './skillspage.css';

export default function SkillsPage() {
  return (
    <div className="row background">
    <div className="col-12">
      <h1 className="pageTitle">Skills</h1>
      </div>
      <div className="col-3">
        <h3 className="subTitle">Web Development</h3>
        <ul className="list">
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
      </div>
      <div className="col-4">
      <h3 className="subTitle">Game Development</h3>
        <ul className="list">
          <li>C#</li>
          <li>C++</li>
        </ul>
      </div>
      <div className="col-5">
      <h3 className="subTitle">Skills currently in development</h3>
        <ul className="list">
          <li>React JS</li>
          <li>Node JS</li>
          <li>Express JS</li>
          <li>Mongo DB</li>
          <li>Redux</li>
          <li>ASP.NET Core 2.0</li>  
          <li>PHP</li>
          <li>UNITY 3D</li>
        </ul>
      </div>
    </div>
  );
}