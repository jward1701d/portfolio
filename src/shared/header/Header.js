import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import './header.css';

 export default class Header extends Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      return (
        <div>
          <Navbar className="navbar-custom"expand="md">
            <NavbarBrand className="logo" href="/">JamesOWard.com</NavbarBrand>
            <NavbarToggler className="navlinks" onClick={this.toggle} >
                <FontAwesome name="bars"/>
            </NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="navlinks">
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem className="navlinks">
                  <NavLink href="/about">About</NavLink>
                </NavItem>
                <NavItem className="navlinks">
                  <NavLink href="/skills">Skills</NavLink>
                </NavItem>
                <NavItem className="navlinks">
                  <NavLink href="/projects">Projects</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }