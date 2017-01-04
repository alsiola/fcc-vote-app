import * as actions from '../Actions';
import axios from 'axios';

export const questionUpdated = question => ({
    type: actions.NEW_POLL_QUESTION_UPDATED,
    payload: {
        question
    }
});

export const addNewAnswer = () => ({
    type: actions.NEW_POLL_ANSWER_ADDED
});

export const editAnswer = (number, text) => ({
    type: actions.NEW_POLL_ANSWER_UPDATED,
    payload: {
        number,
        text
    }
});

export const removeAnswer = number => ({
    type: actions.NEW_POLL_ANSWER_REMOVED,
    payload: {
        number
    }
});

export const savePoll = newPoll => ({
    type: actions.NEW_POLL_SAVED,
    promise: getSavePollPromise(newPoll)
});

const getSavePollPromise = newPoll => {
    return new Promise((resolve, reject) => {
        let valid = true;

        if (newPoll.question.length < 3) {
            reject(getRejectionError('Question must be at least three characters long.'));
            valid = false;
        }

        if (newPoll.answers.length < 2) {
            reject(getRejectionError('Poll must have at least two answers.'));
            valid = false;
        }

        if (!newPoll.answers.reduce((prev, next) => {
            return prev && next.answer.length > 0;
        }, true)) {
            reject(getRejectionError('All answers must be at least one character long.'));
            valid = false;
        }
        
        if (valid) {
            resolve(axios.post('/api/polls/new', newPoll));
        }
    });

    

}

const getRejectionError = msg => ({
    data: {
        error: msg
    }
});

