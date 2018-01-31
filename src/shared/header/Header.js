import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default class Header extends Component {
    constructor(props){
        super(props);
        
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            hidden: true,
            anim: '',
            display: 'none'
        };
    }

    toggleNav(){
        if(this.state.hidden && this.state.anim !=='slideDown'){
            this.setState({
                anim: 'slideDown',
                hidden: !this.state.hidden,
                display: 'block'
            });
        }
        else{
            this.setState({
                hidden: true,
                anim:'slideUp'
            });
        }
    }

    render() {
    return (
        <div className="header">
            <Link to='/'className="logo">James O Ward.com</Link>
            <div className="header-right">
                <Link to='/' className="active">Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/skills'>Skills</Link>
                <Link to='/projects'>Projects</Link>
            </div>
        </div>
    );
}
}