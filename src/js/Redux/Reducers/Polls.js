import * as actions from '../Actions';
import _ from 'lodash';

export default function Polls(state = [], action) {
    switch (action.type) {
        case actions.LOCAL_POLL_CREATED:
            return [...state, action.poll];
        case actions.LOCAL_POLL_SAVED:
            const oldState = state.slice();
            const removedLocal = oldState.filter(poll => !_.isEqual(poll, action.localPoll));
            return [...removedLocal, action.dbPoll];
        default:
            return state;
    }
}