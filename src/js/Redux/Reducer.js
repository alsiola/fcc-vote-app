import User from './Reducers/User';
import Polls from './Reducers/Polls';
import NewPoll from './Reducers/NewPoll';
import AllPolls from './Reducers/AllPolls'
import {combineReducers} from 'redux';

const Reducer = combineReducers({ User, Polls, NewPoll, AllPolls });

export default Reducer;