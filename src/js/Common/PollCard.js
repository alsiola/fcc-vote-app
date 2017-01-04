import React from 'react';
import connect from '../Redux/connect';
import {deletePoll} from '../Redux/ActionCreators/PollActions';
import { LinkContainer } from 'react-router-bootstrap';
import { ButtonToolbar, Button, Panel } from 'react-bootstrap';

const PollCard = props => {
    const deleteButton = (
        <Button bsStyle="danger" onClick={() => props.deletePoll(props.poll._id)}>
            Delete poll
        </Button>
    );

    return (
        <Panel>
            <h3>{props.poll.question}</h3>
            <h5>{props.poll.answers.length} options to choose from!</h5>
            <ButtonToolbar>
                <LinkContainer to={"/polls/view/" + props.poll._id}>
                    <Button bsStyle="primary">
                        Vote Now
                    </Button>
                </LinkContainer>
                <LinkContainer to={"/polls/results/" + props.poll._id}>
                    <Button bsStyle="primary">
                        View Results
                    </Button>
                </LinkContainer>
                {props.showDelete && deleteButton}
            </ButtonToolbar>
        </Panel>
    );    
};

export default connect(
    {},
    {
        deletePoll
    }
)(PollCard);
    