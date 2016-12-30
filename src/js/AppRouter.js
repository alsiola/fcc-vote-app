// @flow
import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Layout from './Layout';
import Home from './Home/Home'
import NewPollConnect from './NewPoll/NewPollConnect';

export default class AppRouter extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Home} />
                    <Route path="/poll/new" component={NewPollConnect} />
                </Route>
            </Router>
        );
    }
}