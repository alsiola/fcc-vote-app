import * as actions from '../Actions';
import { handle } from 'redux-pack';
import { Except, IndexWhere } from '../Utils/JsLinq';

export default function AllPolls(state = [], action) {
    const { type, payload } = action;

    switch (type) {
        case actions.NEW_POLL_SAVED:
            return handle(state, action, {
                success: s => [...s, ...payload.data.poll]
            });
        case actions.POLL_LOADED:
            return handle(state, action, {
                success: s => [...s, payload.data.poll]
            });
        case actions.POLLS_LOADED:
            return handle(state, action, {
                success: s=> [...payload.data.polls]
            });
        case actions.DELETE_POLL:
            return handle(state, action, {
                success: s => Except(s, [payload.data.deletedPoll], (a, b) => a._id === b._id)
            });
        case actions.VOTE_CAST:
            return handle(state, action, {
                success: s => {
                    if (payload.data.success) {
                        return [...Except(s, [payload.data.poll], (a, b) => a._id === b._id), payload.data.poll].sort((a,b) => {
                            return new Date(b.creation_date) - new Date(a.creation_date);
                        });
                    }
                    return s;
                }
            })
        default:
            return state;
    }
}