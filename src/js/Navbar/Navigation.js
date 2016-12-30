import React from 'react';
import {connect} from 'react-redux';
import {userLoggedIn} from '../Redux/ActionCreators/UserActions';
import axios from 'axios';
import NavBar from './NavBar';

const Navigation = connect(
    state => { 
        return {
            username : state.User.github.displayName
        };
    },
    dispatch => { 
        return {
            getCurrentUser: () => {
                axios.get('/api/currentuser').then(response => {
                    dispatch(userLoggedIn(response.data.user));
                })
            }
        }; 
    }
)(NavBar);

export default Navigation;