import * as actions from '../Actions';

export function localPollCreated(poll) {
    return {
        type: actions.LOCAL_POLL_CREATED,
        poll
    }
}

export function localPollSaved(localPoll, dbPoll) {
    return {
        type: actions.LOCAL_POLL_SAVED,
        localPoll,
        dbPoll
    }
}

export function localPollSaveFailed() {
    return {
        type: actions.LOCAL_POLL_CREATED,
        poll
    }
}