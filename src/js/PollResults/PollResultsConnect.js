import React from 'react';
import connect from '../Redux/connect';
import PollResults from './PollResults';
import { getPollById as poll} from '../Redux/Selectors/PollSelectors';
import { loadPollById } from '../Redux/ActionCreators/AllPollActions';

export default connect({
        poll
    },
    {
        loadPollById
    }    
)(PollResults);