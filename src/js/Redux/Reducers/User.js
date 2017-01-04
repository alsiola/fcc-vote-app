import * as actions from '../Actions';
import { handle } from 'redux-pack';

export default function User(state = defaultUser, action) {
    const { type, payload } = action;

    switch (type) {
        case actions.USER_LOGGED_IN:
            return handle(state, action, {
                success: s => ( payload.data.user )
            });
        default:
            return state;
    }
}

const defaultUser = {
    github : {
        displayName: "user"
    }
}