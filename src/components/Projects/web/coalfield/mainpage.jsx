import React, { Component } from 'react';

import CustomModal from '../modal';

import '../styles.css';


const images = {
    main :{
        image: require('../../static/images/cc/cc-main.png'),
        title: 'Home Page',
    }
};

export default class MainPage extends Component{
    constructor(props) {
      super(props);
      this.state = {
        modal: false
      };
    
      this.toggle = this.toggle.bind(this);
      
    }
    
    toggle(e) {
        this.setState({
            modal: !this.state.modal
          });
    }

    render(){
        return(
          <div className="row spacer">
            <div className="col-12">
             <h4 className="subTitle">The Main Page</h4>
             </div>
            <div className="col-5 col-md-5 col-sm-6">
           <img src={images.main.image} alt={images.main.title} className="images" onClick={this.toggle}/>
           </div>
           <div className="col-7 col-md-7 col-sm-6">
           <p>Coalfield connection was a magazine that provide services to the mining industry located in Eastern Kentucky. I came on board as a part time employee doing odds and ends for them mid 2013. During this time I became their website administrator. Originally the site was developed by a third party company. Long story short it got expensive whenever there was a issue with the site so they had me deal with the common issues. Eventually they decided to move to their own VPS service hosted by Hostgator. This proved to be a problem for the wordpress site as it constantly began crashing every 24 to 48 hours. This was not a good thing for the business. I came up with the offer to rebuild the site from the ground up moving away from a CMS based site to one that was static driven. I made a promise to the manager that the new site would; one be mobile friendly which their current site was not, and two the site would not crash so long as the web server was up and running. I started this project in my spare time in late 2013. At this point I had not done any major website work since the mid 90’s so I had to get up to speed with how things had changed in 20 years. We sat down and discussed any changes that they wanted on the site first and foremost. They decided they wanted to keep the same basic layout so I followed the sites original layout when it came to placing the content. The image to the right is the result. I went with Bootstrap 3 at the time as it was one of the more widely used and simpler and quicker to enhance css frameworks at the time. I took the time to lay the items out and learned the necessary Bootstrap classes need to achieve the front pages style. I also opted out of a plain color background and went with more of a theme to the site as it was focused on the coal industry I thought the adding a background image from that field was appropriate. To make the content of the page visible I placed the actual web page content within a container that was primarily white but that had a slight bit of opacity as well. Come to find out now material css does something similar and i believe they refer to it as a page referencing the fact it resembles a piece of paper. </p>
           </div>
            <CustomModal modal={this.state.modal} toggle={this.toggle} className={this.props.className} image={images.main.image} title={images.main.title}/>     
          </div>
        );
    }
}