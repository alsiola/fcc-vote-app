import * as actions from '../Actions';
import axios from 'axios';

export const loadPollById = id => (dispatch, getState) => {    
    if(getState().AllPolls.filter(poll => poll._id === id).length === 0) {
        return {
            type: actions.POLL_LOADED,
            promise: axios.get('/api/polls/view/' + id)
        };
    }    
}

export const loadAllPolls = (start, limit) => ({
    type: actions.POLLS_LOADED,
    promise: axios.get('/api/polls/' + start + '/' + limit)
});