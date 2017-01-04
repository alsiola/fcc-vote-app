import * as actions from '../Actions';
import { handle } from 'redux-pack';

export default function AllPolls(state = [], action) {
    const { type, payload } = action;

    switch (type) {
        case actions.USER_LOGGED_IN:
            return handle(state, action, {
                success: s => [...s, ...payload.data.user.polls]
            })
        case actions.NEW_POLL_SAVED:
            return handle(state, action, {
                success: s => [...s, ...payload.data.polls]
            });
        case actions.POLL_LOADED:
            return handle(state, action, {
                success: s => [...s, payload.data.poll]
            });
        default:
            return state;
    }
}