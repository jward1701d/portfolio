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
            <div className="col-5 col-md-5 col-sm-6">
           <img src={images.main.image} alt={images.main.title} className="images" onClick={this.toggle}/>
           </div>
           <div className="col-7 col-md-7 col-sm-6">
           <p>Coafield connection was a magazine that provide services to the mining industry located in Eastern Kentucky. I came on board as a partime emplyee do ing odds and ends for them late 2013. During this time i became their web website adminastrator. Orginally the site was developed by a third party company. Long sotry short it got expensive whenever there was a issue witht the site so they brought me on to help with common issues. Shortly after i cam on we moved the site form the third party companies care to our own and began hosting on a VPS from Hostgator.  </p></div>
            <CustomModal modal={this.state.modal} toggle={this.toggle} className={this.props.className} image={images.main.image} title={images.main.title}/>     
          </div>
        );
    }
}