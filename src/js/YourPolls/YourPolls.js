import React from 'react';
import {Link} from 'react-router';

export default class YourPolls extends React.Component {
    componentDidMount() {
        this.props.getAllUserPolls();
    }

    render() {
        const polls = this.props.userPolls.map((poll, i) => (
            <li key={i}><Link to={"/polls/view/" + poll._id}>{poll.question}</Link></li>
        ));

        return (
          <ul>
            {polls}
          </ul>
        );
    }
}