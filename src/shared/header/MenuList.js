import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

export const menuList = (
    <div>
        <ListItem button component={Link} to="/">
            <ListItemIcon>
                <FontAwesome name="home"/>
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/about">
            <ListItemIcon>
                <FontAwesome name="eye"/>
            </ListItemIcon>
            <ListItemText primary="About" />
        </ListItem>
            <ListItem button component={Link} to="/skills">
                <ListItemIcon>
                    <FontAwesome name="code"/>
                </ListItemIcon>
            <ListItemText primary="Skills" />
        </ListItem>
        <ListItem button component={Link} to="/projects">
            <ListItemIcon>
                <FontAwesome name="folder"/>
                </ListItemIcon>
            <ListItemText primary="Projects" />
        </ListItem>
    </div>
);