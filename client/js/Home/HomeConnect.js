import React from 'react';
import connect from '../Redux/connect';
import Home from './Home';
import { getAllPollsDateDesc as polls } from '../Redux/Selectors/PollSelectors';
import { loadAllPolls } from '../Redux/ActionCreators/AllPollActions';

export default connect(
    {
        polls
    }, 
    {
        loadAllPolls
    }
)(Home);