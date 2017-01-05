import React from 'react';

export default class YourPolls extends React.Component {
    componentDidMount() {
      this.props.loadPollById(this.props.params.pollId);
    }
    render() {
        return (
          <span>
            {this.props.poll && this.props.poll.question}
          </span>
        );
    }
}