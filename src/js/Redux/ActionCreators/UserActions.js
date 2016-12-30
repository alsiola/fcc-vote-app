import * as actions from '../Actions';

export function userLoggedIn(user) {
    console.log(user);
    return {
        type: actions.USER_LOGGED_IN,
        user
    }
}