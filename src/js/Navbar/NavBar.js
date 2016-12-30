// @flow
import React from 'react';
import {Navbar, Nav, NavItem, MenuItem} from 'react-bootstrap';
import NavLink from './NavLink';

export default class NavBar extends React.Component {
    componentWillMount() {
        this.props.getCurrentUser();
    }

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">Let's Vote!</a>
                </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Text pullRight>Signed in as {this.props.username}</Navbar.Text>
                <Nav pullRight>
                    <NavLink to="/poll/new">New Poll</NavLink>
                    <NavItem eventKey={2} href="#">Your Polls</NavItem>
                </Nav>
            </Navbar>
        );
    }
}

            