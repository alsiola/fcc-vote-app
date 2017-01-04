import * as actions from '../Actions';
import axios from 'axios';

export const questionUpdated = question => dispatch => dispatch({
    type: actions.NEW_POLL_QUESTION_UPDATED,
    payload: {
        question
    }
});

export const addNewAnswer = () => dispatch => dispatch({
    type: actions.NEW_POLL_ANSWER_ADDED
});

export const editAnswer = (number, text) => dispatch => dispatch({
    type: actions.NEW_POLL_ANSWER_UPDATED,
    payload: {
        number,
        text
    }
});

export const removeAnswer = number => dispatch => dispatch({
    type: actions.NEW_POLL_ANSWER_REMOVED,
    payload: {
        number
    }
});

export const savePoll = newPoll => dispatch => {
    dispatch({
        type: actions.NEW_POLL_SAVED,
        promise: axios.post('/api/polls/new', newPoll)
    });
}