import * as actions from '../Actions';
import axios from 'axios';

export const getAllUserPolls = () => ({
    type: actions.USER_POLLS_LOADED,
    promise: axios.get('/api/polls/user')
});

export const deletePoll = pollId => ({
    type: actions.DELETE_POLL,
    promise: axios.post('/api/polls/delete/' + pollId)
})