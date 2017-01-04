import * as actions from '../Actions';
import { handle } from 'redux-pack';

export default function Polls(state = [], action) {
    const { type, payload } = action;

    switch (type) {
        case actions.USER_LOGGED_IN:
            return handle(state, action, {
                success: s => payload.data.user.polls
            })
        case actions.NEW_POLL_SAVED:
            return handle(state, action, {
                success: s => payload.data.polls
            });
        case actions.USER_POLLS_LOADED:
        console.log(payload);
            return handle(state, action, {
                success: s => payload.data.polls
            })
        default:
            return state;
    }
}