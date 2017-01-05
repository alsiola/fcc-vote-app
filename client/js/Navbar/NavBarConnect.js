import React from 'react';
import connect from '../Redux/connect';
import {getCurrentUser} from '../Redux/ActionCreators/UserActions';
import user from '../Redux/Selectors/getUser';
import NavBar from './NavBar';

export default connect(
    {
        user
    },
    {
        getCurrentUser
    }
)(NavBar);