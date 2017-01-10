import React from 'react';
import connect from '../Redux/connect';
import { deletePoll, castVote } from '../Redux/ActionCreators/PollActions';
import userVoteToken from '../Redux/Selectors/UserVoteToken';
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Col, ButtonToolbar, Button, Panel } from 'react-bootstrap';
import Fa from 'react-fontawesome';

class PollCard extends React.Component {
    constructor() {
        super();
        this.state = {
            confirmDelete: false
        }
    }

    toggleDeleteConfirm(show) {
        this.setState({
            confirmDelete: show
        })
    }

    render() {
        const deleteButton = (
            <Button bsStyle="danger" onClick={() => this.toggleDeleteConfirm(true)}>
                <Fa name="trash-o" />
                Delete poll
            </Button>
        );

        const deleteCancel = (
            <Button bsStyle="info" onClick={() => this.toggleDeleteConfirm(false)}>
                Not Really
            </Button>
        );

        const deleteConfirm = (
            <Button bsStyle="danger" onClick={() => this.props.deletePoll(this.props.poll._id)}>
                Seriously Delete!
            </Button>
        );

        const allowedToVote = this.props.poll.answers.reduce((result, answer) => {
            return result && answer.votes.indexOf(this.props.userVoteToken) < 0
        }, true);

        const answers = this.props.poll.answers.map((answer, i) => {
            return (
                <Button key={i} disabled={!allowedToVote} bsSize="large" onClick={() => this.props.castVote(this.props.poll._id, answer._id)}>{answer.answer}</Button>
            );
        });

        const date = new Date(this.props.poll.creation_date).toUTCString();

        return (
            <Panel bsStyle="info" header={date} >
                <Row className="text-center">
                    <ButtonToolbar className="center">
                        <h4>{this.props.poll.question}</h4>
                        {answers}
                    </ButtonToolbar>
                </Row>
                <Row className="text-center">
                    <ButtonToolbar className="center">
                        <LinkContainer to={"/polls/view/" + this.props.poll._id}>
                            <Button bsStyle="primary">
                                View Results
                            </Button>
                        </LinkContainer>
                        
                        {!allowedToVote &&
                            <div>You have voted!</div>    
                        }
                        
                        {this.props.showDelete && !this.state.confirmDelete && deleteButton}                      
                        {this.props.showDelete && this.state.confirmDelete && deleteCancel}                  
                        {this.props.showDelete && this.state.confirmDelete && deleteConfirm}
                    </ButtonToolbar>
                </Row>
            </Panel>
        );   
    }
     
};

export default connect(
    {
        userVoteToken
    },
    {
        deletePoll,
        castVote
    }
)(PollCard);
    