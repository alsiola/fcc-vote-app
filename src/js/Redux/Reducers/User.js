import * as actions from '../Actions';
import { handle } from 'redux-pack';

export default function User(state = defaultUser, action) {
    const { type, payload } = action;

    switch (type) {
        case actions.USER_LOGGED_IN:
            return handle(state, action, {
                success: s => {
                    if(payload.data.success) {
                        return Object.assign({}, payload.data.user, {authenticated : true});
                    }
                    
                    return defaultUser;
                }
            });
        default:
            return state;
    }
}

const defaultUser = {
    github : {
        displayName: "user"
    },
    authenticated: false
}