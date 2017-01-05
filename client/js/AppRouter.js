// @flow
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Layout from './Layout';
import HomeConnect from './Home/HomeConnect'
import NewPollConnect from './NewPoll/NewPollConnect';
import YourPollsConnect from './YourPolls/YourPollsConnect';
import PollResultsConnect from './PollResults/PollResultsConnect';
import Login from './Login/Login';

export default class AppRouter extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={HomeConnect} />
                    <Route path="/polls/new" component={NewPollConnect} />
                    <Route path="/polls/user" component={YourPollsConnect} />
                    <Route path="/polls/view/:pollId" component={PollResultsConnect} />
                    <Route path="/login" component={Login} />
                </Route>
            </Router>
        );
    }
}