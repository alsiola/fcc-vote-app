import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import PollCard from '../Common/PollCard';

export default class Home extends React.Component {
    componentDidMount() {
        this.props.loadAllPolls(0, 10);
    }

    render() {
        const pollRows = this.props.polls.map((poll, i) => (
            <PollCard key={i} poll={poll} />
        ))

        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <h2>What do you think?</h2>
                    </Col>
                </Row>
                {pollRows}
            </Grid>
        );
    }
}