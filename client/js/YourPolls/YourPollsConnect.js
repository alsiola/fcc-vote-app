import React from 'react';
import connect from '../Redux/connect';
import { userPolls } from '../Redux/Selectors/PollSelectors';
import { getAllUserPolls } from '../Redux/ActionCreators/PollActions';
import YourPolls from './YourPolls';

export default connect(
    { 
        userPolls
    },
    {
        getAllUserPolls
    }
)(YourPolls);