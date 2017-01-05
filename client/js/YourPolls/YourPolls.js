import React from 'react';
import PollCard from '../Common/PollCard';
import {Grid} from 'react-bootstrap';

export default class YourPolls extends React.Component {
    componentDidMount() {
        this.props.getAllUserPolls();
    }

    render() {
        const polls = this.props.userPolls.map((poll, i) => (
            <PollCard key={i} poll={poll} showDelete />
        ));

        return (
            <Grid>
                <h2>Your Polls</h2>
                {polls}
            </Grid>
        );
    }
}