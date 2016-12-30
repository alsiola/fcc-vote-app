import User from './Reducers/User';
import Polls from './Reducers/Polls';
import {combineReducers} from 'redux';

const Reducer = combineReducers({ User, Polls });

export default Reducer;