import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontAwesome from 'react-fontawesome';

import './header.css';

const styles = {
    title: {
        cursor: 'pointer'
    },
    links:{
        textDecoration:'none',
        color: '#fff',
        background: '-webkit-linear-gradient(rgba(216, 177, 49, 1), rgba(216, 177, 49, 0.55))',
        backgroundClip: 'text',
        webkitBackgroundClip: 'text',
        webkitTextFillColor: 'transparent'
    }
};

export default class Header extends Component {
    constructor(props){
        super(props);
     this.handleClick = this.handleClick.bind(this);
     this.handleRequestClose = this.handleRequestClose.bind(this);

     this.state = {
        open: false,
     };
    }
    
    handleClick(e){
        e.preventDefault();
        this.setState({
            open: true,
            anchorEl: e.currentTarget,
        });
    }  
    handleRequestClose = () => {
        this.setState({
          open: false,
        });
      };

    render() {
        return (
            <MuiThemeProvider>
                <div>
                <AppBar
                    className="navBar"
                    title={
                        <span style={styles.title}>
                        <Link to="/" className="logo">James O Ward.com</Link></span>
                    }
                    onLeftIconButtonClick={this.handleClick}
                    />
                    <Popover
                        open={this.state.open}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        onRequestClose={this.handleRequestClose}
                        animation={PopoverAnimationVertical}
                        className="popup"
                    >
                        <Menu>
                            <MenuItem className="menuItems">
                                <Link to="/">
                                    <FontAwesome name="home"/>
                                    <span> Home</span>
                                </Link>
                            </MenuItem>
                            <MenuItem className="menuItems">
                                <Link to="/about">
                                    <FontAwesome name="eye"/>
                                    <span> About</span>
                                </Link>
                            </MenuItem>
                            <MenuItem className="menuItems">
                                <Link to="/skills">
                                    <FontAwesome name="code"/>
                                    <span> Skills</span>
                                </Link>
                            </MenuItem>
                            <MenuItem className="menuItems">
                                <Link to="/projects">
                                    <FontAwesome name="folder"/>
                                    <span> Projects</span>
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Popover>
                    </div>
            </MuiThemeProvider>
        );
    }
}