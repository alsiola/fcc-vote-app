import * as actions from '../Actions';
import axios from 'axios';

export const getAllUserPolls = () => dispatch => {
    dispatch({
        type: actions.USER_POLLS_LOADED,
        promise: axios.get('/api/polls/user')
    })
}