import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import Reducer from './Reducer';

const logger = createLogger();

const store = createStore(
    Reducer,
    applyMiddleware(thunk, logger)
);

export default store