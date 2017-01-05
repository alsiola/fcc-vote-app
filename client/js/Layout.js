// @flow
import React from 'react';
import NavBarConnect from './Navbar/NavBarConnect';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <NavBarConnect />
                {this.props.children}
            </div>
        );
    }
}