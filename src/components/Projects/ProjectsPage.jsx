import React from 'react';
import ProjectCard from './ProjectCard';


import { animateScroll as scroll} from 'react-scroll'



const projects = {
  web:[
    {
      id: 0,
      name:'Coalfield Connections',
      image: require('./static/images/cc/cc-main-alt.png'),
      description:'This was a website created for a local magazine company. The magazine serviced the coal industry and served as a yellow pages for coal owners and operators.',
      linkTo:'/projects/web/coalfield',
    },
    {
      id: 1,
      name:'Restoration Gaming',
      image: require('./static/images/restogaming/rest-gaming.png'),
      description:'This was a website I created for a communtiy that hosted a couple of classic game servers.',
    },
    {
      id: 2,
      name:'Web Challange',
      image: require('./static/images/challange/chalange.png'),
      description:'This was a webpage created as a challange from a friend to see if I could reproduce a template found online.',
    },
    {
      id: 3,
      name:'Appalachain Distillery',
      image: require('./static/images/distillery/distillery-redirect.png'),
      description:'This was a website was for a moonshine distillery located in West Virgina. While I didn;t create the template the site was made from I did work within that template and develop many of the subsequent pages including the online store.',
    },
    {
      id: 4,
      name:'Appalachain Speedway',
      image: require('./static/images/speedway/speedway-gallery.png'),
      description:'This was a website for a small go-kart track loacted in Eastern Kentucky. It used the same templated that the distillery used. For this propject I did things like editing the video used ion the header and I created the dynamic photo gallery.',
    },
  ],
  game:[
    {
      id:0,
      name:'Color Mimic',
      image:require('./static/images/colormimic/color-memic.png'),
      description:'First and only indie game I created at Scrubby Fresh Studios which was part of the "Play As You Go" game package which consisted of 3 different games.',
  },
  {
    id:1,
    name:'Project Dark',
    image:require('./static/images/dark/project-dark.png'),
    description:'This game was created in Unity 3D in the 2D mode and was my senior project in college. Game consisted of 4 playable levels.',
},
],

};

const web = projects.web.map((web, i) => {
  return(
  <ProjectCard key={web.id} data={web}/>
);
});

const game=projects.game.map((game, i)=>{
  return(
    <ProjectCard key={game.id} data={game}/>
  );
})

function scrollUp(){
  scroll.scrollToTop();
}

export default function ProjectsPage() {
  

  return (
    <div className="row" >
      <div className="col-12">
        <h1 className="pageTitle">Web Projects</h1>
      </div>
      <div className="row section">
        {web}
      </div>
      
        <div className="col-12">
          <h1 className="pageTitle">Game Projects</h1>
        </div>
        <div className="row section">
          {game}
        </div>
          <span onClick={scrollUp} className="up"><i className="fas fa-chevron-up "></i></span>
      </div>
    
  );
}