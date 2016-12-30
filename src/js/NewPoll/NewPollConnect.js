import React from 'react';
import {connect} from 'react-redux';
import {localPollCreated,localPollSaved, localPollSaveFailed} from '../Redux/ActionCreators/PollActions';
import axios from 'axios';
import NewPoll from './NewPoll';

const NewPollConnect = connect(
    state => { 
        return {
            username : state.User.github.displayName,
            user_github_id: state.User.github.id,
            userPolls: state.Polls.filter(poll => poll.user_github_id === state.User.github.id)
        };
    },
    dispatch => { 
        return {
            createPoll: newPoll => {
                dispatch(localPollCreated(newPoll));
                axios.post('/api/poll', newPoll).then(response => {
                    dispatch(localPollSaved(response.data.localPoll, response.data.dbPoll));
                }).catch(err => {
                    dispatch(localPollSaveFailed());
                });
            }
        }; 
    }
)(NewPoll);

export default NewPollConnect;