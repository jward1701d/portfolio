import React, { Component } from 'react';

import CustomModal from '../modal';

import '../styles.css';


const images = {
    main :{
        image: require('../../static/images/cc/cc-ccbd-1.png'),
        title: 'Home Page',
    }
};

export default class DirectoryPage extends Component{
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
          <div className="row">
           <div className="col-12">
             <h4 className="subTitle">The Business Directory</h4>
             </div>
           <div className="col-7 col-md-7 col-sm-6">
            <p>

            </p>
           </div>
           <div className="col-5 col-md-5 col-sm-6">
           <img src={images.main.image} alt={images.main.title} className="images" onClick={this.toggle}/>
           </div>
            <CustomModal modal={this.state.modal} toggle={this.toggle} className={this.props.className} image={images.main.image} title={images.main.title}/>     
          </div>

        );
    }
}