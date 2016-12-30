import * as actions from '../Actions';

export default function User(state = defaultUser, action) {
    switch (action.type) {
        case actions.USER_LOGGED_IN:
            return action.user;
        default:
            return state;
    }
}

const defaultUser = {
    github : {
        displayName: "user"
    }
}