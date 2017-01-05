import React from 'react';
import connect from '../Redux/connect';
import AnswerInput from './AnswerInput';
import { isSaving } from '../Redux/Selectors/newPollSelectors';
import { editAnswer, removeAnswer } from '../Redux/ActionCreators/NewPollActionCreators';

export default connect(
    {
        isSaving
    },
    {
        editAnswer,
        removeAnswer
    }    
)(AnswerInput);