import * as actions from '../Actions';
import axios from 'axios';

export const loadPollById = id => (dispatch, getState) => {    
    if(getState().AllPolls.filter(poll => poll._id === id).length === 0) {
        console.log("go");
        dispatch({
            type: actions.POLL_LOADED,
            promise: axios.get('/api/polls/view/' + id)
        });
    }    
}