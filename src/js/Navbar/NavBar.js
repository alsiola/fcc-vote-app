// @flow
import React from 'react';
import {Link} from 'react-router';
import {Navbar, Nav, NavItem, MenuItem} from 'react-bootstrap';
import NavLink from './NavLink';

export default class NavBar extends React.Component {
    componentDidMount() {
        this.props.getCurrentUser();
    }

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Let's Vote!</Link>
                </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Text pullRight>Signed in as {this.props.user.github.displayName}</Navbar.Text>
                <Nav pullRight>
                    <NavLink to="/polls/new">New Poll</NavLink>
                    <NavLink to="/polls/user">Your Polls</NavLink>
                </Nav>
            </Navbar>
        );
    }
}

            