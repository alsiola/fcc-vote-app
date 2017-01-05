// @flow
import React from 'react';
import {Provider} from 'react-redux';
import store from './Redux/Store';
import AppRouter from './AppRouter';
import './App.scss';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppRouter />
            </Provider>
        );
    }
}