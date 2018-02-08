import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import './aboutPage.css';

const image= require('./selfie2.jpg');

export default function AboutPage() {
  return (
    <div className="aboutContainer">
      <Paper className="paperRoot" elevation={4}>
        <Typography variant="headline" component="h1" className="mainTitle">
          About Me
        </Typography>
        <div className="contentContainer">
          <img className="image" src={image} />
          <Typography variant="headline" component="h3" className="subTitle">
            History
          </Typography>
          <Typography component="p" className="content">
          I was born and raised in in Eastern Kentucky. I graduated high school in 1995 and for a 
          year attended Eastern Kentucky University. After leaving the college life I went to work 
          in the coalfields of my home area as a wielder and did that for several years. When the work 
          began to slow I acquired my commercial driver license and went to driving tractor and trailers 
          for a living. I drove commercial trucks for several years and then finally decided to go back 
          and complete my college degree. I graduated Morehead State university in May of 2016 with a 
          Bachelor’s of Computer Science with a minor in Game Programming. 
          </Typography>
          <Typography component="p" className="content">
           While going in college I met up with some people and we started a small indie game studio 
           and created a single Xbox 360 game which released in 2011 and then several months later we 
           released it for the ill-fated Windows 7 Phone. Following the release of our game we each created a mobile app for the Windows
            7 Phone as well. Without success of either our game or our apps, and with the remaining member
             of the studio team continuing their education we had no time to devote to the indie scene. 
             In early 2014 after a couple of years of inactivity we decided to close down Scrubby Fresh 
             Studios. 
             </Typography>
             <Typography component="p" className="content">
             Since that time I have complete my degree and found an interest in web development. 
             I have undertaken and completed a few freelance projects which I really enjoyed working on. 
             I have continued to dabble in modern web development stack such as MEAN and MERN as well as 
             Microsoft’s ASP.NET Core. While I am by no means a master of any of these development stacks I 
             have general understanding of them and some basic tutorial experience with them. 
             </Typography>
             <Typography component="p" className="content">
             This site is  built using React.js and will at a point in the not too distant future be completely powered by 
             the MERN stack. My future goal is to find a good company where I can put what I do know to work,
              and where I can learn new technologies an grow my skills.
          </Typography>
        </div>
      </Paper>
    </div>
  );
}
