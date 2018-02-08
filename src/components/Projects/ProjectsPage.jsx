import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import './projectpage.css';

export default function ProjectsPage() {
  return (
    <div className="projectContainer">
      <Paper className="skillsPaper" elevation={4}>
        <Typography variant="headline" component="h1" className="mainTitle">
          Projects
        </Typography>
        <div className="innerContainer">
        </div>
      </Paper>
    </div>
  );
}