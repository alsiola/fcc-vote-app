import React from 'react';
import {Link} from 'react-router';

const NavLink  = props => (
    <li role="presentation"><Link to={props.to} activeClassName="active">{props.children}</Link></li>
)

export default NavLink;