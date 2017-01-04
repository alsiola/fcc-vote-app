import * as actions from '../Actions';
import axios from 'axios';

export const getCurrentUser = () => dispatch => {
    dispatch({
        type: actions.USER_LOGGED_IN,
        promise: axios.get('/api/currentuser')
    });
}

        