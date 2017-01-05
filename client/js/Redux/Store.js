import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { middleware as reduxPackMiddleware } from 'redux-pack'
import createLogger from 'redux-logger';
import Reducer from './Reducer';

const logger = createLogger();

const store = createStore(
    Reducer,
    applyMiddleware(thunk, reduxPackMiddleware, logger)
);

export default store