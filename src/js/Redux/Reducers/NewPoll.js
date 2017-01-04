import * as actions from '../Actions';
import { handle } from 'redux-pack';
import update from 'react-addons-update';


const initialState = {
    question: '',
    answers: [],
    isSaving: false,
    saveSuccess: false,
    failedSave: false,
    errorMsg: ''
};

const emptyAnswer = {
    answer: '',
    votes: 0
};

export default function NewPoll(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case actions.NEW_POLL_QUESTION_UPDATED:
            return update(state, {
                question: {$set: payload.question}
            });
        case actions.NEW_POLL_ANSWER_ADDED:
            return update(state, {
                answers: {$push: [emptyAnswer]}
            });
        case actions.NEW_POLL_ANSWER_UPDATED:
            return update(state, {
                answers: {
                    [payload.number] : {
                        answer: {$set : payload.text}
                    }
                }
            });
        case actions.NEW_POLL_ANSWER_REMOVED:
            return update(state, {
                answers: { $splice: [[payload.number, 1]]}
            });            
        case actions.NEW_POLL_SAVED:
            return handle(state, action, {
                start: s => update(s, {
                    isSaving: {$set : true},
                    errorMsg: {$set: ''}

                }),
                success: s => update(initialState, {
                    isSaving: {$set : false},
                    saveSuccess: {$set : true}
                }),
                failure : s => update(s, {
                    isSaving: {$set : false},
                    failedSave: {$set: true},
                    errorMsg: {$set: payload.data.error}
                })
            });
        default:
            return state;
    }
}