import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import MenuIcon from 'material-ui-icons/Menu';

import {menuList} from './MenuList'

import './header.css';

const styles = {
    navbar: {
        background: 'rgba(0,0,0,0.85)',
        color: '#fff',
        borderBottom: 'rgba(216, 177, 49, 1) solid 2px',
    },
    menuButton: {
        color: 'rgba(216, 177, 49,0.75)',
        fontSize: '30px',
        '&:hover':{
            color: 'rgba(216, 177, 49,0.95)'
        },
    },
    iconButtons:{
        color: 'rgba(216, 177, 49,0.75)',
        '&:hover':{
            color: 'rgba(216, 177, 49,0.95)'
        },
    },
    flex: {
        flex: 1,
    },
    list: {
        width: 150,
        background: '#000',
    },
};

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            left: false,
          };

        this.toggleDrawer = this.toggleDrawer.bind(this);
    }
    
    toggleDrawer = (open) => () => {
        this.setState({
            left: open,
        });
    };

    render() {
        const {classes } =this.props;

        const navList =(
            <div className="list">
            <List>{menuList}</List> 
            </div>
        )
        return(
          
                <AppBar position="fixed" className={classes.navbar}>
                    <Toolbar>
                        <IconButton onClick={this.toggleDrawer(true)} className={classes.menuButton}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
                            <div
                                tabIndex={0}
                                role="button"
                                onClick={this.toggleDrawer(false)}
                                onKeyDown={this.toggleDrawer(false)}
                            >
                                <div className="drawerHeader">
                                   <span className="drawerTitle">Menu</span>
                                </div>
                                {navList}
                            </div>
                        </Drawer>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            <Link className="logo" to='/'> James O Ward.com</Link>
                        </Typography>
                        <IconButton>
                            <Link className={classes.iconButtons} target="_blank" to='https://www.linkedin.com/in/jward1701d/'>
                                <i className="fab fa-linkedin-in"/>
                            </Link>
                        </IconButton>
                        <IconButton>
                            <Link className={classes.iconButtons} target="_blank" to='https://github.com/jward1701d'>
                                <i className="fab fa-github"/>
                            </Link>
                        </IconButton>
                    </Toolbar>
                </AppBar>
              
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Header);