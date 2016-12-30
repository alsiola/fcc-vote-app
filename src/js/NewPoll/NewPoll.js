// @flow
import React from 'react';

export default class NewPoll extends React.Component {
    render() {
        const newPoll = {
            user_github_id: this.props.user_github_id,
            question: "a question",
            answers: [
                {
                    answer: "Answer 1",
                    votes: 0
                }
            ]
        }
        return (
          <div>
            <button onClick={() => this.props.createPoll(newPoll)}>Create Poll</button>
            {this.props.userPolls.map((poll,i) => <div key ={i}>{poll.question}</div>)}
          </div>
        );
    }
}