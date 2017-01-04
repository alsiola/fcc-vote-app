import React from 'react';
import connect from '../Redux/connect';
import NewPoll from './NewPoll';
import {getNewPoll as poll, isSaving} from '../Redux/Selectors/newPollSelectors';
import { questionUpdated, addNewAnswer, editAnswer, removeAnswer, savePoll } from '../Redux/ActionCreators/NewPollActionCreators';

export default connect(
    { 
        poll,
        isSaving
    },
    {
        questionUpdated,
        addNewAnswer,
        editAnswer,
        removeAnswer,
        savePoll
    }    
)(NewPoll);