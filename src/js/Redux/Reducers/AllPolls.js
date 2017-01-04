import * as actions from '../Actions';
import { handle } from 'redux-pack';
import { Except } from '../Utils/JsLinq';

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
        default:
            return state;
    }
}